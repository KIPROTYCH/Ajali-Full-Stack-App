import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import "../css/Admin.css";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    adminUsername: "",
    adminPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Create a state variable to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Create state variables for validation errors
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    axios
      .post(`${API_BASE_URL}/admins`, {
        username: formData.adminUsername,
        password: formData.adminPassword,
      })
      .then((response) => {
        console.log(response.data);
        setIsSuccess(true);
        setIsSubmitting(false);

        // Mark the user as logged in
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
        setIsSuccess(false);
        setIsSubmitting(false);
      });
  };

  const isFormValid = () => {
    const { adminUsername, adminPassword } = formData;

    // Reset validation errors
    setUsernameError("");
    setPasswordError("");

    let isValid = true;

    if (adminUsername.trim() === "") {
      setUsernameError("Username is required.");
      isValid = false;
    }

    if (adminPassword.trim() === "") {
      setPasswordError("Password is required.");
      isValid = false;
    }

    return isValid;
  };

  // Function to handle manual navigation to the dashboard page
  const navigateToDashboard = () => {
    if (isLoggedIn) {
      window.location.href = "/AdminDashboard";
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="admin-username">Username:</label>
          <input
            type="text"
            id="admin-username"
            name="adminUsername"
            placeholder="Enter your admin username"
            value={formData.adminUsername}
            onChange={(e) =>
              setFormData({ ...formData, adminUsername: e.target.value })
            }
          />
          <span className="error">{usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="admin-password">Password:</label>
          <input
            type="password"
            id="admin-password"
            name="adminPassword"
            placeholder="Enter your admin password"
            value={formData.adminPassword}
            onChange={(e) =>
              setFormData({ ...formData, adminPassword: e.target.value })
            }
          />
          <span className="error">{passwordError}</span>
        </div>
        <button type="submit" className="admin-button" disabled={isSubmitting}>
          {isSuccess ? "Successful!!" : "Login"}
        </button>
        {isSuccess && (
          <button
            onClick={navigateToDashboard}
            className="dashboard-button"
            disabled={!isLoggedIn}
          >
            Go to Dashboard
          </button>
        )}
      </form>
    </div>
  );
}
