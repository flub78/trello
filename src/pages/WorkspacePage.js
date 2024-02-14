import React from 'react';
import Navbar from '../components/Navbar';
import WorkspaceMain from '../components/WorkspaceMain';
import WorkspaceSidePanel from '../components/WorkspaceSidePanel';

const WorkspacePage = () => {
    return (
        <div>
            <Navbar theme="light" />
            <section id="main" className="container-lg-fluid">
                <div classame="row d-flex justify-content-end" id="main-container">
                    <WorkspaceSidePanel />
                    <WorkspaceMain />
                </div>
            </section>
        </div>
    );
};

export default WorkspacePage;