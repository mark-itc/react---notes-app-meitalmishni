import '../styles/Note.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';

function Note(props) {
    const { id, title, date, onDeleteNoteHandler } = props;

    const handleClick = () => {
        onDeleteNoteHandler(id);
    }

    return (
        <>
            <div className="note">
                <CloseButton className="delete-note" onClick={handleClick} />
                <h2 className="note-title">{title}</h2>
                <p className="note-text">Created at: {date}</p>
            </div>
        </>
    );
}

export default Note;

