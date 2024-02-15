import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkspacePage from './pages/WorkspacePage';
import TaskListPage from './pages/TaskListPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkspacePage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/tasklist" element={<TaskListPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* page not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
