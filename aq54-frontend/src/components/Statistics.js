import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

const StatCard = ({ icon, title, value }) => (
  <div className="bg-amber-50 p-4 rounded-lg flex items-center">
    {icon}
    <div className="ml-4">
      <h3 className="text-sm text-gray-600">{title}</h3>
      <p className="text-lg font-bold">{value}</p>
    </div>
  </div>
);

const Statistics = ({ currentValues }) => {
  const pm25Value = currentValues?.PM2_5 ?? 'N/A';

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Statistiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          icon={<TrendingUp className="text-amber-700" />}
          title="Moyenne PM2.5"
          value={`${pm25Value} µg/m³`}
        />
        <StatCard 
          icon={<Clock className="text-amber-700" />}
          title="Dernières 24 heures"
          value="Données non disponibles"
        />
        <StatCard 
          icon={<Clock className="text-amber-700" />}
          title="7 derniers jours"
          value="Données non disponibles"
        />
      </div>
    </div>
  );
};

export default Statistics;