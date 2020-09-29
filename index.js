/* Object Literal Syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();
*/

/* Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
*/

/* Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
    console.log('draw');
    }
`);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
*/

/* Value Types: Number, String, Boolean, Symbol, undefined, null 
    Stored as VALUE */

/* Reference Types: Object, Function, Array 
    Stored as LOCATION */

/* Primitives are copied by their VALUE... Objects are copied by their Referenced LOCATION */
/*
let x = {value: 10};
let y = x;
x.value = 20;


let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
*/


const Circle = function(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }
    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        console.log('draw');
    }
    Object.defineProperty(this, 'defaultLocation', { 
    get: function(){
        return defaultLocation;
    }, 
    set: function(value) {
        if(!value.x || !value.y)
        throw new Error('invalid location');

        defaultLocation = value;
    }
    });
};
Circle.defaultLocation = 1;
console.log(Circle);

// const circle = new Circle(10);

// iterate through properties in an object
// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }
// const keys = Object.keys(circle);
// console.log(keys);
// if ('radius' in circle)
// console.log('Circle has radius');