"use strict";

let count = 10;

let arr1 = [1, 5, 10, 18];

for(let key of arr1){
    if(key === count){
        console.log(key);
        break;
    }
    console.log(key);
}

//-------------------------------------------
const birthday = '17.08.2004'
let manojAge = totalAge(birthday);

function totalAge(birthday) {
    let parts = birthday.split('.');
    let formattedAge = `${parts[2]}-${parts[1]}-${parts[0]}`;
    
    let currDate = new Date();
    let modifiyBirthday = new Date(formattedAge)
    
    let age = currDate.getFullYear()-modifiyBirthday.getFullYear();

    // adjust the age if birthday has not occured in this year
    let monthDiff = currDate.getMonth()-modifiyBirthday.getMonth();
    if(monthDiff < 0 || (monthDiff === 0 && (currDate.getDate() < modifiyBirthday.getDate()))){
        age--;
    }

    return age;
}

console.log(manojAge);

//----------------------------------------
let name = 'Manoj'

console.log(`hello ${1}`);

console.log(`hello ${"name"}`);

console.log(`hello ${name}`);

//------------------------------------
let valv = "123";
console.log(typeof valv);

valv = Number(valv);
console.log(typeof valv);

//--------------------------------
console.log("6"/"3");

//-----------------------------
let y = -10;
y = +y; // + unary operator does not affect numbers
console.log(y);

let flag = true;
console.log(+flag);
console.log(-flag);

// ---------------------------
const apples = "10";
const mango = "15"

console.log(+apples + +mango);  // 25

//----------------------------
//console.log(5++); Increment and decrement operators are applied on variables not values it will give error
