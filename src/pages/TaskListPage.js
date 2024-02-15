import React from 'react';
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar';
import TaskListLeftPanel from '../components/TaskListLeftPanel';
import TaskListWorkspace from '../components/TaskListWorkspace';

const TaskListPage = () => {

    const { handle } = useParams()

    console.log(handle);
    return (
        <div>
            <Navbar theme="dark" />

            <section id="main-tasklist" className="container-fluid row flex-nowrap g-0" style={{ height: 'calc(100vh - 64px)' }}>
                <TaskListLeftPanel />
                <TaskListWorkspace />
            </section>
        </div>
    );
};

export default TaskListPage;