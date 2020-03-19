

var first = ( function(){
    
    function run(){
        
        logger.log('--------1--------');
    
        var min = function() {
            logger.log('Arguments of min function');
            logger.log(arguments);
            var m = arguments[0];

	       for (var i = 1; i < arguments.length; i++) {
		      if (arguments[i] < m) {
			     m = arguments[i];
		      }
	       }
	
	       return m;
        }

        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
        var otherNumbers = [ 1000 ];
        logger.log(min(1, 2, 3));

    }
    
    return {
        run: run
    }
})();