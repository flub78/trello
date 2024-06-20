import React from 'react';
import Navbar from '../components/Navbar';
import WorkspaceMain from '../components/WorkspaceMain';
import WorkspaceSidePanel from '../components/WorkspaceSidePanel';
import axios from 'axios';
import { apiServer } from '../lib/Util';

/**
 * This page displays the existing boards and allows the user to create new ones
 * @returns 
 */
const WorkspacePage = () => {

    const [boardsData, setBoardsData] = React.useState([]);

    const [errorMessage, setErrorMessage] = React.useState('');

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);
        axios.get(url)
            .then((res) => setBoardsData(res.data))
            .catch((error) => setErrorMessage(error.message + ': check the API server at '
                + apiServer + '/boards')
            );
    }, []);

    return (
        <div>

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