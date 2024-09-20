// src/services/InterviewService.js
import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use the environment variable
});
const InterviewService = {
  scheduleInterview: async (interviewDetails) => {
    const response = await axios.post('/api/interviews', interviewDetails);
    return response.data;
  }
};

export default InterviewService;
