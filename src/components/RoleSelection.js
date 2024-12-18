import React from "react";
import { Link } from "react-router-dom";
import './RoleSelection.css';

function RoleSelection() {
  return (
    <div className="role-selection-container">
      <h1>Select Your Role</h1>
      <ul>
        <li>
          <Link to="/register/farmer">Register as Farmer</Link>
        </li>
        <li>
          <Link to="/register/warehouseOwner">Register as Warehouse Owner</Link>
        </li>
        <li>
          <Link to="/register/user">Register as User</Link>
        </li>
      </ul>
    </div>
  );
}

export default RoleSelection;
