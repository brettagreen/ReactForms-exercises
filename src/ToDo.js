import { useState } from 'react';
import EditToDoForm from './EditToDoForm';

function ToDo({idx, task, remove, handleEdit}) {

    const [hidden, setHidden] = useState(true);
    const [strikeTask, setStrikeTask] = useState(<p>{task}</p>);

    function strike() {
        setStrikeTask(<p style={{textDecoration: 'line-through'}}>{task}</p>)
    }

    //hidden wrt EditToDoForm component
    if (hidden) {
        return (
            <div className="ToDo">
                {strikeTask}
                <button onClick={remove}>X</button>
                <button onClick={() => setHidden(false)}>Edit</button>
                <button onClick={strike}>Mark as complete</button>
            </div>
        )
    } else {
        return (
            <>
                <div className="ToDo">
                    <p>{strikeTask}</p>
                    <button onClick={remove}>X</button>
                    <button onClick={strike}>Mark as completeu</button>
                </div>
                <EditToDoForm idx={idx} task={task} handleEdit={handleEdit} setHidden={setHidden} />
            </>
        )

    }


}

export default ToDo;