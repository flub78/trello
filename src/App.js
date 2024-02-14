import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkspacePage from './pages/WorkspacePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkspacePage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/tasklist" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* page not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
