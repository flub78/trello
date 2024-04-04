import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkspacePage from './pages/WorkspacePage';
import BoardPage from './pages/BoardPage';
import BoardsListPage from './pages/BoardsListPage';
import BoardCreatePage from './pages/BoardCreatePage';
import ColumnsPage from './pages/ColumnsPage';
import TasksPage from './pages/TasksPage'; // Import the 'TasksPage' component
import TaskCommentsPage from './pages/TaskCommentsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkspacePage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/boards" element={<BoardsListPage />} />
        <Route path="/boards/create" element={<BoardCreatePage />} />
        <Route path="/columns" element={<ColumnsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task-comments" element={<TaskCommentsPage />} />

        {/* page not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
