/*
    Examples from The Illusion of Class by Ryan Kinal

    http://blog.javascriptroom.com/2013/01/29/the-illusion-of-class/
*/

// Construcors are just functions
var Point = function(x, y) {
    this.x = x;
    this.y = y;
};

// Put "methods" on the prototype property of the function
Point.prototype.translate = function(x, y) {
    this.x += x;
    this.y += y;
};

// Use the "new" keyword to create a new object
// with a prototype equal to Point.prototype
var point = new Point(17, 42);
point.translate(5, 6);

/*
    I loves me some inheritance!
*/
var Point3d = function(x, y, z) {
    Point.call(this, x, y);
    this.z = z;
};

Point3d.prototype = new Point();
// OR
Point3d.prototype = Object.create(Point.prototype); // probably better

Point3d.prototype.translate = function(x, y, z) {
    Point.prototype.translate.call(this, x, y);
    this.z += z;
};

var point3d = new Point3d(19, 20, 21);
point3d.translate(4, 5, 6);
