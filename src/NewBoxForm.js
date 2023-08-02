import './App.css';
import React, { useState } from "react";

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="integer"
                name="width"
                min="1"
                max="400"
                placeholder="Width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="integer"
                name="height"
                min="1"
                max="400"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Background Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    );
}

export default NewBoxForm;