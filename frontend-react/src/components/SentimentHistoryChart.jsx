import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SentimentHistoryChart() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetch('/api/sentiment/history')
      .then(response => response.json())
      .then(data => setHistoryData(data));
  }, []);

  return (
    <div className="mt-6 w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Sentiment History</h3>
      <LineChart width={600} height={300} data={historyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="text" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confidence" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default SentimentHistoryChart;
