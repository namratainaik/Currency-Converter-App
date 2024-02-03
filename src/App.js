import React, { useState } from 'react';
import './App.css';
import ConversionResult from './components/ConversionResult';
import { fetchConversionRate } from './services/currencyApi';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD'); 
  const [toCurrency, setToCurrency] = useState('INR'); // Default target currency
  const [result, setResult] = useState('');

  // List of target currencies (excluding USD since it's the source currency)
  const currencies = ["USD","SGD","MYR","EUR","AUD","JPY","CNH","HKD","CAD","INR","DKK","GBP","RUB","NZD","MXN","IDR","TWD","THB","VND"]; // USD is the source and not listed here

  const convertCurrency = async () => {
   try {
      const rate = await fetchConversionRate(fromCurrency, toCurrency);
      const conversion = amount * rate;
      setResult(`${amount} ${fromCurrency} = ${conversion} ${toCurrency}`);
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
      setResult('Error fetching conversion rate');
    }
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
      <label className="form-label">From Currency:</label>
      <select className="form-select" value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      </div>
      <div>
      <label className="form-label">To Currency:</label>
      <select className="form-select" value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      </div>
     
      <br/>
      
      <button onClick={convertCurrency}>Convert</button>
      <br/>
      <ConversionResult result={result} />
    </div>
  );
}

export default App;
