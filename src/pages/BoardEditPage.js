import React from 'react';
import Navbar from '../components/Navbar';
import BoardEditForm from '../components/BoardEditForm';

import axios from 'axios';
import { apiServer } from '../lib/Util';
import { Link, useParams } from 'react-router-dom';

/**
 * A page to edit a board
 * @returns 
 */
const BoardEditPage = () => {

    const [boardsData, setBoardsData] = React.useState([]);

    // url parameter to identify the board to edit
    let { id } = useParams();

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data));

    }, [id]);

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            <section id="main" className="container-lg-fluid">

                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h3>Edit board</h3>
                        <Link to="/boards" className="btn btn-sm btn-danger m-1">Back</Link>
                    </div>
                    <div class="card-body">

                        <div className="container-fluid mt-2 mw-100" style={{ overflow: 'auto', max_height: 'calc(100vh - 136px)' }}>

                            <div>
                                <BoardEditForm id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default BoardEditPage;