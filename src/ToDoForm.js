import { useState } from 'react';

function ToDoForm({ handleSubmit }) {
    const INITIALSTATE = '';

    const [form, setForm] = useState(INITIALSTATE);

    function handleChange(event) {
        setForm(event.target.value);
    }

    function submitAndClear(event) {
        event.preventDefault();
        handleSubmit(form);
        setForm('');
    }

    return (
        <form onSubmit={submitAndClear}>
            <label htmlFor="task">Enter task:   </label>
            <input data-testid="task-input" id="task" type="text" name="task" value={form} onChange={handleChange} /><br />
            <button>Submit</button>
        </form>
    )
}

export default ToDoForm;