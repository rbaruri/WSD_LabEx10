import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HouseList from './components/HouseList';
import Search from './components/Search';

function App() {
   return (
    <div className="app">
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/myapp/src/components/HouseList.jsx" element={<HouseList/>}/>
      </Routes>
    </div>
  );
}

export default App;
