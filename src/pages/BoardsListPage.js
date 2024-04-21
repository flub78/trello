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
const BoardsListPage = () => {

    const { t } = useTranslation(['translation', 'boards']);

    const [boardsData, setBoardsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    /**
     * Fetch boards from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data))
        setLoading(false);
    }, []);


    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />
            <BoardList />
        </div >
    );
};

export default BoardsListPage;