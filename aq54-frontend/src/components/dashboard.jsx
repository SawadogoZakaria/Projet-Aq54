import React, { useEffect, useState } from 'react';
import { getAllSensors, getCurrentValues } from '../services/sensorService';
import SensorInsights from './SensorInsight';
import './styles/dashboard.css';

const Dashboard = () => {
  const [sensors, setSensors] = useState([]);
  const [airQualityIndex, setAirQualityIndex] = useState(null);
  const [showInsights, setShowInsights] = useState(false);

  useEffect(() => {
    const fetchSensors = async () => {
      const data = await getAllSensors();
      setSensors(data);
    };

    fetchSensors();
  }, []);

  useEffect(() => {
    const fetchCurrentValues = async () => {
      if (sensors.length > 0) {
        const values = await getCurrentValues(sensors[0].id);
        setAirQualityIndex(values.aqi);
      }
    };

    fetchCurrentValues();
  }, [sensors]);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f0f4f8]">
      <header className="header flex items-center justify-between px-10 py-3 bg-white shadow-md">
        <h2 className="text-[#1C160C] text-lg font-bold">AQ54</h2>
        <div className="flex gap-8">
          <button className="text-[#1C160C] text-sm" onClick={() => {}}>Documentation</button>
          <button className="text-[#1C160C] text-sm" onClick={() => {}}>API de référence</button>
          <button className="text-[#1C160C] text-sm" onClick={() => {}}>Exemples</button>
          <button className="h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold rounded-xl">Aide</button>
        </div>
      </header>
      <div className="flex flex-1 justify-center items-center py-5">
        <div className="max-w-[960px] flex flex-col text-center">
          <h1 className="text-[#1C160C] text-[32px] font-bold">Bienvenue à AQ54</h1>
          <p className="text-[#1C160C] text-base pb-3 pt-1">
            L'indice de qualité de l'air (AQI) est utilisé pour communiquer à quel point l'air est pollué actuellement...
          </p>
          <h3 className="text-[#1C160C] text-lg font-bold pt-4">Accès rapide</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
            <div className="card" onClick={() => setShowInsights(true)}>
              <h2 className="text-[#1C160C] text-base font-bold">Visualisation des données</h2>
              <p className="text-[#A18249] text-sm">Une vue détaillée de l'indice de qualité de l'air à Abidjan</p>
            </div>
            <div className="card">
              <h2 className="text-[#1C160C] text-base font-bold">Gestion des utilisateurs</h2>
              <p className="text-[#A18249] text-sm">Ajouter ou supprimer des utilisateurs de votre organisation</p>
            </div>
            <div className="card">
              <h2 className="text-[#1C160C] text-base font-bold">Support</h2>
              <p className="text-[#A18249] text-sm">Obtenez de l'aide et du support pour AQ54</p>
            </div>
          </div>
          <h3 className="text-[#1C160C] text-lg font-bold pt-4">Notifications importantes</h3>
          <div className="notification">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>
            <div>
              <p className="text-[#1C160C] text-base font-medium">Alerte de qualité de l'air</p>
              <p className="text-[#A18249] text-sm">
                L'indice de qualité de l'air à Abidjan est actuellement {airQualityIndex}, ce qui est considéré comme 'modéré'.
              </p>
            </div>
          </div>
        </div>
      </div>
      {showInsights && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <button 
              className="float-right text-2xl font-bold" 
              onClick={() => setShowInsights(false)}
            >
              &times;
            </button>
            <SensorInsights />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;