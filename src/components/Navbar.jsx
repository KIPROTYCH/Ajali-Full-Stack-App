
import React, { useState } from "react";
import "../css/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="nav-items">
      <div className="nav-text">
        <Link
          to="/"
          style={{
            color: "red",
            fontSize: "34px",
            fontWeight: "700",
            textDecoration: "none",
            borderBottom: "none",
          }}
        >
          Ajali
        </Link>
      </div>

      <div className="nav-center">
        <ul>
          {/* <li>
            <Link to="/Emergencies">Report Incident</Link>
          </li> */}
          <li>
            <Link to="/AboutPage">About Us</Link>
          </li>
          {/* <li>
            <Link to="/MapPage">Locations</Link>
          </li> */}
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="signup-link">Report Incident</span>
            {showDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/SignUp" style={{ fontSize: "13px" }}>
                    New User? Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/login" style={{ fontSize: "13px" }}>
                    Login your Account
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
