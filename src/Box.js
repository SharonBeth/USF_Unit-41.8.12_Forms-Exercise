import './App.css';
import React from "react";

const Box = ({ id, width, height, backgroundColor, handleRemove }) => {
    const remove = () => handleRemove(id);

    return (
        <div style={{ height: `${width}em`, width: `${width}em`, backgroundColor: backgroundColor }}>
            <p> Width: {width}</p>
            <p> Height: {height}</p>
            <p> Background Color: {backgroundColor} </p>
            <button onClick={remove}>Remove the Box! </button>
        </div>
    );
}

export default Box;
