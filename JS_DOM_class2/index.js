// document.addEventListener('click', function(){
//     console.log("Hello Bhava");
// });

/// ============= OR ============

// document.addEventListener('click', addThis);

// function addThis(){
//     console.log("Hello Friend");

// }

// let content = document.querySelector(".wrapper");

// content.addEventListener('click', function(event){
//     console.log(event);
// });

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
// });

/// -----------------------------------------------------------------------
// let myDiv = document.createElement('div');

// for(let i = 1; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = 'I am para' + i;
//     para.addEventListener('click', function(){
//         console.log('Printing');
//     })
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

//-------------------- Optimized code ------------------

let myDiv = document.createElement('div');
function paras(event){
    console.log('Printing' + event.target.textContent);
}

myDiv.addEventListener('click', paras)

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = 'I am para' + i;
    
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

let content = document.querySelector('#container');
content.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN')
        console.log('Hello Jee' + event.target.textContent);
});


