import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loanData, setLoanData] = useState({
    amount: 1000,
    rate: 8.5,
    term: 12
  });
  const [currency, setCurrency] = useState('USD');
  const [themeMode, setThemeMode] = useState('light');
  
  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <AppContext.Provider value={{
      loanData,
      setLoanData,
      currency,
      setCurrency,
      themeMode,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);