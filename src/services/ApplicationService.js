import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  withCredentials: true,
});

const ApplicationService = {
  getAllApplications: async () => {
    try {
      const response = await api.get('/api/applications'); // Use the configured instance
      return response.data;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },
  // Other service methods...
};

export default ApplicationService;
