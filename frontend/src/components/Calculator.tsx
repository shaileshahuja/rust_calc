import React from 'react';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator: React.FC = () => {
  const { input, result, handleButtonClick, handleClear, handleCalculate, handleReverse } = useCalculator();

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleReverse}>~</button>
      </div>
    </div>
  );
};