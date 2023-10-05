import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HouseList from './components/HouseList';
import HouseModal from './components/HouseModal';

function App() {
  const [houses, setHouses] = useState([]);

  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleHouseClick = (house) => {
    setSelectedHouse(house);
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HouseList houses={houses} onHouseClick={handleHouseClick} />
      {selectedHouse && (
        <HouseModal property={selectedHouse} onClose={() => setSelectedHouse(null)} />
      )}
    </div>
  );
}

export default App;
