// src/pages/InterviewSchedulingPage.js
import React from 'react';
import InterviewScheduleForm from '../components/InterviewScheduleForm';
import InterviewService from '../services/InterviewService';

const InterviewSchedulingPage = () => {
  const handleScheduleInterview = async (interviewDetails) => {
    try {
      await InterviewService.scheduleInterview(interviewDetails);
      alert('Interview scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling interview:', error);
      alert('Failed to schedule interview.');
    }
  };

  return (
    <div>
      <h1>Schedule Interview</h1>
      <InterviewScheduleForm onSubmit={handleScheduleInterview} />
    </div>
  );
};

export default InterviewSchedulingPage;
