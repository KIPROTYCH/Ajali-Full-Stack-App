
// import React, { useState } from "react";
// import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import "../css/Footer.css";

// function Footer() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const resetErrors = () => {
//     setNameError("");
//     setEmailError("");
//   };

//   const handleSubscribe = () => {
//     resetErrors();

//     if (name === "") {
//       setNameError("Name is required");
//       return;
//     }

//     if (email === "") {
//       setEmailError("Email is required");
//       return;
//     }

//     // You can perform subscription logic here

//     setSubscribed(true);
//   };

//   return (
//     <div className="footer-container">
//       <div className="footer-top">
//         <div className="footer-column">
//           <h3 className="footer-header">Support Center</h3>
//           <ul className="footer-list">
//             <li>24/7 Assistance</li>
//             <li>Privacy & Data</li>
//             <li>Terms Of Service</li>
//             <li>FAQs</li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h3 className="footer-header">Community</h3>
//           <ul className="footer-list">
//             <li>MysteryMinds</li>
//             <li>GlobalReads</li>
//             <li>Poets' Corner</li>
//             <li>CampusPages</li>
//           </ul>
//         </div>

//         <div className="newsletter-form">
//           <h3 className="footer-header">Subscribe to Our Newsletter</h3>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => {
//               resetErrors();
//               setName(e.target.value);
//             }}
//           />
//           {nameError && <p className="error-message">{nameError}</p>}
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => {
//               resetErrors();
//               setEmail(e.target.value);
//             }}
//           />
//           {emailError && <p className="error-message">{emailError}</p>}
//           <button className="subscribe-button" onClick={handleSubscribe}>
//             Subscribe
//           </button>
//           {subscribed && (
//             <p className="subscribed-message">
//               Thanks for Subscribing to our NewsLetter!!!
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="social-icons">
//         <div className="social-icon-container">
//           <a href="https://www.instagram.com/">
//             <FaInstagram size={25} color="orange" />
//           </a>
//         </div>
//         <div className="social-icon-container">
//           <a href="https://www.facebook.com/">
//             <FaFacebook size={25} color="orange" />
//           </a>
//         </div>
//         <div className="social-icon-container">
//           <a href="https://www.linkedin.com/">
//             <FaLinkedin size={25} color="orange" />
//           </a>
//         </div>
//         <div className="social-icon-container">
//           <a href="https://twitter.com/">
//             <FaTwitter size={25} color="orange" />
//           </a>
//         </div>
//       </div>

//       <p className="footer-copyright">
//         &copy; {new Date().getFullYear()} Team AJali, Inc. All rights reserved.
//       </p>
//     </div>
//   );
// }

// export default Footer;

      // import React from "react";
      // import "../css/Footer.css";
      // function Footer() {
      //   return (
      //     <div id="main">
      //       <footer>
      //         <div id="policies">
      //           <h2>Team and Policies</h2>
      //           <ul>
      //             <div style={{ listStyle: "none" }}>
      //               <li class="list-group-item">Terms of service</li>
      //               <li class="list-group-item">Privacy policy</li>
      //               <li class="list-group-item">Security</li>
      //               <li class="list-group-item">Location</li>
      //             </div>
      //           </ul>
      //         </div>
      //         <div id="features">
      //           <h2>Sign up to Our Newsletter</h2>
      //           <ul>
      //             <div style={{ listStyle: "none" }}>
      //               <button style={{ backgroundColor: "red" }}>
      //                 Subscribe
      //               </button>{" "}
      //               <br /> <br />
      //               <li>
      //                 <i
      //                   class="fa fa-copyright"
      //                   style={{ fontSize: "20px" }}
      //                 ></i>{" "}
      //                 Road Safety Network
      //               </li>
      //               <li>Contact: Ajalinbox@icao.int</li>
      //             </div>
      //           </ul>
      //         </div>

      //         <div id="company">
      //           <h2>Company</h2>
      //           <ul>
      //             <div style={{ listStyle: "none" }}>
      //               <li>About us</li>
      //               <li>Press</li>
      //               <li>Careers</li>
      //               <li>Blog</li>
      //               <li>Services</li>
      //             </div>
      //           </ul>
      //         </div>

      //         <div class="icons" style={{ listStyle: "none" }}>
      //           <h2>Connect with us:</h2>
      //           <li>Instagram</li>
      //           <li>Facebook</li>
      //           <li>LinkedIn</li>
      //           <li>Twitter</li>
      //           <li>Youtube</li>
      //           <i class="fa fa-facebook" style={{ fontSize: "35px" }}></i>
      //           <i class="fa fa-instagram" style={{ fontSize: "35px" }}></i>
      //           <i class="fa fa-twitter" style={{ fontSize: "35px" }}></i>
      //           <i class="fa fa-youtube" style={{ fontSize: "35px" }}></i>
      //           <i class="fa fa-linkedin" style={{ fontSize: "35px" }}></i>
      //         </div>
      //       </footer>
      //     </div>
      //   );
      // }
      // export default Footer;


      import React, { useState } from "react";
      import {
        FaInstagram,
        FaFacebook,
        FaLinkedin,
        FaTwitter,
      } from "react-icons/fa";
      import "../css/Footer.css";

      function Footer() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [nameError, setNameError] = useState("");
        const [emailError, setEmailError] = useState("");
        const [subscribed, setSubscribed] = useState(false);

        const resetErrors = () => {
          setNameError("");
          setEmailError("");
        };

        const handleSubscribe = () => {
          resetErrors();

          if (name === "") {
            setNameError("Name is required");
            return;
          }

          if (email === "") {
            setEmailError("Email is required");
            return;
          }
          setSubscribed(true);
        };

        return (
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-column">
                <h3 className="footer-header">Team and Policies</h3>
                <ul className="footer-list">
                  <li>Terms of service</li>
                  <li>Privacy policy</li>
                  <li>Security</li>
                  <li>Location</li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-header">Company</h3>
                <ul className="footer-list">
                  <li>About us</li>
                  <li>Press</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Services</li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-header">Connect with Us</h3>
                <ul className="footer-list">
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaInstagram size={25} color="orange" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebook size={25} color="orange" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin size={25} color="orange" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter size={25} color="orange" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="newsletter-form">
              <h3 className="footer-header">Subscribe to Our Newsletter</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  resetErrors();
                  setName(e.target.value);
                }}
              />
              {nameError && <p className="error-message">{nameError}</p>}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  resetErrors();
                  setEmail(e.target.value);
                }}
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <button className="subscribe-button" onClick={handleSubscribe}>
                Subscribe
              </button>
              {subscribed && (
                <p className="subscribed-message">
                  Thanks for Subscribing to our Newsletter!!!
                </p>
              )}
            </div>
            <div className="copyright">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Team AJali, Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        );
      }

      export default Footer;
