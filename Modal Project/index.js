const modal = document.querySelector(".modal");
const layer = document.querySelector(".layer");

const openmodal = () => {
    console.log("Modal is open")
    modal.classList.add("modalactive");
    layer.classList.add("layeractive")
}

const cutmodal = () => {
    console.log("Modal is close")
    modal.classList.remove("modalactive");
    layer.classList.remove("layeractive")
}

