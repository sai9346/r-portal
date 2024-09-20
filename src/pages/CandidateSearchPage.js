import React, { useEffect, useState } from 'react';
import CandidateCard from '../components/CandidateCard';
import CandidateService from '../services/CandidateService';

const CandidateSearchPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null); // Add error state for handling API errors

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await CandidateService.getAllCandidates();
        setCandidates(data);
      } catch (error) {
        setError('Failed to fetch candidates.');
        console.error(error);
      }
    };
    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {error ? (
        <p>{error}</p>
      ) : candidates.length === 0 ? (
        <p>No candidates found.</p>
      ) : (
        candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))
      )}
    </div>
  );
};

export default CandidateSearchPage;
