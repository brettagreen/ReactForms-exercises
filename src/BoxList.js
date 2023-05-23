import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
import { useState } from "react";


function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function handleSubmit(newBox) {
        setBoxes([...boxes, newBox]);
    }

    function removeCircle(idx) {
        boxes.splice(idx, 1);
        setBoxes([...boxes]);
    }

    return (
        <>
            <div>
                { boxes.map((box,idx) => <Box key={uuid()} width={box.width} 
                                            height={box.height} color={box.color} remove={() => removeCircle(idx)}/>)}
            </div>
            <div>
                <NewBoxForm handleSubmit={handleSubmit}/>
            </div>
        </>
    )
}

export default BoxList