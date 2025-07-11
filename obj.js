// let object = {
//     for : 10,
//     let : "15",
//     return : 5,
//     0 : "test it", // it becomes like "0": "test it"
// }

// console.log(object.for + object.let + object.return); // 10155
// console.log(object[0]); // test it
// console.log(object["0"]); // test it
// // console.log(object.0)  //gives error

// console.log('age' in object); // false
// console.log('return' in object) // true

// // for...in loop appling on object

// for(let key in object){
//     console.log(key);
//     console.log(object[key]);
// }


// let obj1 = {
//     "91": "India",
//     "59": "NewZeland",
//     "1": "USA",
//     "41": "Austrilia"
// }

// for(let key in obj1){
//     // console.log(obj1[key]); --> USA, Austrilia, NewZeland, India (in the order of numbers i.e. key if its number)
//     console.log(key)
// }

//let mean = mn//  this is how var is copied, how to copy object

// -------------- coping object ------------

// Shallow Copy
// let obj2 = {
//     fname: 'Manoj',
//     lname: 'Zagade',

//     prints(){
//         console.log(this.fname + this.lname);
//     },

//     hello: (fname) => {
//         console.log(this.fname) // undefined
//         console.log(this.fname) // MANU
//     },
// };

// let user1 = Object.assign({}, obj2); // shallow copy, we cannot copy object inside object only its address will get copied

// Deep copy

// let user2 = structuredClone(obj2); // limitations-> cannot copy function if present in object, then it fails
// console.log(user1);

// obj2.hello('MANU');


/// constructor function

// function User(name){
//     this.name = name;
//     this.isAdmin = false;
//     this.sayHi = function(){
//         console.log('My Name is:' +name);
//     }
// }

// let use1 = new User('manoj');
// let use2 = new User('zagade');

// console.log(use1)


//---------------------------

let oneBillion = 1_000_000_000;
console.log(oneBillion);

let calc = 1.23e6; // 1.23 * 1000000
console.log(calc);

let calc1 = 1.23e-6 // means 5 zeroes to left of 23 i.e. 1.23/1000000
console.log(calc1);

console.log(9999999999999999) //10000000000000000