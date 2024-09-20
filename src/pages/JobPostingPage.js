// src/pages/JobPostingPage.js
import React, { useEffect, useState } from 'react';
import JobPostCard from '../components/JobPostCard';
import JobService from '../services/JobService';

const JobPostingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await JobService.getAllJobs();
        setJobs(data);
      } catch (err) {
        setError('Failed to fetch job postings');
        console.error('Error fetching jobs:', err);
      }
    };

    fetchJobs();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Job Postings</h1>
      {jobs.length === 0 ? (
        <p>No job postings available.</p>
      ) : (
        jobs.map((job) => (
          <JobPostCard key={job._id} job={job} /> // Use _id if that's the field in the backend
        ))
      )}
    </div>
  );
};

export default JobPostingPage;
