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

    //HIDING THE MODAL AFTER THE USER HITS SUBMIT
    modal.style.display = 'none'

    displayNotes()
})

//DISPLAYING THE RESULTS
let placeHolder = document.querySelector(".placeholder-wrapper")
let notesWrapper = document.querySelector(".notes-wrapper")
let notesTemplate = '';

function displayNotes(){
    if(notes.length > 0){

        //GET THE NOTES THE ARRAY
        notes.forEach((note) => {
            console.log(note)
            notesTemplate += `
                            <div class="notes-wrapper">
                                <div class="note">
                                <i class="fa-solid fa-trash"></i>
                                <h2 class="notes-heading" id="notes-heading">${note.noteHeading}</h2>
                                <p class="notes-text" id="notes-text">${note.noteText}</p>
                                <small class="date">created: <span id="date">11/10/2025</span></small>
                                </div>
                            </div> 

                            `

            placeHolder.innerHTML = notesTemplate;
        })
    } 
}