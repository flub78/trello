/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import { apiServer } from '../lib/Util';
import Navbar from '../components/Navbar';
import BoardList from '../components/BoardList';
import Loading from '../components/Loading';

/**
 * React component to display the list of boards
 */
const BoardListPage = () => {

    const { t } = useTranslation(['translation', 'boards']);

    const [boardsData, setBoardsData] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    const [errorMessage, setErrorMessage] = React.useState('');

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data))
            .catch((error) => setErrorMessage(error.message
                + ': check the API server at '
                + url)
            );
    }, []);


    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <BoardList />
        </div >
    );
};

export default BoardListPage;