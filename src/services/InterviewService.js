// src/services/InterviewService.js
import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Fallback to localhost in dev
});
const InterviewService = {
  scheduleInterview: async (interviewDetails) => {
    const response = await axios.post('/api/interviews', interviewDetails);
    return response.data;
  }
};

export default InterviewService;
