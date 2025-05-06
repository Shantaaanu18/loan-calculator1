export const useEMICalculator = () => {
    const calculateEMI = (amount, rate, term) => {
      const monthlyRate = rate / 12 / 100;
      return amount * monthlyRate * 
        Math.pow(1 + monthlyRate, term) / 
        (Math.pow(1 + monthlyRate, term) - 1);
    };
  
    const generateSchedule = (amount, rate, term) => {
      const monthlyRate = rate / 12 / 100;
      const emi = calculateEMI(amount, rate, term);
      let balance = amount;
      const schedule = [];
  
      for (let month = 1; month <= term; month++) {
        const interest = balance * monthlyRate;
        const principal = emi - interest;
        balance -= principal;
  
        schedule.push({
          month,
          principal: parseFloat(principal.toFixed(2)),
          interest: parseFloat(interest.toFixed(2)),
          balance: parseFloat(Math.abs(balance).toFixed(2))
        });
      }
  
      return schedule;
    };
  
    return { calculateEMI, generateSchedule };
  };