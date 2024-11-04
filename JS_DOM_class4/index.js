// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Asynchronous function');
    // }, 4000);

    // Explicitly reject or resolve the code
    // resolve(1);
//     reject(new Error('Their is Error in the code'));
// });

// promise1.then((value) => {console.log(value)});

// promise1.catch((error) => {console.log('recived error')});

// --------- OR -------------

// above both can be done in 1 syntax

// promise1.then((value) => {console.log(value)}, (error) => {console.log('recived error')});


// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Started promise1');
//     }, 2000);

//     resolve(true);
// });

// let prom = promise1.then(() => {
//     let promise2 = new Promise(function(resolve, reject){
//         setTimeout(() =>{
//             console.log('started promise2');
//         }, 3000);
//         resolve('123456');
//     });
//     return promise2;
// });

// prom.then((val) => console.log(val));

// // async function to paralleli execute the promise functions

// async function  utility() {

//     let waadaa1 = new Promise((resolve, reject) =>{
//         setTimeout(function(){
//             console.log('resolve 1');
//         }, 5000);
//     });

//     let waadaa2 = new Promise((resolve, reject) =>{
//         setTimeout(function(){
//             console.log('resolve 2');
//         }, 8000);
//     });

//     let w1 = await waadaa1;
//     let w2 = await waadaa2;

//     return [w1, w2];
    
// }



// ------------- fetch api -------------

// receive data
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let out = await content.json();
//     console.log(out);
// }

// utility();

// send data (post)

// async function utility() {
//     let object = {
//         method: 'POST',
//       body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//         age : 20,
//         weight: 72,
//         }),
    
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }
    
//     let output = await fetch('https://jsonplaceholder.typicode.com/posts', object);
//     let result = await output.json();
//     console.log(result);
// }

// utility();


// ------------ Closure -----------

function outer(){
    let val = 10;
    function inner(){
        val++
        console.log(val);
    }
    return inner();
}

const a = outer();
a();

