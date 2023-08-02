import './App.css';
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm'
import Box from './Box';


function BoxList() {
    const INITIAL_STATE = [
        // { id: uuid(), width: 34, height: 72, backgroundColor: 'orange' },
        // { id: uuid(), width: 40, height: 80, backgroundColor: 'green' }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }

    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div className="BoxList">
            <h3>Color Box Maker</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, width, height, backgroundColor }) => <Box id={id} width={width} height={height} backgroundColor={backgroundColor} key={id} handleRemove={remove} />)}
            </div>
        </div>
    );
}

export default BoxList;
