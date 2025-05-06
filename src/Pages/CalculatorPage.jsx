import React from 'react';
import { Button, Paper, Typography, Grid, Container } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useEMICalculator } from '../hooks/useEMICalculator';
import LoanForm from '../components/LoanForm';
import AmortizationTable from '../components/AmortizationTable';
import CurrencySelector from '../components/CurrencySelector';

const CalculatorPage = () => {
  const { loanData, updateResults, reset, results, currency } = useAppContext();
  const { calculateEMI, generateSchedule } = useEMICalculator();

  const handleCalculate = () => {
    const emi = calculateEMI(loanData.amount, loanData.rate, loanData.term);
    const schedule = generateSchedule(loanData.amount, loanData.rate, loanData.term);
    updateResults(emi, schedule);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Loan EMI Calculator
      </Typography>

      <LoanForm />

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            onClick={handleCalculate}
            fullWidth
            size="large"
          >
            Calculate
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Button
            variant="outlined"
            onClick={reset}
            fullWidth
            size="large"
          >
            Reset
          </Button>
        </Grid>
        <Grid xs={12} md={6}>
          <CurrencySelector />
        </Grid>
      </Grid>

      {results?.emi > 0 && (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Loan Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Monthly Payment</Typography>
              <Typography variant="h5" color="primary">
                {currency} {results.emi.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}

      {results?.schedule?.length > 0 && (
        <AmortizationTable schedule={results.schedule} currency={currency} />
      )}
    </Container>
  );
};

export default CalculatorPage;