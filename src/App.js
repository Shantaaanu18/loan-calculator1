import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import CalculatorPage from './Pages/CalculatorPage';
import ExchangeRatesPage from './Pages/ExchangeRatesPage';
import ErrorPage from './Pages/ErrorPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  const [mode, setMode] = useState('light'); // State to manage theme mode

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1976d2' },
            secondary: { main: '#9c27b0' },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
          }
        : {
            primary: { main: '#90caf9' },
            secondary: { main: '#ce93d8' },
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
          }),
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  const theme = createTheme(getDesignTokens(mode));

  return (
    <AppProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar mode={mode} setMode={setMode} /> {/* Pass mode and setMode */}
          <Routes>
            <Route path="/" element={<CalculatorPage />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </AppProvider>
  );
};

export default App;