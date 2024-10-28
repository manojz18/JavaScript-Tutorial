// functions

//function call
// running();

// // function declaration
// function running(){
//     console.log("I am Running");
// }

// //function call
// running();

// // Named function assignment

// let walking = function walk(){
//     console.log("Walking");
// }

// walking();

// // Anonymous function assignment
// let walks = function(){
//     console.log("I Walk");
// }

// walks();

// arguments

// function sum(a, b){
//     return a+b;
// }

// console.log(sum(10, 20));

// function sum(a, b){
//     console.log(arguments);
// }
// argument -> object

// sum(1, 15, 20, 10, 1, 8, 9);

// function sum(){
//     let ans = 0;
//     for(let val of arguments){
//         ans += val; 
//     }
//     return ans;
// }

// console.log(sum(1, 15, 20, 10, 1, 8, 9));

//-> Default parameters

// function simpleInterest(p, r = 10, y = 5){
//     return p * r * y / 100;
// }

// console.log(simpleInterest(20000));

// console.log(simpleInterest(100000, undefined, 10));

// -> GETTER SETTER

// getter -> is to access the properties
// setter -> to change the properties or mutate

// let obj1 = {
//     fName : 'Manoj',
//     lName : 'Zagade'
// }

// function fullName(){
//     return `${obj1.fName} ${obj1.lName}`;
// }

// but the problem with above func is we cannot set the val
// console.log(fullName());

// so it can be done as

// let person = {
//     fName : 'Manoj',
//     lName : 'Zagade',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error('You have not sent a String');
//         }

//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person.fullName);

// person.fullName = "Computer Engineering";
// console.log(person.fullName);

//-> Error Handling

// try{
//     person.fullName = 1;
// }
// catch(e){
//     console.log(e);
// }

// console.log(person.fullName);


// Reducing an array

let a = [15, 25, 30, 50];
let total = 0;

for(let val of a){
    total += val;
}

console.log(total);

let totalSum = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);