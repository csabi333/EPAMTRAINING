var Circle = (function(){
    
    var Circle = function(r){
    this.radius = r ;
    }

    Object.defineProperty(Circle.prototype,'area',{
        get: function(){
            return this.radius * this.radius * Math.PI;
        }
    });

    Object.defineProperty(Circle.prototype,'circumference',{
        get: function(){
            return 2 * this.radius * Math.PI;
        }
    });
    
    return Circle;
    
})();