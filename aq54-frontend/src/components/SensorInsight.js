import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SensorInsights = () => {
  // Données factices pour les graphiques
  const dailyData = [
    { date: '1 Jan', pm25: 30 },
    { date: '10 Jan', pm25: 45 },
    { date: '20 Jan', pm25: 25 },
    { date: '30 Jan', pm25: 60 },
    { date: '10 Fév', pm25: 35 },
    { date: '20 Fév', pm25: 50 },
    { date: '28 Fév', pm25: 40 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Analyses des Capteurs</h1>
      <p className="text-lg text-amber-700 mb-6">Abidjan, Côte d'Ivoire</p>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Statistiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Moyenne PM2.5</h3>
            <p className="text-lg font-bold">6,8 µg/m³</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Dernières 24 heures</h3>
            <p className="text-lg font-bold">6,8 µg/m³</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">7 derniers jours</h3>
            <p className="text-lg font-bold">6,8 µg/m³</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Tendances journalières</h2>
        <p className="text-lg mb-4">PM2.5</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pm25" stroke="#B45309" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <p>Aucune notification pour le moment.</p>
      </div>
    </div>
  );
};

export default SensorInsights;