/*
    Examples from Objects and the Prototype Chain by Ryan Kinal

    http://blog.javascriptroom.com/2013/01/14/objects-and-the-prototype-chain/
*/

/*
    Object literals are awesome!
    Use the following to create an empty object
*/
var obj = {};

/*
    Set som properites in various ways
*/

// In the literal
var obj = {
    a: 17,
    'b': 92
};

// dot notation
obj.sum = function() {
    return this.a + this.b;
};

// bracket/array notation
obj['product'] = function() {
    return this['a'] + this['b'];
};

/*
    Inheritance is sweet!
    Objects inherit from other objects
*/
var point = {
    translate: function(x, y) {
        this.x += x;
        this.y += y;
    },
    moveTo: function(x, y) {
        this.x = x;
        this.y = y;
    }
};

// Create a new object with point as the prototype
var inheritingPoint = Object.create(point);

// Set some initial values
inheritingPoint.x = 45;
inheritingPoint.y = 62;

// Use the inherited functions
inheritingPoint.translate(5, 6); // x = 50, y = 68
inheritingPoint.moveTo(100, 75); // x = 100, y = 75

/*
    'this' means... what now?
*/
var inheritingPoint = Object.create(point);

// moveTo is called with a context of "inheritingPoint"
// which means that within "moveTo", this === inheritingPoint
// so "x" is set on inheritingPoint, not point
inheritingPoint.moveTo(100, 75);
inheritingPoint.hasOwnProperty(x); // true

/*
    Polymorphism - change it up!
*/

// point3d inherits from point
var point3d = Object.create(point);

point3d.translate = function(x, y, z) {
    point.translate.call(this, x, y); // Avoid code duplication - use the "parent" function
    this.z += z;
};

point3d.moveTo = function(x, y, z) {
    point.moveto.call(this, x, y);
    this.z = z;
};

var new3DPoint = Object.create(point3d);
newPoint.moveTo(42, 37, 96);
