// CLOSING AND SHOWING THE MODAL
const openModalBtn = document.querySelector("#add-book")
const modalWrapper = document.querySelector("#modal-wrapper")
const closeModalBtn = document.querySelector("#close-modal")

openModalBtn.addEventListener("click", () => {
    modalWrapper.classList.add("show-modal")
})

closeModalBtn.addEventListener("click", () => {
    modalWrapper.classList.remove("show-modal")
})

window.addEventListener("click", (event) => {
    if (event.target == modalWrapper){
        modalWrapper.classList.remove("show-modal")
    }
})