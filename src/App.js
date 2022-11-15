import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import { useEffect, useState } from 'react';


function ordinal_suffix_of(day) {
  var digit = day % 10;

  if (digit == 1) {
    return day + "st";
  }
  if (digit == 2) {
    return day + "nd";
  }
  if (digit == 3) {
    return day + "rd";
  }
  return day + "th";
}


function App() {

  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(notes.length);
  }, [notes])

  const submitHandler = (e) => {
    e.preventDefault();

    const now = new Date();

    const month = now.toLocaleDateString('en-us', {
      month: "long",
    });

    const day = ordinal_suffix_of(now.getDate());

    const hour = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const noteDetails = {
      title: `Note ${counter + 1}`,
      date: `${month} ${day} ${hour}`,
    }

    setNotes([...notes, noteDetails]);
  }

  const showNotes = () => {

    const onDeleteNote = (noteId) => {
      const deleteConfirmation = window.confirm("Are you sure you want to delete your note?");

      if (deleteConfirmation !== true) {
        return false;
      }

      const notesList = [...notes];
      notesList.splice(noteId, 1);
      setNotes(notesList);
    }

    return notes.map(
      (note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            date={note.date}
            onDeleteNoteHandler={onDeleteNote} />
        );
      }
    );
  }

  return (
    <div className="App">
      <h1>My Notes</h1>
      <Form onSubmit={submitHandler} />
      <div className="notes">
        {showNotes()}
      </div>
    </div >
  );
}

export default App;
