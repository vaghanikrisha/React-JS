import React, { useState, useEffect } from 'react';
import './FormCrud.css';  // Import the CSS file

const FormCrud = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({});
    const [editIndex, setEditIndex] = useState(-1); 

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('users')) || [];
        setData(storedData);
    }, []);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        return tempErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            if (editIndex !== -1) {
                // If we're editing, update the existing data
                let updatedData = data.map((item, index) =>
                    index === editIndex ? formData : item
                );
                setData(updatedData);
                localStorage.setItem('users', JSON.stringify(updatedData));
                setEditIndex(-1); // Reset edit mode
            } else {
                // If we're not editing, add new data
                let newData = [...data, formData];
                setData(newData);
                localStorage.setItem('users', JSON.stringify(newData));
            }
            setFormData({ name: '', email: '' }); // Clear form
        } else {
            setErrors(validationErrors);
        }
    };

    const handleDelete = (index) => {
        let newData = data.filter((_, i) => i !== index);
        setData(newData);
        localStorage.setItem('users', JSON.stringify(newData));
    };

    const handleEdit = (index) => {
        setFormData(data[index]);
        setEditIndex(index); // Set the current index to edit mode
    };

    return (
        <div className="container">
            <h3 className="title">FORM CRUD using 
                </h3>  {/* Add title */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <button type="submit">{editIndex !== -1 ? 'Update' : 'Submit'}</button>
            </form>
            <div>
                <h3>Stored Data:</h3>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            {item.name} ({item.email})
                            <div>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                {editIndex === index && <span>(updated)</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FormCrud;
