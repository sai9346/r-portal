// src/pages/ApplicationDashboard.js
import React, { useEffect, useState } from 'react';
import ApplicationService from '../services/ApplicationService';

const ApplicationDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await ApplicationService.getAllApplications();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h1>Applications Dashboard</h1>
      {loading ? (
        <p>Loading applications...</p>
      ) : (
        <ul>
          {applications.map((application) => (
            <li key={application.id}>{application.candidateName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationDashboard;
