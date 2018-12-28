/**
 * @class L.Draw.Toolbar
 * @aka Toolbar
 *
 * The toolbar class of the API — it is used to create the ui
 * This will be depreciated
 *
 * @example
 *
 * ```js
 *    var toolbar = L.Toolbar();
 *    toolbar.addToolbar(map);
 * ```
 *
 * ### Disabling a toolbar
 *
 * If you do not want a particular toolbar in your app you can turn it off by setting the toolbar to false.
 *
 * ```js
 *      var drawControl = new L.Control.Draw({
 *          draw: false,
 *          edit: {
 *              featureGroup: editableLayers
 *          }
 *      });
 * ```
 *
 * ### Disabling a toolbar item
 *
 * If you want to turn off a particular toolbar item, set it to false. The following disables drawing polygons and
 * markers. It also turns off the ability to edit layers.
 *
 * ```js
 *      var drawControl = new L.Control.Draw({
 *          draw: {
 *              polygon: false,
 *              marker: false
 *          },
 *          edit: {
 *              featureGroup: editableLayers,
 *              edit: false
 *          }
 *      });
 * ```
 */
 (function(window, document, undefined) {

"use strict";

L.Toolbar = (L.Layer || L.Class).extend({
	statics: {
		baseClass: 'leaflet-toolbar'
	},

	includes: L.Mixin.Events,

	options: {
		className: '',
		filter: function() { return true; },
		actions: []
	},

	addTo: function(map) {
		this._arguments = [].slice.call(arguments);

		map.addLayer(this);

		return this;
	},

	onAdd: function(map) {
		var currentToolbar = map._toolbars[this._toolbar_type];

		if (this._calculateDepth() === 0) {
			if (currentToolbar) { map.removeLayer(currentToolbar); }
			map._toolbars[this._toolbar_type] = this;
		}
	},

	onRemove: function(map) {
		/* 
		 * TODO: Cleanup event listeners. 
		 * For some reason, this throws:
		 * "Uncaught TypeError: Cannot read property 'dragging' of null"
		 * on this._marker when a toolbar icon is clicked.
		 */
		// for (var i = 0, l = this._disabledEvents.length; i < l; i++) {
		// 	L.DomEvent.off(this._ul, this._disabledEvents[i], L.DomEvent.stopPropagation);
		// }

		if (this._calculateDepth() === 0) {
			delete map._toolbars[this._toolbar_type];
		}
	},

	appendToContainer: function(container) {
		var baseClass = this.constructor.baseClass + '-' + this._calculateDepth(),
			className = baseClass + ' ' + this.options.className,
			Action, action,
			i, j, l, m;

		this._container = container;
		this._ul = L.DomUtil.create('ul', className, container);

		/* Ensure that clicks, drags, etc. don't bubble up to the map. */
		this._disabledEvents = ['click', 'mousemove', 'dblclick'];

		for (j = 0, m = this._disabledEvents.length; j < m; j++) {
			L.DomEvent.on(this._ul, this._disabledEvents[j], L.DomEvent.stopPropagation);
		}

		/* Instantiate each toolbar action and add its corresponding toolbar icon. */
		for (i = 0, l = this.options.actions.length; i < l; i++) {
			Action = this._getActionConstructor(this.options.actions[i]);

			action = new Action();
			action._createIcon(this, this._ul, this._arguments);
		}
	},

	_getActionConstructor: function(Action) {
		var args = this._arguments,
			toolbar = this;

		return Action.extend({
			initialize: function() {
				Action.prototype.initialize.apply(this, args);
			},
			enable: function(e) {
				/* Ensure that only one action in a toolbar will be active at a time. */
				if (toolbar._active) { toolbar._active.disable(); }
				toolbar._active = this;

				Action.prototype.enable.call(this, e);
			}
		});
	},

	initialize: function (options) {
		L.setOptions(this, options);

		this._modes = {};
		this._actionButtons = [];
		this._activeMode = null;

		var version = L.version.split('.');
		//If Version is >= 1.2.0
		if (parseInt(version[0], 10) === 1 && parseInt(version[1], 10) >= 2) {
			L.Toolbar.include(L.Evented.prototype);
		} else {
			L.Toolbar.include(L.Mixin.Events);
		}
	},

	// @method enabled(): boolean
	// Gets a true/false of whether the toolbar is enabled
	enabled: function () {
		return this._activeMode !== null;
	},

	// @method disable(): void
	// Disables the toolbar
	disable: function () {
		if (!this.enabled()) {
			return;
		}

		this._activeMode.handler.disable();
	},

	// @method addToolbar(map): L.DomUtil
	// Adds the toolbar to the map and returns the toolbar dom element
	addToolbar: function (map) {
		var container = L.DomUtil.create('div', 'leaflet-draw-section'),
			buttonIndex = 0,
			buttonClassPrefix = this._toolbarClass || '',
			modeHandlers = this.getModeHandlers(map),
			i;

		this._toolbarContainer = L.DomUtil.create('div', 'leaflet-draw-toolbar leaflet-bar');
		this._map = map;

		for (i = 0; i < modeHandlers.length; i++) {
			if (modeHandlers[i].enabled) {
				this._initModeHandler(
					modeHandlers[i].handler,
					this._toolbarContainer,
					buttonIndex++,
					buttonClassPrefix,
					modeHandlers[i].title
				);
			}
		}

		// if no buttons were added, do not add the toolbar
		if (!buttonIndex) {
			return;
		}

		// Save button index of the last button, -1 as we would have ++ after the last button
		this._lastButtonIndex = --buttonIndex;

		// Create empty actions part of the toolbar
		this._actionsContainer = L.DomUtil.create('ul', 'leaflet-draw-actions');

		// Add draw and cancel containers to the control container
		container.appendChild(this._toolbarContainer);
		container.appendChild(this._actionsContainer);

		return container;
	},

	// @method removeToolbar(): void
	// Removes the toolbar and drops the handler event listeners
	removeToolbar: function () {
		// Dispose each handler
		for (var handlerId in this._modes) {
			if (this._modes.hasOwnProperty(handlerId)) {
				// Unbind handler button
				this._disposeButton(
					this._modes[handlerId].button,
					this._modes[handlerId].handler.enable,
					this._modes[handlerId].handler
				);

				// Make sure is disabled
				this._modes[handlerId].handler.disable();

				// Unbind handler
				this._modes[handlerId].handler
					.off('enabled', this._handlerActivated, this)
					.off('disabled', this._handlerDeactivated, this);
			}
		}
		this._modes = {};

		// Dispose the actions toolbar
		for (var i = 0, l = this._actionButtons.length; i < l; i++) {
			this._disposeButton(
				this._actionButtons[i].button,
				this._actionButtons[i].callback,
				this
			);
		}
		this._actionButtons = [];
		this._actionsContainer = null;
	},

	_initModeHandler: function (handler, container, buttonIndex, classNamePredix, buttonTitle) {
		var type = handler.type;

		this._modes[type] = {};

		this._modes[type].handler = handler;

		this._modes[type].button = this._createButton({
			type: type,
			title: buttonTitle,
			className: classNamePredix + '-' + type,
			container: container,
			callback: this._modes[type].handler.enable,
			context: this._modes[type].handler
		});

		this._modes[type].buttonIndex = buttonIndex;

		this._modes[type].handler
			.on('enabled', this._handlerActivated, this)
			.on('disabled', this._handlerDeactivated, this);
	},

	/* Detect iOS based on browser User Agent, based on:
	 * http://stackoverflow.com/a/9039885 */
	_detectIOS: function () {
		var iOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
		return iOS;
	},

	_createButton: function (options) {

		var link = L.DomUtil.create('a', options.className || '', options.container);
		// Screen reader tag
		var sr = L.DomUtil.create('span', 'sr-only', options.container);

		link.href = '#';
		link.appendChild(sr);

		if (options.title) {
			link.title = options.title;
			sr.innerHTML = options.title;
		}

		if (options.text) {
			link.innerHTML = options.text;
			sr.innerHTML = options.text;
		}

		/* iOS does not use click events */
		var buttonEvent = this._detectIOS() ? 'touchstart' : 'click';

		L.DomEvent
			.on(link, 'click', L.DomEvent.stopPropagation)
			.on(link, 'mousedown', L.DomEvent.stopPropagation)
			.on(link, 'dblclick', L.DomEvent.stopPropagation)
			.on(link, 'touchstart', L.DomEvent.stopPropagation)
			.on(link, 'click', L.DomEvent.preventDefault)
			.on(link, buttonEvent, options.callback, options.context);

		return link;
	},

	_disposeButton: function (button, callback) {
		/* iOS does not use click events */
		var buttonEvent = this._detectIOS() ? 'touchstart' : 'click';

		L.DomEvent
			.off(button, 'click', L.DomEvent.stopPropagation)
			.off(button, 'mousedown', L.DomEvent.stopPropagation)
			.off(button, 'dblclick', L.DomEvent.stopPropagation)
			.off(button, 'touchstart', L.DomEvent.stopPropagation)
			.off(button, 'click', L.DomEvent.preventDefault)
			.off(button, buttonEvent, callback);
	},

	_handlerActivated: function (e) {
		// Disable active mode (if present)
		this.disable();

		// Cache new active feature
		this._activeMode = this._modes[e.handler];

		L.DomUtil.addClass(this._activeMode.button, 'leaflet-draw-toolbar-button-enabled');

		this._showActionsToolbar();

		this.fire('enable');
	},

	_handlerDeactivated: function () {
		this._hideActionsToolbar();

		L.DomUtil.removeClass(this._activeMode.button, 'leaflet-draw-toolbar-button-enabled');

		this._activeMode = null;

		this.fire('disable');
	},

	_createActions: function (handler) {
		var container = this._actionsContainer,
			buttons = this.getActions(handler),
			l = buttons.length,
			li, di, dl, button;

		// Dispose the actions toolbar (todo: dispose only not used buttons)
		for (di = 0, dl = this._actionButtons.length; di < dl; di++) {
			this._disposeButton(this._actionButtons[di].button, this._actionButtons[di].callback);
		}
		this._actionButtons = [];

		// Remove all old buttons
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

		for (var i = 0; i < l; i++) {
			if ('enabled' in buttons[i] && !buttons[i].enabled) {
				continue;
			}

			li = L.DomUtil.create('li', '', container);

			button = this._createButton({
				title: buttons[i].title,
				text: buttons[i].text,
				container: li,
				callback: buttons[i].callback,
				context: buttons[i].context
			});

			this._actionButtons.push({
				button: button,
				callback: buttons[i].callback
			});
		}
	},

	_showActionsToolbar: function () {
		var buttonIndex = this._activeMode.buttonIndex,
			lastButtonIndex = this._lastButtonIndex,
			toolbarPosition = this._activeMode.button.offsetTop - 1;


		// this._ul.style.display = 'block';
		
		// Recreate action buttons on every click
		this._createActions(this._activeMode.handler);

		// Correctly position the cancel button
		this._actionsContainer.style.top = toolbarPosition + 'px';

		if (buttonIndex === 0) {
			L.DomUtil.addClass(this._toolbarContainer, 'leaflet-draw-toolbar-notop');
			L.DomUtil.addClass(this._actionsContainer, 'leaflet-draw-actions-top');
		}

		if (buttonIndex === lastButtonIndex) {
			L.DomUtil.addClass(this._toolbarContainer, 'leaflet-draw-toolbar-nobottom');
			L.DomUtil.addClass(this._actionsContainer, 'leaflet-draw-actions-bottom');
		}

		this._actionsContainer.style.display = 'block';
		this._map.fire(L.Draw.Event.TOOLBAROPENED);
	},

	_hideActionsToolbar: function () {
		this._actionsContainer.style.display = 'none';

		L.DomUtil.removeClass(this._toolbarContainer, 'leaflet-draw-toolbar-notop');
		L.DomUtil.removeClass(this._toolbarContainer, 'leaflet-draw-toolbar-nobottom');
		L.DomUtil.removeClass(this._actionsContainer, 'leaflet-draw-actions-top');
		L.DomUtil.removeClass(this._actionsContainer, 'leaflet-draw-actions-bottom');
		// this._ul.style.display = 'none';

		this._map.fire(L.Draw.Event.TOOLBARCLOSED);
	},

	_calculateDepth: function() {
		var depth = 0,
			toolbar = this.parentToolbar;

		while (toolbar) {
			depth += 1;
			toolbar = toolbar.parentToolbar;
		}

		return depth;
	}
});

L.toolbar = {};

var toolbar_class_id = 0;

L.Toolbar.extend = function extend(props) {
	var statics = L.extend({}, props.statics, {
		"_toolbar_class_id": toolbar_class_id
	});

	toolbar_class_id += 1;
	L.extend(props, { statics: statics });

	return L.Class.extend.call(this, props);
};

L.Map.addInitHook(function() {
	this._toolbars = {};
});

L.ToolbarAction = L.Handler.extend({
	statics: {
		baseClass: 'leaflet-toolbar-icon'
	},

	options: {
		toolbarIcon: {
			html: '',
			className: '',
			tooltip: ''
		},
		subToolbar: new L.Toolbar()
	},

	initialize: function(options) {
		var defaultIconOptions = L.ToolbarAction.prototype.options.toolbarIcon;

		L.setOptions(this, options);
		this.options.toolbarIcon = L.extend({}, defaultIconOptions, this.options.toolbarIcon);
	},

	enable: function(e) {
		if (e) { L.DomEvent.preventDefault(e); }
		if (this._enabled) { return; }
		this._enabled = true;

		if (this.addHooks) { this.addHooks(); }
	},

	disable: function() {
		if (!this._enabled) { return; }
		this._enabled = false;

		if (this.removeHooks) { this.removeHooks(); }
	},

	_createIcon: function(toolbar, container, args) {
		var iconOptions = this.options.toolbarIcon;

		this.toolbar = toolbar;
		this._icon = L.DomUtil.create('li', '', container);
		this._link = L.DomUtil.create('a', '', this._icon);

		this._link.innerHTML = iconOptions.html;
		this._link.setAttribute('href', '#');
		this._link.setAttribute('title', iconOptions.tooltip);

		L.DomUtil.addClass(this._link, this.constructor.baseClass);
		if (iconOptions.className) {
			L.DomUtil.addClass(this._link, iconOptions.className);
		}

		L.DomEvent.on(this._link, 'click', this.enable, this);

		/* Add secondary toolbar */
		this._addSubToolbar(toolbar, this._icon, args);
	},

	_addSubToolbar: function(toolbar, container, args) {
		var subToolbar = this.options.subToolbar,
			addHooks = this.addHooks,
			removeHooks = this.removeHooks;

		/* For calculating the nesting depth. */
		subToolbar.parentToolbar = toolbar;

		if (subToolbar.options.actions.length > 0) {
			/* Make a copy of args so as not to pollute the args array used by other actions. */
			args = [].slice.call(args);
			args.push(this);

			subToolbar.addTo.apply(subToolbar, args);
			subToolbar.appendToContainer(container);

			this.addHooks = function(map) {
				if (typeof addHooks === 'function') { addHooks.call(this, map); }
				subToolbar._show();
			};

			this.removeHooks = function(map) {
				if (typeof removeHooks === 'function') { removeHooks.call(this, map); }
				subToolbar._hide();
			};
		}
	}
});

L.toolbarAction = function toolbarAction(options) {
	return new L.ToolbarAction(options);
};

L.ToolbarAction.extendOptions = function(options) {
	return this.extend({ options: options });
};

L.Toolbar.Control = L.Toolbar.extend({
	statics: {
		baseClass: 'leaflet-control-toolbar ' + L.Toolbar.baseClass
	},

	initialize: function(options) {
		L.Toolbar.prototype.initialize.call(this, options);

		this._control = new L.Control.Toolbar(this.options);
	},

	onAdd: function(map) {
		this._control.addTo(map);

		L.Toolbar.prototype.onAdd.call(this, map);

		this.appendToContainer(this._control.getContainer());
	},

	onRemove: function(map) {
		L.Toolbar.prototype.onRemove.call(this, map);
		if (this._control.remove) {this._control.remove();}  // Leaflet 1.0
		else {this._control.removeFrom(map);}
	}
});

L.Control.Toolbar = L.Control.extend({
	onAdd: function() {
		return L.DomUtil.create('div', '');
	}
});

L.toolbar.control = function(options) {
    return new L.Toolbar.Control(options);
};

// A convenience class for built-in popup toolbars.

L.Toolbar.Popup = L.Toolbar.extend({
	statics: {
		baseClass: 'leaflet-popup-toolbar ' + L.Toolbar.baseClass
	},

	options: {
		anchor: [0, 0]
	},

	initialize: function(latlng, options) {
		L.Toolbar.prototype.initialize.call(this, options);

		/* 
		 * Developers can't pass a DivIcon in the options for L.Toolbar.Popup
		 * (the use of DivIcons is an implementation detail which may change).
		 */
		this._marker = new L.Marker(latlng, {
			icon : new L.DivIcon({
				className: this.options.className,
				iconAnchor: [0, 0]
			})
		});
	},

	onAdd: function(map) {
		this._map = map;
		this._marker.addTo(map);

		L.Toolbar.prototype.onAdd.call(this, map);

		this.appendToContainer(this._marker._icon);

		this._setStyles();
	},

	onRemove: function(map) {
		map.removeLayer(this._marker);

		L.Toolbar.prototype.onRemove.call(this, map);

		delete this._map;
	},

	setLatLng: function(latlng) {
		this._marker.setLatLng(latlng);

		return this;
	},

	_setStyles: function() {
		var container = this._container,
			toolbar = this._ul,
			anchor = L.point(this.options.anchor),
			icons = toolbar.querySelectorAll('.leaflet-toolbar-icon'),
			buttonHeights = [],
			toolbarWidth = 0,
			toolbarHeight,
			tipSize,
			tipAnchor;

		/* Calculate the dimensions of the toolbar. */
		for (var i = 0, l = icons.length; i < l; i++) {
			if (icons[i].parentNode.parentNode === toolbar) {
				buttonHeights.push(parseInt(L.DomUtil.getStyle(icons[i], 'height'), 10));
				toolbarWidth += Math.ceil(parseFloat(L.DomUtil.getStyle(icons[i], 'width')));
			}
		}
		toolbar.style.width = toolbarWidth + 'px';

		/* Create and place the toolbar tip. */
		this._tipContainer = L.DomUtil.create('div', 'leaflet-toolbar-tip-container', container);
		this._tipContainer.style.width = toolbarWidth + 'px';

		this._tip = L.DomUtil.create('div', 'leaflet-toolbar-tip', this._tipContainer);

		/* Set the tipAnchor point. */
		toolbarHeight = Math.max.apply(undefined, buttonHeights);
		tipSize = parseInt(L.DomUtil.getStyle(this._tip, 'width'), 10);
		tipAnchor = new L.Point(toolbarWidth/2, toolbarHeight + 0.7071*tipSize);

		/* The anchor option allows app developers to adjust the toolbar's position. */
		container.style.marginLeft = (anchor.x - tipAnchor.x) + 'px';
		container.style.marginTop = (anchor.y - tipAnchor.y) + 'px';
	}
});

L.toolbar.popup = function(options) {
    return new L.Toolbar.Popup(options);
};


})(window, document);