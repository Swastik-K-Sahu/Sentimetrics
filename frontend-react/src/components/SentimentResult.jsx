import React from 'react';

function SentimentResult({ result }) {
  return (
    <div className="mt-6 w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">Sentiment Analysis Result</h3>
      <p className="text-gray-700">Sentiment: <span className="font-bold text-blue-600">{result.sentiment}</span></p>
      <p className="text-gray-700">Confidence: <span className="font-bold text-green-600">{(result.confidence * 100).toFixed(2)}%</span></p>
    </div>
  );
}

export default SentimentResult;
