import React, { useState } from "react";
import "./farmerForm.css";

function FarmerRegistrationForm() {
  const [formData, setFormData] = useState({
    farmerName: "",
    phone: "",
    email: "",
    village: "",
    district: "",
    state: "",
    pinCode: "",
    cropsPlanted: [],
    photo: null,
    identityProof: null,
    landOwnershipProof: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to the backend
  };

  return (
    <form className="farmer-form" onSubmit={handleSubmit}>
      <h1>Farmer Registration</h1>
      <input type="text" name="farmerName" placeholder="Farmer Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="text" name="village" placeholder="Village" onChange={handleChange} required />
      <input type="text" name="district" placeholder="District" onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" onChange={handleChange} required />
      <input type="text" name="pinCode" placeholder="Pin Code" onChange={handleChange} required />
      <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
      <input type="file" name="identityProof" onChange={handleChange} required />
      <input type="file" name="landOwnershipProof" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default FarmerRegistrationForm;
