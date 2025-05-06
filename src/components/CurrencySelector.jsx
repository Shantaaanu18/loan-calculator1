import React from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Box,
  CircularProgress
} from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useExchangeRates } from '../hooks/useExchangeRates';

const CurrencySelector = () => {
  const { currency, setCurrency } = useAppContext();
  const { rates, loading } = useExchangeRates();

  if (loading) return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CircularProgress size={24} />
    </Box>
  );

  return (
    <FormControl fullWidth size="small">
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        label="Currency"
      >
        {rates && Object.entries(rates).map(([code, rate]) => (
          <MenuItem key={code} value={code}>
            {code} - {rate.toFixed(4)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;