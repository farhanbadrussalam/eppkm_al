    var satuan = document.getElementsByClassName("leaflet-draw-draw-marker");

    for (var i=0; i < satuan.length; i++) {
        satuan[i].onclick = function(){
            // $(".leaflet-draw-draw-marker").load("popup/menu.php");
            open_pop();
            window.location.href = "#menu_utama";
        }
    };

 document.getElementsByClassName("leaflet-draw-draw-polyline")[0].onclick = function(evt){
    status_draw_poly = false;
    open_menu("polyline");
 }
 document.getElementsByClassName("leaflet-draw-draw-polygon")[0].onclick = function(evt){
    open_menu("polygon");
 }
 document.getElementsByClassName("leaflet-draw-draw-rectangle")[0].onclick = function(evt){
    open_menu("polygon");
 }
 document.getElementsByClassName("leaflet-draw-draw-circle")[0].onclick = function(evt){
    open_menu("polygon");
 }
    
    
