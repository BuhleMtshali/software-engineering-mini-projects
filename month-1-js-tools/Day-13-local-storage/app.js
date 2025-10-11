//NOTES ARRAY
let notes = []

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

//COLLECTING THE NOTE FROM THE USER
let notesH = document.querySelector("#note-form-heading");
let notesT = document.querySelector("#note-content");
const submitNote = document.querySelector("#note-form")
submitNote.addEventListener("submit", (e) => {
    e.preventDefault();
    
    //GETTING THE NOTE OBJECT
    let userNote = {
        noteHeading: notesH.value,
        noteText: notesT.value
    }

    //PUSHING THIS TO THE ARRAY
    notes.push(userNote);
    console.log(notes)

    submitNote.reset();

    //HIDE THE MODAL AFTER THE USER HITS SUBMIT
    modal.style.display = 'none'
})