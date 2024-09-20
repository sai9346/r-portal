import React from 'react';
import styled from 'styled-components';

// Styling for the Candidate Card Container
const CandidateCardContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin: 16px 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern look */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 250px; /* Ensures a base height to "fill" the card visually */
  display: flex;
  flex-direction: column; /* Makes the content stack vertically */
  justify-content: space-between; /* Distributes content more evenly */

  &:hover {
    transform: translateY(-5px); /* Slight lift effect */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }
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
  font-size: 1em; /* Slightly larger font for balance */
  line-height: 1.6; /* More line spacing to create a fuller look */

  strong {
    color: #007bff; /* Accent color for bold text */
  }
`;

// Styling for Skills
const CandidateSkills = styled.p`
  margin-top: 12px;
  color: #666;
  font-size: 1em;
  font-style: italic;
  line-height: 1.6; /* Make it more readable and balanced */
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
