import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoleSelection from "./RoleSelection";
import FarmerRegistrationForm from "./FarmerRegistrationForm";
import WarehouseOwnerRegistrationForm from "./WarehouseOwnerRegistrationForm";
import UserRegistrationForm from "./UserRegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/register/farmer" element={<FarmerRegistrationForm />} />
        <Route path="/register/warehouseOwner" element={<WarehouseOwnerRegistrationForm />} />
        <Route path="/register/user" element={<UserRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
