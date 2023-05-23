import { useState } from "react";
import './Form.css';

function NewBoxForm({handleSubmit}) {

    const INITIALSTATE = {
        width: '',
        height: '',
        color: ''
    }

    const [form, setForm] = useState(INITIALSTATE);

    function handleChange(event) {
        setForm(form => ({...form, [event.target.name]: event.target.value}))
    }

    function submitAndClear(event) {
        event.preventDefault();
        handleSubmit(form);
        setForm(INITIALSTATE);
    }

    return (
        <form onSubmit={submitAndClear}>
            <label htmlFor="width">Enter pixel width:   </label>
            <input id="width" type="text" name="width" value={form.width} onChange={handleChange} /><br /><br />
            <label htmlFor="height">Enter pixel height:   </label>
            <input id="height" type="text" name="height" value={form.height} onChange={handleChange} /><br /><br />
            <label htmlFor="color">Enter color:   </label>
            <input id="color" type="color" name="color" value={form.color} onChange={handleChange} /><br />
            <button>Submit</button>
        </form>
    )

}

export default NewBoxForm