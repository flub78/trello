import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './lib/i18n';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkspacePage from './pages/WorkspacePage';
import BoardPage from './pages/BoardPage';

import BoardListPage from './pages/BoardListPage';
import BoardCreatePage from './pages/BoardCreatePage';
import BoardEditPage from './pages/BoardEditPage';

import TagColorListPage from './pages/TagColorListPage';
import TagColorCreatePage from './pages/TagColorCreatePage';
import TagColorEditPage from './pages/TagColorEditPage';

import ColumnsListPage from './pages/ColumnListPage';
import ColumnsCreatePage from './pages/ColumnCreatePage';
import ColumnsEditPage from './pages/ColumnEditPage';

import TasksPage from './pages/TasksPage'; // Import the 'TasksPage' component
import TaskCommentsPage from './pages/TaskCommentsPage';
import DevPage from './pages/DevPage'; // Import the 'DevPage' component

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<WorkspacePage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/board/:id" element={<BoardPage />} />

        <Route path="/dev" element={<DevPage />} />

        {/* boards resource */}
        <Route path="/boards" element={<BoardListPage />} />
        <Route path="/boards/create" element={<BoardCreatePage />} />
        <Route path="/boards/edit/:id" element={<BoardEditPage />} />

        <Route path="/tag-colors" element={<TagColorListPage />} />
        <Route path="/tag-colors/create" element={<TagColorCreatePage />} />
        <Route path="/tag-colors/edit/:id" element={<TagColorEditPage />} />

        <Route path="/columns" element={<ColumnsListPage />} />
        <Route path="/columns/create" element={<ColumnsCreatePage />} />
        <Route path="/columns/edit/:id" element={<ColumnsEditPage />} />

        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task-comments" element={<TaskCommentsPage />} />

        {/* page not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  );


}

export default App;
