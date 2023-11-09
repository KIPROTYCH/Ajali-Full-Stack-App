
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import API_BASE_URL from "../config";
// import "../css/Login.css";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLogin = async () => {
//     if (!isFormValid()) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/users/login`,
//         formData
//       );

//       if (response.data.access_token) {
//         localStorage.setItem("token", response.data.access_token);
//         setLoggedIn(true);
//       } else {
//         setError("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       setError("Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormValid = () => {
//     const { username, password } = formData;
//     return username.trim() !== "" && password.trim() !== "";
//   };

//   useEffect(() => {
//     if (loggedIn) {
//       // Use setTimeout to delay the redirect after a successful login
//       const redirectTimeout = setTimeout(() => {
//         window.location.href = "/emergencies";
//       }, 2000); // Redirect after 2 seconds (you can adjust the delay)

//       // Clear the timeout when the component unmounts
//       return () => clearTimeout(redirectTimeout);
//     }
//   }, [loggedIn]);

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : loggedIn ? (
//         <p>Login successful!!! Opening Incident Form..</p>
//       ) : (
//         <div className="login-form">
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter your username"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleInputChange}
//             />
//           </div>
//           <button
//             onClick={handleLogin}
//             className="login-button"
//             disabled={loading}
//           >
//             Login
//           </button>
//         </div>
//       )}
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import "../css/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    if (!isFormValid()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        formData
      );

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        setLoggedIn(true);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    const { username, password } = formData;
    return username.trim() !== "" && password.trim() !== "";
  };

  useEffect(() => {
    if (loggedIn) {
      // Use setTimeout to delay the redirect after a successful login
      const redirectTimeout = setTimeout(() => {
        window.location.href = "/emergencies";
      }, 2000); // Redirect after 2 seconds (you can adjust the delay)

      // Clear the timeout when the component unmounts
      return () => clearTimeout(redirectTimeout);
    }
  }, [loggedIn]);

  return (
    <div className="login-container">
      <h1>Login</h1>
      {loading ? (
        <p>Loading...</p>
      ) : loggedIn ? (
        <p>Login successful!!! Opening Incident Form..</p>
      ) : (
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={handleLogin}
            className="login-button"
            disabled={loading}
          >
            Login
          </button>
          <a href="/signup">Sign Up</a>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
