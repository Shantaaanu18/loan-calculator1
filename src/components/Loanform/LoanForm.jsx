import React from 'react';
import { TextField, Slider, Typography, Grid, Box } from '@mui/material';
import { useAppContext } from './src/context/AppContext'; 

const LoanForm = () => {
  const { loanData, setLoanData } = useAppContext();

  const handleChange = (field, value) => {
    setLoanData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Loan Amount"
            type="number"
            value={loanData.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            fullWidth
            InputProps={{ startAdornment: '$' }}
          />
          
          <Typography gutterBottom sx={{ mt: 2 }}>
            Interest Rate: {loanData.rate}%
          </Typography>
          <Slider
            value={loanData.rate}
            onChange={(_, value) => handleChange('rate', value)}
            min={1}
            max={20}
            step={0.5}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography gutterBottom>
            Loan Term: {loanData.term} months
          </Typography>
          <Slider
            value={loanData.term}
            onChange={(_, value) => handleChange('term', value)}
            min={6}
            max={60}
            step={1}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanForm;