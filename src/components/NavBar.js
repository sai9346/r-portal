// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Navbar container
const NavBarContainer = styled.nav`
  background-color: #343a40;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Nav items wrapper
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

// Logo
const Logo = styled(Link)`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

// Nav links
const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      color: #007bff;
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavWrapper>
        <Logo to="/">Recruiter Portal</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/job-postings">Job Postings</Link>
          <Link to="/candidate-search">Candidates</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/interview-scheduling">Interviews</Link>
        </NavLinks>
      </NavWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
