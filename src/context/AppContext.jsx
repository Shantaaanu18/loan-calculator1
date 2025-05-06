import { createContext, useContext, useState } from 'react';
import React from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialLoanData = {
    amount: 100000,
    rate: 8.5,
    term: 12,
  };
  const initialResults = { emi: 0, schedule: [] };
  const initialCurrency = 'USD';

  const [loanData, setLoanData] = useState(initialLoanData);
  const [results, setResults] = useState(initialResults);
  const [currency, setCurrency] = useState(initialCurrency);

  const updateLoanData = (field, value) => {
    setLoanData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateResults = (emi, schedule) => {
    setResults({ emi, schedule });
  };

  const reset = () => {
    setLoanData(initialLoanData);
    setResults(initialResults);
    setCurrency(initialCurrency);
  };

  return (
    <AppContext.Provider
      value={{
        loanData,
        setLoanData,
        updateLoanData, // Expose the function
        results,
        updateResults,
        currency,
        setCurrency,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

const ResetButton = () => {
  const { reset } = useAppContext();

  return (
    <button onClick={reset}>
      Reset
    </button>
  );
};



export default ResetButton;