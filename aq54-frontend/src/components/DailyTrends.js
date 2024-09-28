import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DailyTrends = ({ data }) => {
  const formattedData = data.map(item => ({
    date: new Date(item.timestamp).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
    pm25: item.PM2_5
  }));

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Tendances journalières</h2>
      <p className="text-lg mb-4">PM2.5</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pm25" stroke="#B45309" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyTrends;