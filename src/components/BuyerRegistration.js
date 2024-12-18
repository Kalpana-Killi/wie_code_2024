import React, { useState } from 'react';
import './Form.css';  // Correct path to your Form.css file

const BuyerRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        contactNumber: '',
        email: '',
        address: '',
        preferredCrops: '',
        paymentMethod: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here (e.g., API call)
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="form-container">
            <h2>Buyer Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Company Name</label>
                    <input 
                        type="text" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Contact Number</label>
                    <input 
                        type="text" 
                        name="contactNumber" 
                        value={formData.contactNumber} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <textarea 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Preferred Crops</label>
                    <input 
                        type="text" 
                        name="preferredCrops" 
                        value={formData.preferredCrops} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Payment Method</label>
                    <input 
                        type="text" 
                        name="paymentMethod" 
                        value={formData.paymentMethod} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default BuyerRegistration;
