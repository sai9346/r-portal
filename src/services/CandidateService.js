import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

const CandidateService = {
  getAllCandidates: async () => {
    const response = await api.get('/api/candidates');
    return response.data;
  },

  sendBulkMessages: async (recipients, message) => {
    const response = await api.post('/api/candidates/bulk-message', { recipients, message });
    return response.data;
  }
};

export default CandidateService;
