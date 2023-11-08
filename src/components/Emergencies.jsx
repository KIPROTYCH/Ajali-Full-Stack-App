// import React, { useState, useRef } from "react";
// import axios from "axios";
// import API_BASE_URL from "../config";
// import "../css/Emergencies.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MapComponent from "./Map";
// import ViewSubmission from "./ViewSubmission";

// export default function Emergencies({ updateIncident }) {
//   const [formData, setFormData] = useState({
//     username: "",
//     title: "",
//     description: "",
//     status: "urgent",
//     images: [],
//     videos: [],
//     geolocation: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isViewingSubmission, setIsViewingSubmission] = useState(false);
//   const [errors, setErrors] = useState({
//     username: "",
//     title: "",
//     description: "",
//     geolocation: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const geolocationInputRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isFormValid() || isSubmitting) {
//       return;
//     }

//     setIsSubmitting(true);

//     const data = new FormData();

//     // Text inputs
//     data.append("user_id", formData.username);
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("status", formData.status);
//     data.append("geolocation", formData.geolocation);

//     // Images
//     for (let i = 0; i < formData.images.length; i++) {
//       data.append("images", formData.images[i]);
//     }

//     // Videos
//     for (let i = 0; i < formData.videos.length; i++) {
//       data.append("videos", formData.videos[i]);
//     }

//     axios
//       .post(`${API_BASE_URL}/incident_reports`, data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         setFormData({
//           username: "",
//           title: "",
//           description: "",
//           status: "urgent",
//           images: [],
//           videos: [],
//           geolocation: "",
//         });

//         setIsSubmitted(true);
//         setIsSubmitting(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setIsSubmitting(false);
//       });
//   };

//   const isFormValid = () => {
//     const { username, title, description, geolocation } = formData;
//     const newErrors = {};

//     if (!username.trim()) {
//       newErrors.username = "Username is required.";
//     }

//     if (!title.trim()) {
//       newErrors.title = "Title is required.";
//     }

//     if (!description.trim()) {
//       newErrors.description = "Description is required.";
//     }

//     if (!geolocation.trim()) {
//       newErrors.geolocation = "Geolocation is required.";
//     }

//     setErrors(newErrors);

//     return (
//       !newErrors.username &&
//       !newErrors.title &&
//       !newErrors.description &&
//       !newErrors.geolocation
//     );
//   };

//   const updateGeolocation = (coordinates) => {
//     const geolocation = `Latitude: ${coordinates[1].toFixed(
//       6
//     )}, Longitude: ${coordinates[0].toFixed(6)}`;
//     setFormData({ ...formData, geolocation });
//     geolocationInputRef.current.value = geolocation;
//   };

//   const handleViewSubmission = () => {
//     setIsViewingSubmission(true);
//   };

//   const handleCancelViewSubmission = () => {
//     setIsViewingSubmission(false);
//   };

//   return (
//     <div className="emergency-container">
//       <div className="form-and-map">
//         {!isViewingSubmission ? (
//           <form className="emergency-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="Enter your username"
//                 value={formData.username}
//                 onChange={(e) =>
//                   setFormData({ ...formData, username: e.target.value })
//                 }
//               />
//               <span className="error">{errors.username}</span>
//             </div>
//             <div className="form-group">
//               <label htmlFor="title">Title:</label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 placeholder="Enter the emergency title"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//               />
//               <span className="error">{errors.title}</span>
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description:</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 placeholder="Describe the emergency"
//                 rows="4"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//               ></textarea>
//               <span className="error">{errors.description}</span>
//             </div>
//             <div className="form-group">
//               <label htmlFor="geolocation">
//                 Geolocation (Lat Long Coordinates):
//               </label>
//               <input
//                 type="text"
//                 id="geolocation"
//                 name="geolocation"
//                 placeholder="Enter Lat Long Coordinates"
//                 ref={geolocationInputRef}
//                 value={formData.geolocation}
//                 onChange={(e) =>
//                   setFormData({ ...formData, geolocation: e.target.value })
//                 }
//               />
//               <span className="error">{errors.geolocation}</span>
//             </div>
//             <div className="form-group">
//               <label>Upload Images and Videos:</label>
//               <input
//                 type="file"
//                 id="media"
//                 name="media"
//                 accept="image/*,video/*"
//                 multiple
//                 onChange={(e) => {
//                   const files = e.target.files;
//                   const imageFiles = Array.from(files).filter((file) =>
//                     file.type.startsWith("image/")
//                   );
//                   const videoFiles = Array.from(files).filter((file) =>
//                     file.type.startsWith("video/")
//                   );
//                   setFormData({
//                     ...formData,
//                     images: imageFiles,
//                     videos: videoFiles,
//                   });
//                 }}
//               />
//             </div>
//             <button
//               type="submit"
//               className={`${
//                 isSubmitted ? "dark-red-bg" : "blue-bg"
//               } submit-button`}
//               disabled={isSubmitting}
//             >
//               {isSubmitted ? (
//                 <div className="thank-you-button">
//                   <FontAwesomeIcon icon="check" className="tick-icon" />
//                   <span>Thank you for reporting the incident</span>
//                   <button onClick={handleViewSubmission}>
//                     View Submission
//                   </button>
//                 </div>
//               ) : (
//                 "Submit"
//               )}
//             </button>
//           </form>
//         ) : (
//           <ViewSubmission
//             data={formData}
//             onSave={(updatedData) => {
//               setIsViewingSubmission(false);
//               // You can update the incident data here or handle it as needed
//               updateIncident(updatedData);
//             }}
//             onCancel={handleCancelViewSubmission}
//           />
//         )}
//         <MapComponent updateGeolocation={updateGeolocation} />
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import "../css/Emergencies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapComponent from "./Map";
import ViewSubmission from "./ViewSubmission";

export default function Emergencies({ updateIncident }) {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    description: "",
    status: "urgent",
    images: [],
    videos: [],
    geolocation: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isViewingSubmission, setIsViewingSubmission] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    title: "",
    description: "",
    geolocation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const geolocationInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();

    // Text inputs
    data.append("user_id", formData.username);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("status", formData.status);
    data.append("geolocation", formData.geolocation);

    // Images
    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]);
    }

    // Videos
    for (let i = 0; i < formData.videos.length; i++) {
      data.append("videos", formData.videos[i]);
    }

    axios
      .post(`${API_BASE_URL}/incident_reports`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setFormData({
          username: "",
          title: "",
          description: "",
          status: "urgent",
          images: [],
          videos: [],
          geolocation: "",
        });

        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
  };

  const isFormValid = () => {
    const { username, title, description, geolocation } = formData;
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (!geolocation.trim()) {
      newErrors.geolocation = "Geolocation is required.";
    }

    setErrors(newErrors);

    return (
      !newErrors.username &&
      !newErrors.title &&
      !newErrors.description &&
      !newErrors.geolocation
    );
  };

  const updateGeolocation = (coordinates) => {
    const geolocation = `Latitude: ${coordinates[1].toFixed(
      6
    )}, Longitude: ${coordinates[0].toFixed(6)}`;
    setFormData({ ...formData, geolocation });
    geolocationInputRef.current.value = geolocation;
  };

  const handleViewSubmission = () => {
    setIsViewingSubmission(true);
  };

  const handleCancelViewSubmission = () => {
    setIsViewingSubmission(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    // Redirect to the landing page
    window.location.href = "/login"; 
  };

  return (
    <div className="emergency-container">
      <div className="form-and-map">
        {!isViewingSubmission ? (
          <form className="emergency-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <span className="error">{errors.username}</span>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter the emergency title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <span className="error">{errors.title}</span>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the emergency"
                rows="4"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
              <span className="error">{errors.description}</span>
            </div>
            <div className="form-group">
              <label htmlFor="geolocation">
                Geolocation (Lat Long Coordinates):
              </label>
              <input
                type="text"
                id="geolocation"
                name="geolocation"
                placeholder="Enter Lat Long Coordinates"
                ref={geolocationInputRef}
                value={formData.geolocation}
                onChange={(e) =>
                  setFormData({ ...formData, geolocation: e.target.value })
                }
              />
              <span className="error">{errors.geolocation}</span>
            </div>
            <div className="form-group">
              <label>Upload Images and Videos:</label>
              <input
                type="file"
                id="media"
                name="media"
                accept="image/*,video/*"
                multiple
                onChange={(e) => {
                  const files = e.target.files;
                  const imageFiles = Array.from(files).filter((file) =>
                    file.type.startsWith("image/")
                  );
                  const videoFiles = Array.from(files).filter((file) =>
                    file.type.startsWith("video/")
                  );
                  setFormData({
                    ...formData,
                    images: imageFiles,
                    videos: videoFiles,
                  });
                }}
              />
            </div>
            <button
              type="submit"
              className={`${
                isSubmitted ? "dark-red-bg" : "blue-bg"
              } submit-button`}
              disabled={isSubmitting}
            >
              {isSubmitted ? (
                <div className="thank-you-button">
                  <FontAwesomeIcon icon="check" className="tick-icon" />
                  <span>Thank you for reporting the incident</span>
                  <button onClick={handleViewSubmission}>
                    View Submission
                  </button>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        ) : (
          <ViewSubmission
            data={formData}
            onSave={(updatedData) => {
              setIsViewingSubmission(false);
              // You can update the incident data here or handle it as needed
              updateIncident(updatedData);
            }}
            onCancel={handleCancelViewSubmission}
          />
        )}
        <MapComponent updateGeolocation={updateGeolocation} />
      </div>
      {isSubmitted && (
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      )}
    </div>
  );
}
