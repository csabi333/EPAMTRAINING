var second = ( function(){
    
    function run(){
        
        logger.log('--------2--------');

        var circle = {
	       r: 10
        };
        
        Object.defineProperty(circle, 'area', {
	       get: function() {
		      return this.r * this.r * Math.PI;
	       }
        });
        
        Object.defineProperty(circle, 'circumference', {
	       get: function() {
		      return 2 * this.r * Math.PI;
	       }
        });

        logger.log(circle);
    }
    
    return {
        run: run
    }
})();