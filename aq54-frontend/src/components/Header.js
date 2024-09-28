import React from 'react';
import { Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <span className="text-xl font-bold mr-2">◆</span>
        <h1 className="text-xl font-bold">Analyses de la Qualité de l'Air</h1>
      </div>
      <nav className="flex items-center">
        <a href="#" className="mx-2">Tableau de bord</a>
        <a href="#" className="mx-2">Carte</a>
        <a href="#" className="mx-2">Alertes</a>
        <a href="#" className="mx-2">Analyses</a>
        <button className="bg-green-500 text-white px-4 py-2 rounded ml-4">Nouveau capteur</button>
        <button className="ml-4"><Settings /></button>
      </nav>
    </header>
  );
};

export default Header;