import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Workspace from './pages/Workspace';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="/about" element={<About />} />

        {/* page not found */}
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
