import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import CalculatorPage from './Pages/CalculatorPage';
import ErrorPage from './Pages/ErrorPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode palette
            primary: { main: '#1976d2' },
            secondary: { main: '#9c27b0' },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
          }
        : {
            // Dark mode palette
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

  return (
    <AppProvider>
      <Router>
        <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<CalculatorPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </AppProvider>
  );
};

export default App;