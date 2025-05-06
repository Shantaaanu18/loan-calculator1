import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Something went wrong
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We encountered an unexpected error.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
      >
        Return to Calculator
      </Button>
    </Box>
  );
};

export default ErrorPage;