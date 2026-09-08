
let notes = [];
try {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    notes = Array.isArray(savedNotes) ? savedNotes : [];
} catch (error) {
    localStorage.removeItem("notes");
}
renderNotes();
document.getElementById("add-note-btn").addEventListener("click", addNotes);

addEventListener("keydown", function (event) {
    if (event.shiftKey === true && event.key === "Enter") {
        addNotes();
    }
});


function addNotes() {
    const noteContent = document.getElementById("note-input").value.trim();
    if (noteContent !== "") {
        notes.push(noteContent);
        saveNotes();
        renderNotes();
    }
}
function createChild(noteContent, index) {
    const note = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const paragraph = document.createElement("p");

    deleteBtn.textContent = "Remove";
    deleteBtn.className = "delete-btn";

    note.className = "note";
    paragraph.textContent = noteContent;

    note.appendChild(paragraph);
    note.appendChild(deleteBtn);
    document.getElementById("notes-container").appendChild(note);

    document.getElementById("note-input").value = "";
    deleteBtn.addEventListener("click", function () {
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
    });
}
function renderNotes() {

    const container = document.getElementById("notes-container");
    container.innerHTML = "";
    notes.forEach(function (noteText, index) {
        createChild(noteText, index);
    });
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}