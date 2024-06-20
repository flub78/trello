import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';

import { apiServer } from '../lib/Util';

const PublicLayout = () => {

    const [boardsData, setBoardsData] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState('');

    // url parameter to identify the board to edit
    let { id } = useParams();

    /**
    * Fetch boards from the API
    */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data))
            .catch((error) => setErrorMessage(error.message + ': check the API server at ' + url)
            );

    }, [id]);

    return (
        <div className="Layout">
            <Navbar theme="light" boardsData={boardsData} login={false} />

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Outlet>
                {/* The Outlet component is a placeholder for child routes */}
            </Outlet>
        </div>
    );
};

export default PublicLayout;