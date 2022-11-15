import '../styles/Note.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Note(props) {
    const { id, title, date, onDeleteNoteHandler } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (e) => {
        e.stopPropagation();
        setShow(false);
        onDeleteNoteHandler(id);
    }

    return (
        <>
            <div className="note" onClick={() => handleShow()}>
                <CloseButton onClick={handleClick} />
                <h2 className="note-title">{title}</h2>
                <p className="note-text">Created at: {date}</p>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Created at: {date}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Note;

