import axios from 'axios';

interface CalculateRequest {
  expression: string;
}

interface CalculateResponse {
  result: string;
}

interface ReverseResponse {
  result: string;
}

export const calculateExpression = async (expression: string): Promise<string> => {
  try {
    const response = await axios.post<CalculateResponse>('http://localhost:3001/calculate', { expression: expression.trim() });
    return response.data.result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.result;
    }
    return 'An unexpected error occurred';
  }
};


export const reverseExpression = async (expression: string): Promise<string> => {
    try {
      const response = await axios.post<ReverseResponse>('http://localhost:3001/reverse', { expression: expression.trim() });
      return response.data.result;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data.result;
      }
      return 'An unexpected error occurred';
    }
  };