
const t1 = performance.now();
for(let i = 1; i <= 10000; i++){
    let element = document.createElement('p');
    element.textContent = 'para' + i;
    document.body.appendChild(element);
}

const t2 = performance.now();

console.log("time requierd: ", t2-t1);

// optimizing the above code
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i = 1; i <= 10000; i++){
    let element = document.createElement('p');
    element.textContent = 'para' + i;
    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("time requierd: ", t4-t3);


/// ----------- Document Fragment ------------
const t5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 1; i <= 10000; i++){
    let element = document.createElement('p');
    element.textContent = 'para' + i;
    fragment.appendChild(element);
}

document.body.appendChild(fragment);

const t6 = performance.now();

console.log("time requierd: ", t6-t5);


setTimeout(function(){
    console.log('Hi');
}, 40000);