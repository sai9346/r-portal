// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Container for the entire homepage
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

// Hero section with a background image
const HeroSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://source.unsplash.com/random/1600x900');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
  }
`;

// Cards section for all items
const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
`;

// Individual card for each section
const SectionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 15px;
  width: 300px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
`;

// Footer section with some links
const Footer = styled.footer`
  background-color: #f8f9fa;
  width: 100%;
  padding: 20px;
  text-align: center;
  color: #6c757d;

  a {
    color: #007bff;
    text-decoration: none;
    margin: 0 10px;
  }
`;

// HomePage Component
const HomePage = () => {
  return (
    <HomePageContainer>
      {/* Hero Section */}
      <HeroSection>
        <div>
          <h1>Welcome to Recruiter Portal</h1>
          <p>Manage job postings, candidates, and applications in one place.</p>
        </div>
      </HeroSection>

      {/* Main Section with cards */}
      <SectionWrapper>
        <SectionCard>
          <h2>Job Postings</h2>
          <p>Manage and view job postings.</p>
          <Link to="/job-postings">Go to Job Postings</Link>
        </SectionCard>

        <SectionCard>
          <h2>Candidate Search</h2>
          <p>Search and shortlist candidates.</p>
          <Link to="/candidate-search">Go to Candidate Search</Link>
        </SectionCard>

        <SectionCard>
          <h2>Applications</h2>
          <p>Track and manage applications.</p>
          <Link to="/applications">Go to Applications</Link>
        </SectionCard>

        <SectionCard>
          <h2>Interview Scheduling</h2>
          <p>Schedule interviews with candidates.</p>
          <Link to="/interview-scheduling">Go to Interview Scheduling</Link>
        </SectionCard>

        <SectionCard>
          <h2>Bulk Messaging</h2>
          <p>Send bulk messages to candidates.</p>
          <Link to="/bulk-messaging">Go to Bulk Messaging</Link>
        </SectionCard>
      </SectionWrapper>

      {/* Footer Section */}
      <Footer>
        <p>&copy; 2024 Recruiter Portal. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{' '}
          <a href="#">Contact Us</a>
        </p>
      </Footer>
    </HomePageContainer>
  );
};

export default HomePage;
