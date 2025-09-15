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


// SETTING UP THE LOGIN PAGE
let loginForm = document.querySelector("#login")
let userName = document.querySelector("#username").value.trim()
if (userName){
    //THIS IS WHERE I SAVE TO LOCAL STORAGE
    localStorage.setItem("username", userName);
}