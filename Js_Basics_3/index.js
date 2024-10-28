// Inbuilt Objects

// 1) -> Math

// console.log(Math.floor(1.5));
// console.log(Math.ceil(1.5));

// let message = "  My name is Manoj"
// console.log(message.trim());

// 2) -> String

// let str1 = new String("Manoj");
// console.log(str1);
// console.log(str1.startsWith('M'));

// console.log(str1.toUpperCase());


// -> Template Literals

// let msg = `Hello Everyone
// my name 
// is Manoj.`

// console.log(msg);

//-> Date

// let date = new Date("August 17 2004 04:28" )
// console.log(date);

// ----------------------- Arrays ----------------------

// let numbers = [1, 2, 3, 4];

// console.log(numbers);

// -> insertion in array
// numbers.push(10);
// console.log(numbers);

// numbers.unshift(8);
// console.log(numbers);

// numbers.splice(2, 0, 'manoj', 'zagade', 17);
// console.log(numbers);

//-> searching in a array

// console.log(numbers.indexOf(8));

// console.log(numbers.indexOf('manoj', 1));

// -> find element
// console.log(numbers.includes(10));


// -> for objects

// let coursers = [
//     {no:1, name:'DSA'},
//     {n0:2, name:'C++'}
// ];

// -> search in above array (courses)

// let finding = coursers.find(function(course){
//     return course.name == 'DSA';
// });

// console.log(finding);

// -> Removing Element

// let arr = [1, 5, 10, 15, 20, 25];

// -> end
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.splice(2, 2));

//-> Empty the arr

// let arr1 = arr;

// arr = []
// console.log(arr);
// console.log(arr1);

// arr.length = 0;

// console.log(arr);
// console.log(arr1);

// OR

// console.log(arr.splice(0, arr.lenght));

// -> combining & slicing 

// let a1 = [5, 6, 7, 8];
// let a2 = [1, 2, 3, 4];
// -> combine
// console.log(a1.concat(a2));

// -> slice
// console.log(a1.slice(2,5));

// -> Spread operator to concat 2 arr

// let a1 = [5, 6, 7, 8];
// let a2 = [1, 2, 3, 4]; 

// let combined = [...a1, ...a2];
// console.log(combined);

// let combined1 = [...a1,'manoj', ...a2, 'Zagade'];
// console.log(combined1);

// -> Combining and slicing of objects

let obj1 = {
    color: 'Yellow',
    height: 5.9,
    weight: 80,

    lang(){
        console.log('marathi');
    }
}

let obj2 = {
    rung : 'white',
    unchi : 6.1,
    vajan : 85,

    talk(){
        console.log('fluent');
    }
}

let comb = {...obj1, ...obj2};
console.log(comb);
console.log(comb.talk());
// console.log(comb.lang());

// -> Iterating on the Array

// let arr = [10, 20, 30, 40];

//-> loop traversing => for of loop
// for(let val of arr){
//     console.log(val);
// }

//-> forEach loop

// arr.forEach(function(number){
//     console.log(number);
// });

// arr.forEach(number => console.log(number));


// -> Joining the arrays

// let arr1 = [10, 50, 100, 500];

// let joined = arr1.join(',');
// console.log(joined);

// -> spliting the array
// let msg = 'Hello Everyone';
// let splitting = msg.split();
// console.log(splitting);


// -> Sorting the arr

// let arrs = [50, 20, 30, 10, 40];

// let sorting = arrs.sort();
// console.log(arrs.sort());

// -> filter the arr

// let arr = [10, 20, -10, -20];

// let filtered = arr.filter(function(val){
//     return val >= 0;
// });

// console.log(filtered);

// let fitlered = arr.filter(val => val >= 0);
// console.log(fitlered);

// -> mapping

// let nums = [1, 2, 3, 4];

// let items = nums.map(function(val){
//     return 'Roll_no ' + val;
// });

// console.log(items);

// let itemss = nums.map(val => 'Roll_no ' + val);
// console.log(itemss);


// mapping with objects

// let numbers = [1, -1, 2, -3];

// let items = numbers.filter(val => val > 0);

// let mapping = items.map(function(num){
//     return {value : num};
// });

// console.log(mapping);

// It can also be written as 
// let items = numbers.filter(val => val >= 0).map(num => ({value : num}));
// console.log(items);