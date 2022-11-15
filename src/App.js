import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const datetime = new Date().toUTCString();

    const noteDetails = {
      title: "Example note",
      date: datetime
    }

    setNotes([...notes, noteDetails]);
  }

  const showNotes = () => {
    return notes.map(
      (note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            date={note.date} />
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
