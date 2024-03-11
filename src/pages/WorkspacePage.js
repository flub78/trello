import React from 'react';
import Navbar from '../components/Navbar';
import WorkspaceMain from '../components/WorkspaceMain';
import WorkspaceSidePanel from '../components/WorkspaceSidePanel';
import axios from 'axios';
import { apiServer } from '../lib/Util';

const WorkspacePage = () => {

    const [boardsData, setBoardsData] = React.useState([]);

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        axios.get(url)
            .then((res) => setBoardsData(res.data))
    }, []);

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            <section id="main" className="container-lg-fluid">
                <div classame="row d-flex justify-content-end" id="main-container">
                    <WorkspaceSidePanel />
                    <WorkspaceMain boardsData={boardsData} />
                </div>
            </section>
        </div>
    );
};

export default WorkspacePage;