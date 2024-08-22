import React from 'react';
import { Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function WelcomeBoard() {
  return (
    <Container 
      fluid 
      className='mt-4 mb-5 d-flex justify-content-center align-items-center' 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        animation: `${fadeInUp} 1s ease-out`
      }}
    >
      <div id="WelcomeBoard">
        <Typography variant="h1" sx={{ mb: 2 }}>
          Hello, Welcome to Pakai!
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Check out the <u>navigation bar</u> to explore our website's features!
        </Typography>
        <Typography variant="h2">
          Happy shopping!
        </Typography>
      </div>
    </Container>
  );
}

export default WelcomeBoard;
