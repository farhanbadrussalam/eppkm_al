////////////////////////////////////////////////////////////////////////////////////////////
//setting up the map//
////////////////////////////////////////////////////////////////////////////////////////////

// set center coordinates
var centerlat = 34;
var centerlon = -118.25;

// set default zoom level
var zoomLevel = 10;

// initialize map
var map = L.map('map', {
    zoomControl: false
}).setView([centerlat, centerlon], zoomLevel);

// set source for map tiles
ATTR = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | ' +
'&copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

CDB_URL = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

// add tiles to map
L.tileLayer(CDB_URL, {attribution: ATTR}).addTo(map);

////////////////////////////////////////////////////////////////////////////////////////////
//some geometry to test against//
////////////////////////////////////////////////////////////////////////////////////////////

var poly = {
    "type": "MultiPolygon",
        "coordinates": [
        [
            [
                [-118.2, 34],
                [-118.3, 34],
                [-118.3, 34.10],
                [-118.2, 34.10],
                [-118.2, 34]
            ]
        ],
        [
            [
                [-118.5, 33.75],
                [-118, 33.75],
                [-118, 34.25],
                [-118.5, 34.25],
                [-118.5, 33.75]
            ],
            [
                [-118.1, 33.85],
                [-118.4, 33.85],
                [-118.4, 34.15],
                [-118.1, 34.15],
                [-118.1, 33.85]
            ]
        ]
    ]
}

////////////////////////////////////////////////////////////////////////////////////////////
//Leaflet layers and controls//
////////////////////////////////////////////////////////////////////////////////////////////

var polyLayer = L.geoJson(poly).addTo(map),
    drawGroup = L.geoJson().addTo(map),
    drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawGroup
        },
        draw: {
            circle: false,
            marker: false
        }
    }).addTo(map);

////////////////////////////////////////////////////////////////////////////////////////////
//draw event handlers//
////////////////////////////////////////////////////////////////////////////////////////////

map.on('draw:created', function (e) {
    //check for intersections between draw layer and base geometry
    // console.log(polyLayer);
    var checked = crossCheck(polyLayer, e.layer);
    //add intersection points to map
    L.geoJson(checked).addTo(map);
    drawGroup.addLayer(e.layer);
});

map.on('overlayadd', function () {
    drawGroup.bringToFront();
});

////////////////////////////////////////////////////////////////////////////////////////////
//intersection and geometry conversion functions//
////////////////////////////////////////////////////////////////////////////////////////////

// corrected intersection code from https://github.com/maxogden/geojson-js-utils
// (using projected coordinates, because straight lat/lons will produce incorrect results)
// originally adapted from http://www.kevlindev.com/gui/math/intersection/Intersection.js
function lineStringsIntersect(l1, l2) {
    var intersects = [];
    for (var i = 0; i <= l1.coordinates.length - 2; ++i) {
        for (var j = 0; j <= l2.coordinates.length - 2; ++j) {
            var a1Latlon = L.latLng(l1.coordinates[i][1], l1.coordinates[i][0]),
                a2Latlon = L.latLng(l1.coordinates[i + 1][1], l1.coordinates[i + 1][0]),
                b1Latlon = L.latLng(l2.coordinates[j][1], l2.coordinates[j][0]),
                b2Latlon = L.latLng(l2.coordinates[j + 1][1], l2.coordinates[j + 1][0]),
                a1 = L.Projection.SphericalMercator.project(a1Latlon),
                a2 = L.Projection.SphericalMercator.project(a2Latlon),
                b1 = L.Projection.SphericalMercator.project(b1Latlon),
                b2 = L.Projection.SphericalMercator.project(b2Latlon),
                ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
                ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
                u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
            if (u_b != 0) {
                var ua = ua_t / u_b,
                    ub = ub_t / u_b;
                if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                    var pt_x = a1.x + ua * (a2.x - a1.x),
                        pt_y = a1.y + ua * (a2.y - a1.y),
                        pt_xy = {
                            "x": pt_x,
                                "y": pt_y
                        },
                        pt_latlon = L.Projection.SphericalMercator.unproject(pt_xy);
                    intersects.push({
                        'type': 'Point',
                            'coordinates': [pt_latlon.lng, pt_latlon.lat]
                    });
                }
            }
        }
    }
    if (intersects.length == 0) intersects = false;
    return intersects;
}

//takes GeoJSON as input, creates a GeoJSON GeometryCollection of linestrings as output
function lineify(inputGeom) {
    var outputLines = {
        "type": "GeometryCollection",
            "geometries": []
    }
    switch (inputGeom.type) {
        case "GeometryCollection":
            for (var i in inputGeom.geometries) {
                var geomLines = lineify(inputGeom.geometries[i]);
                if (geomLines) {
                    for (var j in geomLines.geometries) {
                        outputLines.geometries.push(geomLines.geometries[j]);
                    }
                } else {
                    outputLines = false;
                }
            }
            break;
        case "Feature":
            var geomLines = lineify(inputGeom.geometry);
            if (geomLines) {
                for (var j in geomLines.geometries) {
                    outputLines.geometries.push(geomLines.geometries[j]);
                }
            } else {
                outputLines = false;
            }
            break;
        case "FeatureCollection":
            for (var i in inputGeom.features) {
                var geomLines = lineify(inputGeom.features[i].geometry);
                if (geomLines) {
                    for (var j in geomLines.geometries) {
                        outputLines.geometries.push(geomLines.geometries[j]);
                    }
                } else {
                    outputLines = false;
                }
            }
            break;
        case "LineString":
            outputLines.geometries.push(inputGeom);
            break;
        case "MultiLineString":
        case "Polygon":
            for (var i in inputGeom.coordinates) {
                outputLines.geometries.push({
                    "type": "LineString",
                        "coordinates": inputGeom.coordinates[i]
                });
            }
            break;
        case "MultiPolygon":
            for (var i in inputGeom.coordinates) {
                for (var j in inputGeom.coordinates[i]) {
                    outputLines.geometries.push({
                        "type": "LineString",
                            "coordinates": inputGeom.coordinates[i][j]
                    });
                }
            }
            break;
        default:
            outputLines = false;
    }
    return outputLines;
}

//takes Leaflet layers as input; produces geoJSON points of their intersections as output
function crossCheck(baseLayer, drawLayer) {
    var baseJson = baseLayer.toGeoJSON(),
        drawJson = drawLayer.toGeoJSON(),
        baseLines = lineify(baseJson),
        drawLines = lineify(drawJson),
        crossPoints = {
            type: "GeometryCollection",
            geometries: []
        };
    if (baseLines && drawLines) {
        for (var i in drawLines.geometries) {
            for (var j in baseLines.geometries) {
                var crossTest = lineStringsIntersect(drawLines.geometries[i], baseLines.geometries[j]);
                if (crossTest) {
                    for (var k in crossTest) {
                        crossPoints.geometries.push(crossTest[k]);
                    }
                }
            }
        }
    }
    return crossPoints;
}