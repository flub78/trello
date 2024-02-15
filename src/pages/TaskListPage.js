import React from 'react';
import Navbar from '../components/Navbar';
import WorkspaceSidePanel from '../components/WorkspaceSidePanel';

const TaskListPage = () => {
    return (
        <div>
            <Navbar theme="dark" />
            <section id="main" className="container-lg-fluid">
                <div classame="row d-flex justify-content-end" id="main-container">
                    Task List
                </div>
            </section>
        </div>
    );
};

export default TaskListPage;