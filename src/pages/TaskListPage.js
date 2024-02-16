import React from 'react';
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar';
import TaskListLeftPanel from '../components/TaskListLeftPanel';
import TaskListWorkspace from '../components/TaskListWorkspace';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const TaskListPage = () => {

    // const { handle } = useParams()

    const board_name = capitalize(window.location.href.split('/').pop().replace('#', ''));

    console.log('board_page', board_name);

    return (
        <div>
            <Navbar theme="dark" />

            <section id="main-tasklist" className="container-fluid row flex-nowrap g-0" style={{ height: 'calc(100vh - 64px)' }}>
                <TaskListLeftPanel />
                <TaskListWorkspace brd={{ name: board_name }} />
            </section>
        </div>
    );
};

export default TaskListPage;