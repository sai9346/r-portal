// src/pages/PricePlanPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #f7f9fc; /* Light background color for the page */
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  padding: 30px;
  text-align: left;
  margin: 20px;
  border: 1px solid #e1e5ea; /* Light border for subtle definition */
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 15px;
`;

const Price = styled.h2`
  font-size: 28px;
  color: #007bff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;

  li {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const PricePlanPage = () => {
  return (
    <PageContainer>
      <Card>
        <Title>Basic Plan</Title>
        <Price>₹20,000/year</Price>
        <Description>
          The Basic Plan provides essential features for recruiters to manage job postings and interact with candidates. Streamline your recruitment process with a set of core tools.
        </Description>
        <h3>Core Features:</h3>
        <FeatureList>
          <li>Post up to 5 job listings per month.</li>
          <li>Basic job templates for quick job creation.</li>
          <li>Access to a candidate database with filtering options.</li>
          <li>Shortlisting functionality for potential candidates.</li>
          <li>Dashboard to track applications and view candidate details.</li>
          <li>Request interview slots through an integrated calendar.</li>
          <li>Send bulk emails to shortlisted candidates.</li>
          <li>Document viewing for resumes, cover letters, and certifications.</li>
          <li>5GB of document storage for recruiter records.</li>
          <li>Basic job performance analytics.</li>
          <li>Email support for any issues or queries.</li>
        </FeatureList>
        <Link to="/home">
          <Button>Proceed to Home</Button>
        </Link>
      </Card>
    </PageContainer>
  );
};

export default PricePlanPage;
