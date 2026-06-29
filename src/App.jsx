import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage/IndustriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;