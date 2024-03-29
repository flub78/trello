import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkspacePage from './pages/WorkspacePage';
import BoardPage from './pages/BoardPage';
import BoardsPage from './pages/BoardsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkspacePage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/boards" element={<BoardsPage />} />

        {/* page not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
