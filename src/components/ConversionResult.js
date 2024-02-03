import React from 'react';

function ConversionResult({ result }) {
  return (
    <div className="card bg-light ">
      <h2 className="text-center">Conversion Result</h2>
      {result && <p className="text-center">{result}</p>}
    </div>
  );
}

export default ConversionResult;
