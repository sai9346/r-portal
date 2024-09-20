// src/services/JobService.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use the environment variable
});

const JobService = {
  getAllJobs: async () => {
    try {
      const response = await api.get('/jobs');
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error.response?.status, error.response?.data); // Log more details
      throw new Error('Error fetching jobs');
    }
  },
};


  // Define other methods as needed (e.g., createJobPost, etc.)

export default JobService;
