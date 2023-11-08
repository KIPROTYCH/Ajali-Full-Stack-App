
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import API_BASE_URL from "../config";
import "../css/AdminDashboard.css";

export default function AdminDashboard() {
  const [incidents, setIncidents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingIncident, setEditingIncident] = useState(null);
  const [editedData, setEditedData] = useState({
    user_id: "",
    title: "",
    description: "",
    geolocation: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/incident_reports`)
      .then((response) => {
        setIncidents(response.data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const editIncident = (incident) => {
    setEditingIncident(incident);
    setEditedData({
      user_id: incident.user_id,
      title: incident.title,
      description: incident.description,
      geolocation: incident.geolocation,
      status: incident.status,
    });
  };

  const cancelEdit = () => {
    setEditingIncident(null);
  };

  const updateIncident = (id) => {
    axios
      .put(`${API_BASE_URL}/incident_reports/${id}`, editedData)
      .then((response) => {
        const updatedIncidents = incidents.map((incident) =>
          incident.report_id === id ? { ...incident, ...editedData } : incident
        );
        setIncidents(updatedIncidents);
        setEditingIncident(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStatusChange = (e) => {
    setEditedData({
      ...editedData,
      status: e.target.value,
    });
  };

  return (
    <div className="admin-dashboard-background">
      <div className="admin-dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <div className="top-left">
          <Link to="/admin">Logout</Link>
        </div>

        {isLoading ? (
          <p className="loading-message">Loading data...</p>
        ) : incidents.length === 0 ? (
          <p className="no-incidents-message">No incidents to display.</p>
        ) : (
          <table className="incident-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>User ID</th>
                <th>Description</th>
                <th>Geolocation</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr key={incident.report_id}>
                  <td>{incident.title}</td>
                  <td>{incident.user_id}</td>
                  <td>{incident.description}</td>
                  <td>{incident.geolocation}</td>
                  <td>
                    {editingIncident === incident ? (
                      <select
                        value={editedData.status}
                        onChange={handleStatusChange}
                      >
                        <option value="under investigation">
                          Under Investigation
                        </option>
                        <option value="rejected">Rejected</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    ) : (
                      incident.status
                    )}
                  </td>
                  <td>
                    {editingIncident === incident ? (
                      <>
                        <button
                          onClick={() => updateIncident(incident.report_id)}
                          className="edit-button"
                        >
                          Update
                        </button>
                        <button onClick={cancelEdit} className="cancel-button">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => editIncident(incident)}
                        className="edit-button"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
