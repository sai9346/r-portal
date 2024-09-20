// src/pages/BulkMessagingPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CandidateService from '../services/CandidateService';

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: border 0.2s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const StatusMessage = styled.p`
  margin-top: 20px;
  font-size: 1.1em;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

const BulkMessagingPage = () => {
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState([]); // Assume recipients are loaded from elsewhere
  const [status, setStatus] = useState('');

  const handleSendMessages = async () => {
    try {
      await CandidateService.sendBulkMessages(recipients, message);
      setStatus('Messages sent successfully!');
    } catch (error) {
      console.error('Error sending messages:', error);
      setStatus('Failed to send messages.');
    }
  };

  return (
    <Container>
      <Heading>Bulk Messaging</Heading>
      <TextArea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSendMessages}>Send Messages</Button>
      {status && <StatusMessage success={status.includes('success')}>{status}</StatusMessage>}
    </Container>
  );
};

export default BulkMessagingPage;
