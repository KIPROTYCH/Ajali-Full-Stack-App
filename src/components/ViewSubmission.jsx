// import React, { useState } from "react";

// export default function ViewSubmission({ data, onSave, onCancel }) {
//   const [editedData, setEditedData] = useState({ ...data });

//   const handleSave = () => {
//     onSave(editedData);
//   };

//   return (
//     <div className="view-submission-container">
//       <h2>Edit Submission</h2>
//       <div className="form-group">
//         <label>Title:</label>
//         <input
//           type="text"
//           value={editedData.title}
//           onChange={(e) =>
//             setEditedData({ ...editedData, title: e.target.value })
//           }
//         />
//       </div>
//       <div className="form-group">
//         <label>Description:</label>
//         <textarea
//           value={editedData.description}
//           onChange={(e) =>
//             setEditedData({ ...editedData, description: e.target.value })
//           }
//         ></textarea>
//       </div>
//       <div className="form-group">
//         <label>Status:</label>
//         <select
//           value={editedData.status}
//           onChange={(e) =>
//             setEditedData({ ...editedData, status: e.target.value })
//           }
//         >
//           <option value="urgent">Urgent</option>
//           <option value="normal">Normal</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>Location:</label>
//         <input
//           type="text"
//           value={editedData.geolocation}
//           onChange={(e) =>
//             setEditedData({ ...editedData, geolocation: e.target.value })
//           }
//         />
//       </div>
//       <button onClick={handleSave}>Save and Submit</button>
//       <button onClick={onCancel}>Cancel</button>
//     </div>
//   );
// }


import React, { useState } from "react";
import "../css/ViewSubmission.css";


export default function ViewSubmission({ data, onEdit, onCancel }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...data });

  const handleSave = () => {
    onEdit(editedData);
    setIsEditing(false);
  };

  return (
    <div className="view-submission-container">
      <h2>{isEditing ? "Edit Submission" : "View Submission"}</h2>
      {isEditing ? (
        <div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={editedData.title}
              onChange={(e) =>
                setEditedData({ ...editedData, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={editedData.description}
              onChange={(e) =>
                setEditedData({ ...editedData, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              value={editedData.status}
              onChange={(e) =>
                setEditedData({ ...editedData, status: e.target.value })
              }
            >
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              value={editedData.geolocation}
              onChange={(e) =>
                setEditedData({ ...editedData, geolocation: e.target.value })
              }
            />
          </div>
          <button onClick={handleSave}>Save and Submit</button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label>Title:</label>
            <p>{data.title}</p>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <p>{data.description}</p>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <p>{data.status}</p>
          </div>
          <div className="form-group">
            <label>Location:</label>
            <p>{data.geolocation}</p>
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button onClick={onCancel}>Close</button>
    </div>
  );
}
