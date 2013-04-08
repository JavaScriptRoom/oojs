/*
    Examples from The Initializer Pattern by Ryan Kinal

    http://blog.javascriptroom.com/2013/01/21/the-initializer-pattern/
*/

/*
    Initializer functions keep all the logic within the function itself
*/
var point = {
        init: function(x, y) {
            this.x = x;
            this.y = y;
        },
        translate: function(x, y) {
            this.x += x;
            this.y += y;
        }
    };

var obj = Object.create(point);
obj.init(7, 9);

/*
    Inheritance is about the same as in a basic prototypal pattern,
    but everything is, again, contained within the objects that
    care about it.
*/
var point3d = Object.create(point);

point3d.init = function(x, y, z) {
    point.init.call(this, x, y);
    this.z = z;
}

point3d.translate = function(x, y, z) {
    point.translate.call(this, x, y);
    this.z += z;
}

var obj = Object.create(point3d);
obj.init(42, 17, 29);
obj.translate(7, 9, 12);

/*
    Defaults are awesome and DRY
*/
var point = {
        init: function(x, y) {
            this.x = (typeof x === 'undefined' || x === null) ? 0 : x;
            this.y = (typeof y === 'undefined' || y === null) ? 0 : y;
        },
        translate: function(x, y) {
            this.x += x;
            this.y += y;
        }
    };

var point3d = Object.create(point);
 
point3d.init = function(x, y, z) {
    point.init.call(this, x, y);
    this.z = (typeof z === 'undefined' || z === null) ? 0 : z;
}

point3d.translate = function(x, y, z) {
    point.translate.call(this, x, y);
    this.z += z;
}

var obj = Object.create(point3d);
obj.init(42, 17, 29);
obj.translate(7, 9, 12);