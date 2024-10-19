import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#00C49F', '#FF8042', '#0088FE'];

function SentimentChart({ data }) {
  return (
    <div className="mt-6 w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Sentiment Breakdown</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default SentimentChart;
