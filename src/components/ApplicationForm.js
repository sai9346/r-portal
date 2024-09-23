import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 20px;
  margin-top: 50px; 
  max-width: 600px;
  margin: 50px auto; 
  
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxLabel = styled.label`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-top: 15px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 15px;
`;

const ApplicationForm = ({ location }) => {
  const job = location?.state?.job || {}; 
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (acceptedTerms && resume) {
      console.log('Application submitted:', { job, resume, coverLetter });
      setSubmissionSuccess('Application submitted successfully!');
    } else {
      setSubmissionSuccess('Please upload your resume and accept the terms.');
    }
  };

  return (
    <FormContainer>
      <Title>Apply for {job?.title || 'the Job'}</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="resume">Upload Resume<span style={{ color: 'red' }}>*</span></Label>
          <Input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="coverLetter">Upload Cover Letter (Optional)</Label>
          <Input
            type="file"
            id="coverLetter"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCoverLetter(e.target.files[0])}
          />
        </FormGroup>

        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />
          Accept Terms and Conditions<span style={{ color: 'red' }}>*</span>
        </CheckboxLabel>

        <Button type="submit">Submit Application</Button>
      </form>

      {submissionSuccess && (
        submissionSuccess.includes('successfully')
          ? <SuccessMessage>{submissionSuccess}</SuccessMessage>
          : <ErrorMessage>{submissionSuccess}</ErrorMessage>
      )}
    </FormContainer>
  );
};

export default ApplicationForm;
