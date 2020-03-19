// Please read the README.md for the homework
'use strict'

// 1
// --
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

// var minValue = min.call(null, numbers[0], numbers[1]/* , ..... */);
// var minValue = min.apply(null, numbers);
// logger.log(minValue);

// otherNumbers.push.apply(otherNumbers, numbers);
// otherNumbers.push(...numbers); // ES6
// logger.log(otherNumbers);






// 2
// --
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






// 3
// --
logger.log('--------3--------');

var Laptop = function(brand, emptySpace) {
	this.brand = brand;
	this.emptySpace = emptySpace;
	this.occupiedSpace = 0;
	this.isTurnedOn = false;
	this.isOpened = false;
}

// var laptop = new Laptop('Lenovo', 1024);

var laptop = {};
Laptop.call(laptop, 'Lenovo', 1024);
laptop.__proto__ = Laptop.prototype
logger.log(laptop);






// 4
// --
logger.log('--------4--------');

var Laptop = function(brand, emptySpace) {
	this.brand = brand;
	this.emptySpace = emptySpace;
	this.occupiedSpace = 0;
}
Laptop.prototype.isTurnedOn = false;
Laptop.prototype.isOpened = false;

Laptop.prototype.turnOn = function() {
    this.isTurnedOn = true;
    this.isOpened = true;
}

var laptop1 = new Laptop('Lenovo', 1024);
var laptop2 = new Laptop('Asus', 512);

laptop1.turnOn();

logger.log(laptop1.__proto__ === laptop2.__proto__);
logger.log(laptop1.isTurnedOn === laptop2.isTurnedOn);
logger.log(laptop1);
logger.log(laptop2);

logger.log(laptop1.hasOwnProperty('isTurnedOn'));

// for (var key in laptop1) {
//     logger.log(laptop1.hasOwnProperty(key));
//     logger.log(laptop2.hasOwnProperty(key));
// }
