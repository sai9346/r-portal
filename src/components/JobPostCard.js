import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styling for the Job List Container (to arrange 3 cards per row)
const JobListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// Styling the Job Card Container
const JobCardContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin: 16px;
  border-radius: 16px; /* More rounded corners for a card-like look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding subtle shadow */
  background-color: #fff; /* White background for better contrast */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px; /* Set width to make it look more like a card */
  text-align: left; /* Align text to the left for readability */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
    transform: translateY(-5px); /* Lift effect on hover */
  }
`;

// Styling for Job Title
const JobTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  line-height: 1.2;
`;

// Styling for Job Details (Location, Experience, etc.)
const JobDetails = styled.p`
  margin: 5px 0;
  color: #555;
  font-size: 0.9em;
  line-height: 1.4;
`;

// Styling for Description
const JobDescription = styled.p`
  margin: 10px 0;
  line-height: 1.5;
  color: #666;
  font-size: 0.95em;
`;

// Styling for the Buttons
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
  margin-right: 10px;
  margin-top: 10px;

  &.apply {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3; /* Darker blue on hover */
      transform: translateY(-2px); /* Slight lift on hover */
    }
  }

  &.not-interested {
    background-color: #dc3545;
    color: white;

    &:hover {
      background-color: #c82333; /* Darker red on hover */
      transform: translateY(-2px); /* Slight lift on hover */
    }
  }
`;

const JobPostCard = ({ job, onRemove }) => {
  const navigate = useNavigate();

  // Handle the application navigation
  const handleApply = () => {
    if (job) {
      navigate('/application-form', { state: { job } });
      onRemove(job.id); // Remove card on apply
    } else {
      console.error('Job data is missing');
    }
  };

  // Handle the "Not Interested" action
  const handleNotInterested = () => {
    const reason = prompt('Please enter your reason for not being interested:');
    if (reason) {
      console.log(`Reason for not being interested: ${reason}`);
      onRemove(job.id); // Remove card if not interested
    }
  };

  if (!job) {
    return <p>Job data is unavailable.</p>;
  }

  return (
    <JobCardContainer>
      <JobTitle>{job.title}</JobTitle>
      <JobDetails><strong>Location:</strong> {job.location}</JobDetails>
      <JobDetails><strong>Experience:</strong> {job.experience} years</JobDetails>
      <JobDescription>{job.description}</JobDescription>
      <div>
        <Button className="apply" onClick={handleApply}>Apply</Button>
        <Button className="not-interested" onClick={handleNotInterested}>Not Interested</Button>
      </div>
    </JobCardContainer>
  );
};

const JobList = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Remote', experience: 2, description: 'Build responsive UIs' },
    { id: 2, title: 'Backend Developer', location: 'New York', experience: 4, description: 'Work with databases' },
    { id: 3, title: 'Full Stack Developer', location: 'San Francisco', experience: 3, description: 'Full stack development' },
    // Add more job objects here
  ]);

  // Function to remove a job card
  const removeJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  return (
    <JobListContainer>
      {jobs.map(job => (
        <JobPostCard key={job.id} job={job} onRemove={removeJob} />
      ))}
    </JobListContainer>
  );
};

export default JobList;
