import React, { useState } from "react";

function NewStudentForm({ onSubmit }) {  
    
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); 
        setFormData({ name: '', number: '', address: '' }); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewStudentForm;
