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

function sum(){
    let ans = 0;
    for(let val of arguments){
        ans += val; 
    }
    return ans;
}

console.log(sum(1, 15, 20, 10, 1, 8, 9));