import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar';
import BoardEditForm from '../components/BoardEditForm';
import BoardCreateForm from '../components/BoardCreateForm';

import { apiServer } from '../lib/Util';

/**
 * A page to edit a board
 * @returns 
 */
const BoardEditPage = () => {

    const { t } = useTranslation(['translation', 'boards']);

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

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("boards:edit_a_board")}</h3>
                    <Link to="/boards" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <BoardEditForm id={id} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BoardEditPage;