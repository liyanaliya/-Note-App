import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import { useState } from "react";
function App() {
const [note, setNote] = useState("");
const [notes, setNotes] = useState([]);
const [editIndex, setEditIndex] = useState(null);

function addNote() {
if (note.trim() === "") {
 alert("Please write a note");
return;
}

if (editIndex !== null) {
setNotes(
notes.map((item, index) => index === editIndex ? note : item)
);
 setEditIndex(null);
} else {
 setNotes([...notes, note]);
}
 setNote("");
}
function editNote(index) {
setNote(notes[index]);
setEditIndex(index);
}
function deleteNote(index) {
setNotes(notes.filter((item, i) => i !== index));

if (editIndex === index) {
setNote("");
setEditIndex(null);
}
}
return (
<div className="container">
 <h1>My Notes 🗒</h1>

<div className="input-box">
<input value={note}onChange={(e) => setNote(e.target.value)}placeholder="Write your note..."/>
<button onClick={addNote}>{editIndex !== null ? "Update" : "Add"}</button>
</div>
{notes.length === 0 ? (
<p className="empty">No notes yet. Add one!</p>
 ) : (
 <div className="notes-list">{notes.map((item, index) => (
<div className="note" key={index}>
<span>{item}</span>
<button className="delete"onClick={() => deleteNote(index)}>Delete </button>
              
</div>             
))}                      
 </div>
)}      
</div>                  
);
}           
export default App;


