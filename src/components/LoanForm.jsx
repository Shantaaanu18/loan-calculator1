import React from 'react';
import { TextField, Typography, Grid, Box } from '@mui/material';
import { useAppContext } from '../context/AppContext';

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
        {/* Three text fields side by side */}
        <Grid item xs={4}>
          <TextField
            label="Loan Amount"
            type="number"
            value={loanData.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            value={loanData.rate}
            onChange={(e) => handleChange('rate', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Term (Years)"
            type="number"
            value={loanData.term}
            onChange={(e) => handleChange('term', e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanForm;