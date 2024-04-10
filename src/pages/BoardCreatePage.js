import React from 'react';
import Navbar from '../components/Navbar';
import BoardCreateForm from '../components/BoardCreateForm';

import axios from 'axios';
import { apiServer } from '../lib/Util';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>Create a board</h3>
                    <Link to="/boards" className="btn btn-sm btn-danger m-1">Back</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <BoardCreateForm />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BoardCreatePage;