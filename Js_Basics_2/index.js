
// creating object

// let rectangle = {
//     // Properties
//     length : 10,
//     breadth : 15,

//     // behaviour (method)
//     draw:function() 
//     {
//         console.log("Draw a rectangle");
//     },

//     // OR 

//     draw()
//     {
//         console.log("Draw a rectangle");
//     }
// };

// console.log(rectangle.length);
// console.log(rectangle['breadth']);
// rectangle.draw();


//----------------- Object creation ------------------

// 1)factory function

function createRectangle(){   // createRectangle -> function created
    // Properties
    return circle = {
        // Properties
        radius : 10,
    
        // behaviour (method)
        drawn()
        {
            console.log("Draw a Circle");
        }
    };
}
// Now create object using createRectangle()

// let obj1 = createRectangle();
// obj1.drawn();

// console.log(createRectangle());

// camelCase -> nameOfStudent
// Pascal -> NameOfStudent
// 2) Constructor function  -> Pascal case followed in Constructor function

function Rectangle(len, bre){
    this.lenght = len;
    this.breadth = bre;

    this.draw = function(){
        console.log("Draw Rectangle");
    }
}

let obj1= new Rectangle(10, 15);
obj1.draw();
obj1.color = 'manoj';
console.log(obj1);

delete obj1.color;
console.log(obj1);

// constructor for obj1 is Rectangle();
// then what is the constructor of Rectangle() bcoz in JS functions are
// also objects then it should have constructor -> so Rectangle() has inbuit constructor
// as Function()

// if we wnat to implement it manually the we can do by this way

let Rectangle1 = new Function('len', 'bre', 
    `this.lenght = len;
    this.breadth = bre;

    this.draw = function(){
        console.log("Draw Rectangle");
    }`
)

// Premitive & Reference

//Premitive
let a = 15;
let b = a;

a++;
console.log(a);
console.log(b);

// Reference
let n = {val : 15};

let m = n;
n.val++;
console.log(n);
console.log(m);

let d = {val : 10};

function increm(d){
    d.val++;
}
increm(d);
console.log(d.val);

// for-in loop
let fruits = {orange:2, mango:4};
for(let i in fruits){
    console.log(fruits[i]);  // value
    console.log(i);  // key
}

// for-of loop -> it can be applied on iterables such as array and maps
for(let key of Object.keys(fruits)){
    console.log(key);
}
for(let key of Object.entries(fruits)){
    console.log(key);
}

if('color' in fruits){
    console.log("Present");
}
else{
    console.log("Absent");
}

// Object cloning

let src = {
    a : 15,
    b : "manoj"
};

let dest = {}

// 1) Iteration 

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);
// dest.a++;
// console.log(dest);
// console.log(src);

// 2) Assign

// let dest2 = Object.assign({}, src);

// console.log(dest2);
// dest2.a++;
// console.log(dest2);
// console.log(src);

// 3) Spread

let dest3 = {...src};

console.log(dest3);
dest3.a++;
console.log(dest3);
console.log(src);