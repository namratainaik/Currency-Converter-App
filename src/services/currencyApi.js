import axios from 'axios';

const API_URL = 'https://currency-exchange.p.rapidapi.com/';
const API_HOST = 'currency-exchange.p.rapidapi.com';
const API_KEY = 'abde1bfafdmsh5f4222fef2c29a9p1514aajsnb7a4949ddc84';

export const fetchConversionRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await axios.get(`${API_URL}exchange`, {
      params: {from: fromCurrency, to: toCurrency, q: '1.0'},
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching conversion rate:', error);
    throw error;
  }
};
