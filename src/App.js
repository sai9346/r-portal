import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import JobPostingPage from './pages/JobPostingPage';
import CandidateSearchPage from './pages/CandidateSearchPage';
import ApplicationDashboard from './pages/ApplicationDashboard';
import InterviewSchedulingPage from './pages/InterviewSchedulingPage';
import BulkMessagingPage from './pages/BulkMessagingPage';
import PricePlanPage from './pages/PricePlanPage';
import ApplicationForm from './components/ApplicationForm'; 

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PricePlanPage />} /> {/* Default route */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/job-postings" element={<JobPostingPage />} />
        <Route path="/application-form" element={<ApplicationForm />} /> 
        <Route path="/candidate-search" element={<CandidateSearchPage />} />
        <Route path="/applications" element={<ApplicationDashboard />} />
        <Route path="/interview-scheduling" element={<InterviewSchedulingPage />} />
        <Route path="/bulk-messaging" element={<BulkMessagingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
