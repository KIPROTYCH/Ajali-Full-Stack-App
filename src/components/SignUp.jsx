
// import React, { useState } from "react";
// import axios from "axios";
// import API_BASE_URL from "../config";
// import "../css/SignUp.css";

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [registered, setRegistered] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRegistration = async () => {
//     if (!isFormValid()) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     const axiosConfig = {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     };

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/users/register`,
//         formData,
//         axiosConfig
//       );

//       if (response.status === 201) {
//         // Registration successful, show a message to inform the user
//         setRegistered(true);
//         // Redirect to the login page
//         window.location.href = "/login";
//       } else {
//         setError("User registration failed. Please try again.");
//       }
//     } catch (error) {
//       setError("User registration failed. Please try again.");
//     }
//   };

//   const isFormValid = () => {
//     const { username, email, password } = formData;
//     return (
//       username.trim() !== "" && email.trim() !== "" && password.trim() !== ""
//     );
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       {!registered ? (
//         <form className="signup-form" onSubmit={handleRegistration}>
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
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
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
//           <button type="submit" className="signup-button">
//             Sign Up
//           </button>
//         </form>
//       ) : (
//         <p className="success-message">
//           Registration successful! You can now <a href="/login">Log In</a>.
//         </p>
//       )}

//       {error && <p className="error-message">{error}</p>}

//       {!registered && (
//         <p>
//           Already signed up? <a href="/login">Login</a>
//         </p>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import "../css/SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async () => {
    if (!isFormValid()) {
      setError("Please fill in all fields.");
      return;
    }

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/register`,
        formData,
        axiosConfig
      );

      if (response.status === 201) {
        // Registration successful, show a message to inform the user
        setRegistered(true);

        // Redirect to the login page
        window.location.href = "/login";
      } else {
        setError("User registration failed. Please try again.");
      }
    } catch (error) {
      setError("User registration failed. Please try again.");
    }
  };

  const isFormValid = () => {
    const { username, email, password } = formData;
    return (
      username.trim() !== "" && email.trim() !== "" && password.trim() !== ""
    );
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {!registered ? (
        <form className="signup-form">
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
            type="button"
            className="signup-button"
            onClick={() => {
              handleRegistration();
            }}
          >
            Sign Up
          </button>
        </form>
      ) : (
        <p className="success-message">
          Registration successful! You can now <a href="/login">Log In</a>.
        </p>
      )}

      {error && <p className="error-message">{error}</p>}

      {!registered && (
        <p>
          Already signed up? <a href="/login">Login</a>
        </p>
      )}
    </div>
  );
}
