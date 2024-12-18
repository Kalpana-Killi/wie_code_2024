import React, { useState } from "react";
import "./userForm.css";


function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profilePicture: null,
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
    <form className="user-form" onSubmit={handleSubmit}>
      <h1>User Registration</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="file" name="profilePicture" accept="image/*" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistrationForm;
