let countValue = document.querySelector(".zero");

// function inc(){
//     let value = parseInt(countValue.innerText);
//     value = value + 1;
//     countValue.innerText = value;
// }

// function dec(){
//     let value = parseInt(countValue.innerText);
//     value = value - 1;
//     countValue.innerText = value;
// }


// ---------- OR by using eventListener -------------

function inc(){
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;

}
function dec(){
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}

countValue.addEventListener('click', inc);

countValue.addEventListener('click', dec)