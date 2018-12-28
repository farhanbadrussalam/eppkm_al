function GetDistance(point1, point2){
            var x2 = (point2.lng - point1.lng)*(point2.lng - point1.lng);
            var y2 = (point2.lat - point1.lat)*(point2.lat - point1.lat);
            var dtmp = x2+y2;
            var d = Math.sqrt(dtmp)
            return d;
            
          }
//  ============================================ MERIAM ===========================================================//
function tembak_obj_meriam(lat,lng,angledir,angleweap){

    var tmp_var_x =lng;
    var tmp_var_y = lat;

    console.log(angledir);
    console.log(angleweap);

    var direct = angledir;
    var weapon_ang = angleweap;
    var latlng_awal = {lng: lng,lat: lat};
    orX = parseFloat(tmp_var_x);
    orY = parseFloat(tmp_var_y);
    ang = parseFloat(direct);
    var sudut_arr = 0;
    if(ang==0){
      sudut_arr = ang+90;
    }
    if(ang>0 && ang <= 90){
      sudut_arr = 90-ang;
    }
    if(ang > 90 && ang <= 180){
      var a = ang-90;
      sudut_arr = 360-a;
    }
    if(ang > 180 && ang <= 270){
      var a = ang-180;
      sudut_arr = 270-a;
    }
    if(ang > 270 && ang < 360){
      var a = ang-270;
      sudut_arr = 180 - a;
    }
    if(ang == 360){
      sudut_arr = 90;
    }
    angWeapon = parseFloat(weapon_ang);
    var arrRes = [];
    var v = 200; //kecepatan m/s
    var g = 10; //gravitasi
    var s = angWeapon; //sudut
    var sdt = (s/180)* Math.PI; // degree to radiant
    var n = Math.sin(sdt);
    var o=n*n;
    var p=(v*v)*o / (2*g); //rumus h-max
    var tp=(v*n)/g; //waktu puncak
    var xm=(v*v)* Math.sin(2*sdt)/g; //jarak maksimum yang ditempuh
    var ts=2.*tp; //waktu maksimum untuk menempuh jarak maksimum
    var tmp_arrmeriam = [];
    for (var t=0;t<ts;t+=0.1){
      var x= v * t * Math.cos (sdt);//distance
      var y= v * t * Math.sin (sdt)- 0.5*g*(t*t);//altitude
      //plot(x,y); //membuat grafik gerak parabola
      var tmpx = orX + ((x * Math.cos((sudut_arr*Math.PI)/180))/113000); 
      var tmpy = orY + ((x * Math.sin((sudut_arr*Math.PI)/180))/113000);

      tmp_arrmeriam = {lng: tmpx,lat: tmpy};
    }
    arrRes_meriam.push(tmp_arrmeriam);
    counter_meriam.push(1);
    arr_ts_meriam.push(ts);
    var jarak_persatu = GetDistance(latlng_awal,tmp_arrmeriam);
    var t = ((jarak_persatu * 111)) / v;
    var tdet = (t * 3600)*1000;

    var latlng = [];
    latlng.push(latlng_awal);
    latlng.push(tmp_arrmeriam);

    var myIcon = L.icon({
        iconUrl: '../image/weapon/cannon.png',
        iconSize: [20, 20]
    });
    var marker5 = L.Marker.movingMarker(
        latlng,
        (tdet), {
            autostart: true,
            icon: myIcon
        });
    // marker5._icon.style.transform = 'rotate(50deg)';
    marker5.options.rotationAngle = sudut_arr*-1;
    weapon_layer.addLayer(marker5);

    marker5.on('end', function(){
      weapon_layer.removeLayer(marker5);
    });
    
}

// =================================================================== TORPEDO ================================================== //
function tembak_obj_torpedo(lat,lng,angledir,angleweap){
    var tmp_var_x =lng;
    var tmp_var_y = lat;

    var direct = angledir;
    var weapon_ang = angleweap;

    orX = parseFloat(tmp_var_x);
    orY = parseFloat(tmp_var_y);
    ang = parseFloat(direct);
    angWeapon = parseFloat(weapon_ang);

    var latlng_awal = {lng: lng,lat: lat};

    var sudut_arr = 0;
    if(ang==0){
      sudut_arr = ang+90;
    }
    if(ang>0 && ang <= 90){
      sudut_arr = 90-ang;
    }
    if(ang > 90 && ang <= 180){
      var a = ang-90;
      sudut_arr = 360-a;
    }
    if(ang > 180 && ang <= 270){
      var a = ang-180;
      sudut_arr = 270-a;
    }
    if(ang > 270 && ang < 360){
      var a = ang-270;
      sudut_arr = 180 - a;
    }
    if(ang == 360){
      sudut_arr = 90;
    }

    var v = 100; //kecepatan m/s
    var g = 10; //gravitasi
    var s = angWeapon; //sudut
    var sdt = (s/180)* Math.PI; // degree to radiant
    var n = Math.sin(sdt);
    var o=n*n;
    var p=(v*v)*o / (2*g); //rumus h-max
    var tp=(v*n)/g; //waktu puncak
    var xm=(v*v)* Math.sin(2*sdt)/g; //jarak maksimum yang ditempuh
    var ts=2.*tp; //waktu maksimum untuk menempuh jarak maksimum
    var tmp_arrtorpedo = [];
    for (var t=0;t<ts;t+=0.1){
      var x= v * t * Math.cos (sdt);//distance
      var y= v * t * Math.sin (sdt)- 0.5*g*(t*t);//altitude
      //plot(x,y); //membuat grafik gerak parabola
      var tmpx = orX + ((x * Math.cos((sudut_arr*Math.PI)/180))/113000); 
      var tmpy = orY + ((x * Math.sin((sudut_arr*Math.PI)/180))/113000);

      // tmp_arrtorpedo.push([tmpx,tmpy]);
      tmp_arrtorpedo = {lng: tmpx,lat: tmpy};
    }
    arrRes_torpedo.push(tmp_arrtorpedo);
    counter_torpedo.push(1);
    arr_ts_torpedo.push(ts);
    var jarak_persatu = GetDistance(latlng_awal,tmp_arrtorpedo);
    var t = ((jarak_persatu * 111)) / v;
    var tdet = (t * 3600)*1000;

    var latlng = [];
    latlng.push(latlng_awal);
    latlng.push(tmp_arrtorpedo);

    console.log(latlng);
    var myIcon;
    if(map.getZoom()<10){
        myIcon = L.icon({
            iconUrl: 'image/weapon/tembak/torpedo.png',
            iconSize: [25, 25]
        });
    }else{
        myIcon = L.icon({
            iconUrl: 'image/weapon/tembak/torpedo.png',
            iconSize: [20, 20]
        });
    }

    var marker5 = L.Marker.movingMarker(
        latlng,
        (tdet), {
            autostart: true,
            icon: myIcon
        });
    weapon_layer.addLayer(marker5);

    marker5.on('end', function(){
        weapon_layer.removeLayer(marker5);
    });
  }