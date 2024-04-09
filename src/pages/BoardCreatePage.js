import React from 'react';
import Navbar from '../components/Navbar';
import BoardCreateForm from '../components/BoardCreateForm';

import axios from 'axios';
import { apiServer } from '../lib/Util';
import { Link } from 'react-router-dom';

const BoardCreatePage = () => {

    const [boardsData, setBoardsData] = React.useState([]);

    /**
     * Fetch boards from the API
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

                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h3>Create board</h3>
                        <Link to="/boards" className="btn btn-sm btn-danger m-1">Back</Link>
                    </div>
                    <div class="card-body">

                        <div className="container-fluid mt-2 mw-100" style={{ overflow: 'auto', max_height: 'calc(100vh - 136px)' }}>

                            <div>
                                <BoardCreateForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default BoardCreatePage;