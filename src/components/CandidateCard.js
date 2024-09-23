import React from 'react';
import styled from 'styled-components';

// Styling for the Candidate Card Container
const CandidateCardContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin: 16px 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 250px; 
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
`;

// Styling for Candidate Name (Title)
const CandidateName = styled.h3`
  font-size: 1.6em;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  line-height: 1.4;
`;

// Styling for Candidate Details
const CandidateDetails = styled.p`
  margin: 8px 0;
  color: #555;
  font-size: 1em; 
  line-height: 1.6; 

  strong {
    color: #007bff;
  }
`;

// Styling for Skills
const CandidateSkills = styled.p`
  margin-top: 12px;
  color: #666;
  font-size: 1em;
  font-style: italic;
  line-height: 1.6;
`;

const CandidateCard = ({ candidate }) => {
  return (
    <CandidateCardContainer>
      <CandidateName>{candidate.name}</CandidateName>
      <CandidateDetails><strong>Location:</strong> {candidate.location}</CandidateDetails>
      <CandidateDetails><strong>Experience:</strong> {candidate.experience} years</CandidateDetails>
      <CandidateSkills><strong>Skills:</strong> {candidate.skills.join(', ')}</CandidateSkills>
    </CandidateCardContainer>
  );
};

export default CandidateCard;
