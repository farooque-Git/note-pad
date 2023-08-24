const addBtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)

// < !-- < button id = "addbtn" >
//     <i class="fa-sharp fa-solid fa-plus"></i>
//         Add Note
//     </button >
// <div class="note">
//     <div class="tool">
//         <i class="fa-sharp fa-solid fa-floppy-disk"></i>
//         <i class="fa-sharp fa-solid fa-trash"></i>
//     </div>
//     <textarea></textarea>
// </div> -->



const addNote = (text = "") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
         <div class="tool">
            <i class="save fa-sharp fa-solid fa-floppy-disk"></i>
            <i class="trash fa-sharp fa-solid fa-trash"></i>
         </div>
         <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        }
    )

    note.querySelector("textarea").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )


    main.appendChild(note);;
    saveNotes()
}

(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes === null) {
            a
        } else {
            lsnotes.forEach(
                (lsnote) => {
                    addNote(lsnote)
                }
            )
        }
        
    }
)()