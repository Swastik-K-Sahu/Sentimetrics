import React, { useState } from 'react';
import SentimentForm from './components/SentimentForm';
import SentimentResult from './components/SentimentResult';
import SentimentChart from './components/SentimentChart';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const handleResult = (data) => {
    setResult(data);
    // Update chart data
    const updatedChartData = [
      { name: 'Positive', value: data.sentiment === 'positive' ? data.confidence : 0 },
      { name: 'Negative', value: data.sentiment === 'negative' ? data.confidence : 0 },
      { name: 'Neutral', value: data.sentiment === 'neutral' ? data.confidence : 0 }
    ];
    setChartData(updatedChartData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">AI-Powered Sentiment Dashboard</h1>
      <SentimentForm onResult={handleResult} />
      {result && <SentimentResult result={result} />}
      {chartData.length > 0 && <SentimentChart data={chartData} />}
    </div>
  );
}

export default App;
