import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { v4 as uuid } from 'uuid';

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('itemsArray'));
}

function setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function ToDoList() {
    const loadLocalStorage = JSON.parse(getLocalStorage()) || [];

    const [items, setItems] = useState(loadLocalStorage);

    function handleSubmit(newItem) {
        setItems([...items, newItem]);
        setLocalStorage('itemsArray', [...items, newItem]);
    }

    function removeTask(idx) {
        const lsItems = getLocalStorage();
        lsItems.splice(idx, 1);
        setLocalStorage('itemsArray', lsItems);

        items.splice(idx, 1);
        setItems([...items]);
    }

    function editTask(idx, item) {
        const lsItems = getLocalStorage();
        lsItems[idx] = item;
        setLocalStorage('itemsArray', lsItems);

        items[idx] = item;
        setItems([...items]);
    }

    return (
        <div>
            { items.map((item,idx) => <ToDo key={uuid()} idx={idx} task={item} remove={() => removeTask(idx)} handleEdit={editTask} />) }
            <ToDoForm handleSubmit={handleSubmit}/>
        </div>
    )

}

export default ToDoList;
export {setLocalStorage};
