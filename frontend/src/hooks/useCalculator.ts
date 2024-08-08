import { useState } from 'react';
import { calculateExpression, reverseExpression } from '../services/calculatorService';

export const useCalculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput(prevInput => prevInput + ' ' + value + ' ');
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = async () => {
    const calculationResult = await calculateExpression(input);
    setResult(calculationResult);
  };

  const handleReverse = async () => {
    const reverseResult = await reverseExpression(input);
    setResult(reverseResult);
  };

  return {
    input,
    result,
    handleButtonClick,
    handleClear,
    handleCalculate,
    handleReverse,
  };
};