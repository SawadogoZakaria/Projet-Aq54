import React from 'react';
import { AlertCircle } from 'lucide-react';

const NotificationItem = ({ message, details, daysAgo }) => (
  <div className="flex items-center justify-between bg-amber-50 p-4 rounded-lg mb-4">
    <div className="flex items-center">
      <AlertCircle className="text-amber-700 mr-4" />
      <div>
        <h3 className="font-bold">{message}</h3>
        <p className="text-sm text-gray-600">{details}</p>
      </div>
    </div>
    <p className="text-sm text-gray-600">{daysAgo} jours</p>
  </div>
);

const Notifications = ({ status }) => {
  const notifications = status?.offlineSensors?.map(sensor => ({
    message: "Capteur hors ligne",
    details: `Le capteur ${sensor.id} est hors ligne depuis le ${new Date(sensor.lastOnline).toLocaleDateString('fr-FR')}`,
    daysAgo: Math.floor((new Date() - new Date(sensor.lastOnline)) / (1000 * 60 * 60 * 24))
  })) || [];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))
      ) : (
        <p>Aucune notification pour le moment.</p>
      )}
    </div>
  );
};

export default Notifications;