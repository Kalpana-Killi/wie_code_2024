import React, { useState } from "react";
import "./warehouseOwnerForm.css";

function WarehouseOwnerRegistrationForm() {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    warehouseName: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    capacityTotal: "",
    capacityAvailable: "",
    storageType: "",
    rentalPrice: "",
    images: null,
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
    <form className="warehouse-owner-form" onSubmit={handleSubmit}>
      <h1>Warehouse Owner Registration</h1>
      <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="warehouseName" placeholder="Warehouse Name" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" onChange={handleChange} required />
      <input type="text" name="pinCode" placeholder="Pin Code" onChange={handleChange} required />
      <input type="text" name="capacityTotal" placeholder="Total Capacity" onChange={handleChange} required />
      <input type="text" name="capacityAvailable" placeholder="Available Capacity" onChange={handleChange} required />
      <input type="text" name="storageType" placeholder="Storage Type" onChange={handleChange} required />
      <input type="text" name="rentalPrice" placeholder="Rental Price" onChange={handleChange} required />
      <input type="file" name="images" accept="image/*" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default WarehouseOwnerRegistrationForm;
