/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    
    //class Point
    function Point(x,y){
        this.x = x||0;
        this.y = y||0;

        this.getX = function(){
            return this.x;
        };

        this.getY = function(){
            return this.Y;
        };    

        this.setX = function(_x){
                this.x = _x;
        };

        this.setY = function(_y){
                this.x = _y;
        };
    }

    //function for getting middle point of polyline
    function getMidPoint(p1, p2){

        var ptRes = new Point();
        var ax = (p1.x + p2.x) /2;
        var ay = (p1.y + p2.y) /2;
        ptRes.x = ax;
        ptRes.y = ay;

        return ptRes;
    }

    //calculating degree of two points
    function calcDegree(pt1, pt2){
        var  ptRes = new  Point();
        var ax = pt2.x - pt1.x;
        var ay = pt2.y - pt1.y;
        ptRes.x = ax;
        ptRes.y = ay;
        
        var at = (Math.atan2(ay, ax) * 180 )/ Math.PI;
        return    at;


    }

    //calculating distance of two points
    function calcDistance(pt1, pt2){
        var a = ((pt2.x - pt1.x)*(pt2.x - pt1.x))+((pt2.y-pt1.y)*(pt2.y-pt1.y));
        var dist = Math.sqrt(a);
        return dist;
    }

    //function for creating straight arrow polygon
    //prim
    function createSAP(pt1, pt2, size){
        var ang = calcDegree(pt1,pt2);
        var arrPoint = [];

        var tmpx = (size* Math.cos((ang+90) * Math.PI/180));
        var tmpy = (size * Math.sin((ang+90) * Math.PI/180));
        var tmpx1 = ((size*2) * Math.cos((ang+90) * Math.PI/180));
        var tmpy1 = ((size*2) * Math.sin((ang+90) * Math.PI/180));

        //create 1st Point
        var _x = pt1.x + tmpx;
        var _y = pt1.y + tmpy;
        var tmpPt = new Point(_x,_y);
        arrPoint.push(tmpPt);

        //create 2nd Point
        var _x = pt1.x - tmpx;
        var _y = pt1.y - tmpy;
        var tmpPt = new Point(_x,_y);
        arrPoint.push(tmpPt);

        //create 3rd Point
        var _x = (getMidPoint(pt1,pt2).x + pt2.x) / 2 - tmpx;
        var _y = (getMidPoint(pt1,pt2).y + pt2.y) / 2 - tmpy;
        tmpPt = new Point(_x, _y);
        arrPoint.push(tmpPt);

        //create 4th Point
        _x = (getMidPoint(pt1,pt2).x + pt2.x) / 2 - tmpx1;
        _y = (getMidPoint(pt1,pt2).y + pt2.y) / 2 - tmpy1;
        tmpPt = new Point(_x, _y);
        arrPoint.push(tmpPt);

        //create 5th Point
        arrPoint.push(pt2);

        //creaate 6th Point
        _x = (getMidPoint(pt1,pt2).x + pt2.x) / 2 + tmpx1;
        _y = (getMidPoint(pt1,pt2).y + pt2.y) / 2 + tmpy1;
        tmpPt = new Point(_x, _y);
        arrPoint.push(tmpPt);

        //
        _x = (getMidPoint(pt1,pt2).x + pt2.x) / 2 + tmpx;
        _y = (getMidPoint(pt1,pt2).y + pt2.y) / 2 + tmpy;
        tmpPt = new Point(_x, _y);
        arrPoint.push(tmpPt);


        var arrCoordOnly = [];
        for (i=0;i<arrPoint.length;i++){
            arrCoordOnly.push([arrPoint[i].y,arrPoint[i].x]);
        }

        return arrCoordOnly;
    }
	
	function createCAPs(pt1, pt2,size,kurang){

        var ang1 = calcDegree(pt1,pt2);
        var ang2 = calcDegree(pt2,pt1);
        var aDist = calcDistance(pt1,pt2) / 2;
        var arrPoint = createEmptyArrayPoint(343);
        
        var aPt1 = new Point();
        var aPt2 = new Point();
        
        aPt1.x = getMidPoint(pt1, pt2).x - (2*size * Math.cos((ang1)* Math.PI/ 180));
		aPt1.y = getMidPoint(pt1, pt2).y - (2*size * Math.sin((ang1)* Math.PI/ 180));
		aPt2.x = getMidPoint(pt1, pt2).x + (size * Math.cos((ang1)* Math.PI/ 180));
		aPt2.y = getMidPoint(pt1, pt2).y + (size * Math.sin((ang1)* Math.PI/ 180));

        
        if (ang1 < ang2){
            //curved to rigth
            
            var n = 0;
            for(var i= Math.round(ang2);i <= Math.round(360 + ang1);i++){            
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){            

                //draw line
                if (i === (Math.round(360+ang1) - 10)){
                    var tmpx = (aPt1.x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i < (Math.round(360+ang1) - 10)) {
                    var tmpx = (aPt1.x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (var i = Math.round(ang2);i<= Math.round(360 + ang1);i++){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(360+ang1) - 10) ){
                    var tmpx = aPt2.x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    var tmpy = aPt2.y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i < (Math.round(360+ang1) - 10)){
                  var tmpx = aPt2.x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  var tmpy = aPt2.y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x=tmpx;
                  arrPoint[n].y=tmpy;
                  n--;
                }

            }
            //creating Polygon From array
            //Canvas.Polygon(arrPoint);
        }
        else
        {
            //reversed
            ang2 = 360 - Math.abs(calcDegree(pt2,pt1));

            var n = 0;
            for(i= Math.round(ang2);i <= Math.round(360 + ang1);i++){            
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                //draw line
                if (i === (Math.round(360+ang1) - 10)){
                    var tmpx = (aPt1.x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i < (Math.round(360+ang1) - 10)) {
                    var tmpx = (aPt1.x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (i = Math.round(ang2);i<= Math.round(360 + ang1);i++){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(360+ang1) - 10) ){
                    tmpx = aPt2.x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    tmpy = aPt2.y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i < (Math.round(360+ang1) - 10)){
                  tmpx = aPt2.x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  tmpy = aPt2.y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x = tmpx;
                  arrPoint[n].y = tmpy;
                  n--;
                }

            }
        }


        var arrCoordOnly = [];
        for (i=0;i<arrPoint.length;i++){
            arrCoordOnly.push([arrPoint[i].y,arrPoint[i].x]);
        }
        return arrCoordOnly;
    }
function createCAPss(pt1, pt2,size,kurang){

        var ang1 = calcDegree(pt1,pt2);
        var ang2 = calcDegree(pt2,pt1);
        var aDist = calcDistance(pt1,pt2) / 2;
        var arrPoint = createEmptyArrayPoint(343);
        
        var aPt1 = new Point();
        var aPt2 = new Point();
        
        aPt1.x = getMidPoint(pt1, pt2).x - (2*size * Math.cos((ang1)* Math.PI/ 180));
		aPt1.y = getMidPoint(pt1, pt2).y - (2*size * Math.sin((ang1)* Math.PI/ 180));
		aPt2.x = getMidPoint(pt1, pt2).x + (size * Math.cos((ang1)* Math.PI/ 180));
		aPt2.y = getMidPoint(pt1, pt2).y + (size * Math.sin((ang1)* Math.PI/ 180));

        
        if (ang1 < ang2){
            //curved to rigth
            
            var n = 0;
            //for(var i= Math.round(ang2);i <= Math.round(360 + ang1);i++){              
			for(var i= Math.round(ang2);i >= Math.round(ang1);i--){ 			

                //draw line
                //if (i === (Math.round(360+ang1) - 10)){
				if (i === (Math.round(ang1) + 10)){
                    var tmpx = (aPt1.x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                //}else if(i < (Math.round(360+ang1) - 10)) {
				}else if(i > (Math.round(ang1) + 10)) {
                    var tmpx = (aPt1.x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            //for (var i = Math.round(ang2);i<= Math.round(360 + ang1);i++){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
			for (var i = Math.round(ang2);i>= Math.round(ang1);i--){
                
                //if (i === (Math.round(360+ang1) - 10) ){
				if (i === (Math.round(ang1) + 10) ){
                    var tmpx = aPt2.x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    var tmpy = aPt2.y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                //else if (i < (Math.round(360+ang1) - 10)){
				else if (i > (Math.round(ang1) + 10)){
                  var tmpx = aPt2.x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  var tmpy = aPt2.y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x=tmpx;
                  arrPoint[n].y=tmpy;
                  n--;
                }

            }
            //creating Polygon From array
            //Canvas.Polygon(arrPoint);
        }
        else
        {
            //reversed
            ang2 = 360 - Math.abs(calcDegree(pt2,pt1));

            var n = 0;
            for(i= Math.round(ang2);i >= Math.round(ang1);i--){ 
                
                //draw line
                if (i === (Math.round(ang1) + 10)){
                    var tmpx = (aPt1.x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i > (Math.round(ang1) + 10)) {
                    var tmpx = (aPt1.x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (aPt1.y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (i = Math.round(ang2);i>= Math.round(ang1);i--){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(ang1) + 10) ){
                    tmpx = aPt2.x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    tmpy = aPt2.y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i > (Math.round(ang1) + 10)){
                  tmpx = aPt2.x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  tmpy = aPt2.y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x = tmpx;
                  arrPoint[n].y = tmpy;
                  n--;
                }

            }
        }


        var arrCoordOnly = [];
        for (i=0;i<arrPoint.length;i++){
            arrCoordOnly.push([arrPoint[i].y,arrPoint[i].x]);
        }
        return arrCoordOnly;
    }
    function createEmptyArrayPoint(_length){
        var arr=[];
        for (var i = 0; i<_length; i++){
            arr.push(new Point());
        }
        return arr;
    }
    function createANM(pt1, pt2){
        

        var ang = calcDegree(pt1,pt2);
        var ang2 = calcDegree(pt2,pt1);
        var aDist = calcDistance(pt1,pt2);
        var mid = getMidPoint(pt1, pt2);

        var kecepatan = 100;// kecepatan km/jam
        var waktu = aDist/kecepatan;
        var waktu = waktu*1000;
        

        var k_jrk = aDist/waktu;
        
        var test = aDist/k_jrk;
        var arrPoint = [];

        var tmpx = (k_jrk * Math.cos((ang) * Math.PI/180));
        var tmpy = (k_jrk * Math.sin((ang) * Math.PI/180));
        var tmpx1 = (k_jrk * Math.cos((ang) * Math.PI/180));
        var tmpy1 = (k_jrk * Math.sin((ang) * Math.PI/180));
        for(a=0;a<=Math.round(test);a++){
            var _x = pt1.x+tmpx*a;
            var _y = pt1.y+tmpy*a;
            var tmpPt = new Point(_x,_y);
            arrPoint.push(tmpPt);
        }

        var arrCoordOnly = [];
        for (i=0;i<arrPoint.length;i++){
            arrCoordOnly.push([arrPoint[i].y,arrPoint[i].x]);
        }

        return arrCoordOnly;
    }
    function createCAP(pt1, pt2,size,kurang){

        var ang1 = calcDegree(pt1,pt2);
        var ang2 = calcDegree(pt2,pt1);
        var aDist = calcDistance(pt1,pt2) / 2;
        var arrPoint = createEmptyArrayPoint(343);
        
        
        if (ang1 < ang2){
            //curved to rigth
            
            var n = 0;
            for(var i= Math.round(ang2);i <= Math.round(360 + ang1);i++){            
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){            

                //draw line
                if (i === (Math.round(360+ang1) - 10)){
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i < (Math.round(360+ang1) - 10)) {
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (var i = Math.round(ang2);i<= Math.round(360 + ang1);i++){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(360+ang1) - 10) ){
                    var tmpx = getMidPoint(pt1,pt2).x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    var tmpy = getMidPoint(pt1,pt2).y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i < (Math.round(360+ang1) - 10)){
                  var tmpx = getMidPoint(pt1,pt2).x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  var tmpy = getMidPoint(pt1,pt2).y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x=tmpx;
                  arrPoint[n].y=tmpy;
                  n--;
                }

            }
            //creating Polygon From array
            //Canvas.Polygon(arrPoint);
        }
        else
        {
            //reversed
            ang2 = 360 - Math.abs(calcDegree(pt2,pt1));

            var n = 0;
            for(i= Math.round(ang2);i <= Math.round(360 + ang1);i++){            
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                //draw line
                if (i === (Math.round(360+ang1) - 10)){
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i < (Math.round(360+ang1) - 10)) {
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (i = Math.round(ang2);i<= Math.round(360 + ang1);i++){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(360+ang1) - 10) ){
                    tmpx = getMidPoint(pt1,pt2).x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    tmpy = getMidPoint(pt1,pt2).y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i < (Math.round(360+ang1) - 10)){
                  tmpx = getMidPoint(pt1,pt2).x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  tmpy = getMidPoint(pt1,pt2).y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x = tmpx;
                  arrPoint[n].y = tmpy;
                  n--;
                }

            }
        }


        var arrCoordOnly = [];
        for (i=0;i<arrPoint.length;i++){
            arrCoordOnly.push([arrPoint[i].y,arrPoint[i].x]);
        }
        return arrCoordOnly;
    }
    
    function createCAPRev(pt1, pt2, size, kurang){

        var ang1 = calcDegree(pt1,pt2);
        var ang2 = calcDegree(pt2,pt1);
        var aDist = calcDistance(pt1,pt2) / 2;
        var arrPoint = createEmptyArrayPoint(343);
        
        
        if (ang1 < ang2){
            //curved to rigth
            
            var n = 0;
            for(var i= Math.round(ang2);i >= Math.round(ang1);i--){            
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){            

                //draw line
                if (i === (Math.round(ang1) + 10)){
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i > (Math.round(ang1) + 10)) {
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (var i = Math.round(ang2);i>= Math.round(ang1);i--){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(ang1) + 10) ){
                    var tmpx = getMidPoint(pt1,pt2).x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    var tmpy = getMidPoint(pt1,pt2).y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i > (Math.round(ang1) + 10)){
                  var tmpx = getMidPoint(pt1,pt2).x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  var tmpy = getMidPoint(pt1,pt2).y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x=tmpx;
                  arrPoint[n].y=tmpy;
                  n--;
                }

            }
            //creating Polygon From array
            //Canvas.Polygon(arrPoint);
        }
        else
        {
            //reversed
            ang2 = 360 - Math.abs(calcDegree(pt2,pt1));

            var n = 0;
            for(i= Math.round(ang2);i >= Math.round(ang1);i--){            
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                //draw line
                if (i === (Math.round(ang1) + 10)){
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-size) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-size) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                    break;
                }else if(i > (Math.round(ang1) + 10)) {
                    var tmpx = (getMidPoint(pt1,pt2).x+((aDist-(size-kurang)) * Math.cos(i * Math.PI/ 180)));
                    var tmpy = (getMidPoint(pt1,pt2).y+((aDist-(size-kurang)) * Math.sin(i * Math.PI/ 180)));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n++;
                }
            }

            //create outer side polygon
            arrPoint[n] = pt2;
            n = 342;
            for (i = Math.round(ang2);i>= Math.round(ang1);i--){ 
            //for(var i= Math.round(ang2);i <= Math.round(ang1);i++){ 
                
                if (i === (Math.round(ang1) + 10) ){
                    tmpx = getMidPoint(pt1,pt2).x+((aDist+size) * Math.cos(i * Math.PI/ 180));
                    tmpy = getMidPoint(pt1,pt2).y+((aDist+size) * Math.sin(i * Math.PI/ 180));
                    arrPoint[n].x=tmpx;
                    arrPoint[n].y=tmpy;
                    n--;
                    break;
                }
                else if (i > (Math.round(ang1) + 10)){
                  tmpx = getMidPoint(pt1,pt2).x+((aDist+(size-kurang)) * Math.cos(i * Math.PI/ 180));
                  tmpy = getMidPoint(pt1,pt2).y+((aDist+(size-kurang)) * Math.sin(i * Math.PI/ 180));
                  arrPoint[n].x = tmpx;
                  arrPoint[n].y = tmpy;
                  n--;
                }

            }
        }


        var arrCoordOnly = [];
        for (i=0;i<arrPoint.length;i++){
            arrCoordOnly.push([arrPoint[i].y,arrPoint[i].x]);
        }
        return arrCoordOnly;
    }

     