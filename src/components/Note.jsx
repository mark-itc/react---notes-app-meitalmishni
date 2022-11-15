import '../styles/Note.css';
import { useState } from 'react';

function Note(props) {
    const { title, date } = props;

    return (
        <>
            <div className="note">
                <h2 className="note-title">{title}</h2>
                <p className="note-text">Created at: {date}</p>
            </div>
        </>
    );
}

export default Note;

