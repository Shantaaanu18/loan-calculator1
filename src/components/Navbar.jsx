import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box, Switch } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ mode, setMode }) => {
  const handleThemeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/exchange-rates">
              Exchange Rates (Live)
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/error">
              Error Page
            </Button>
          </Box>
          <Switch
            checked={mode === 'dark'}
            onChange={handleThemeToggle}
            color="default"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;