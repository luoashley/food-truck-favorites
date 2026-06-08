import React from 'react';
import './App.css';
import Header from './components/Header';
import TruckCard from './components/TruckCard';
import trucks from './trucksData';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="grid">
        {trucks.map((truck) => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </main>
    </div>
  );
}

export default App;
