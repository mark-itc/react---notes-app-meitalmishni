import '../styles/Form.css';

function Form(props) {
    const { onSubmit } = props;

    return (
        <form onSubmit={onSubmit}>
            <button className="submit-button" type="submit">Add Note</button>
        </form>
    );
}

export default Form;