// src/services/JobService.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://r-backend-k4jv.onrender.com', // Ensure this points to your backend
  withCredentials: true, // Send credentials such as cookies
});

const JobService = {
  getAllJobs: async () => {
    try {
      const response = await api.get('/api/jobs');
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error.response?.status, error.response?.data || error.message);
      throw new Error('Error fetching jobs');
    }
  },
};

export default JobService;
