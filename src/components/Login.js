import React, { useState } from "react";
import './Form.css';

const Login = () => {
  const [formData, setFormData] = useState({
    role: "farmer",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form data to backend API
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <select name="role" onChange={handleChange}>
        <option value="farmer">Farmer</option>
        <option value="warehouse-owner">Warehouse Owner</option>
        <option value="buyer">Buyer</option>
        <option value="donor">Donor</option>
        <option value="admin">Admin</option>
      </select>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
