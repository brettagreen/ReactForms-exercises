import { useState } from 'react';

function EditToDoForm({idx, task, handleEdit, setHidden}) {

    const [edit, setEdit] = useState(task);

    function handleChange(event) {
        setEdit(event.target.value);
    }

    function submitAndClear(event) {
        event.preventDefault();
        handleEdit(idx, edit);
        setHidden(true);
        setEdit('');
    }

    return (
        <form onSubmit={submitAndClear}>
            <label htmlFor="editTask">Edit task:   </label>
            <input id="editTask" type="text" name="editTask" value={edit} onChange={handleChange} /><br />
            <button>Update</button>
        </form>
    )
}

export default EditToDoForm;