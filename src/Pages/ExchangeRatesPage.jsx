import React from 'react';
import { Box, Typography, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useExchangeRates } from '../hooks/useExchangeRates';

const ExchangeRatesPage = () => {
  const { rates, loading } = useExchangeRates();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell>Exchange Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates && Object.entries(rates).map(([code, rate]) => (
              <TableRow key={code}>
                <TableCell>{code}</TableCell>
                <TableCell>{rate.toFixed(4)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExchangeRatesPage;