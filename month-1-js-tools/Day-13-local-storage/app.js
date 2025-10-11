// SETTING UP THE MODAL
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal")
const addNoteBtn = document.querySelector("#add-note-btn");

//OPENING UP THE MODAL
addNoteBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

//CLOSING THE MODAL ON THE SMALL X
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})

