import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { apiServer } from '../lib/Util';

const ColumnsPage = () => {

    const [boardsData, setBoardsData] = React.useState([]);

    /**
     * Fetch columns from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);
        axios.get(url)
            .then((res) => setBoardsData(res.data))
    }, []);

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            <section id="main" className="container-lg-fluid">
                <div classame="row d-flex justify-content-end" id="main-container">

                    <h1>Columns Page</h1>
                </div>
            </section>
        </div>
    );
};

export default ColumnsPage;