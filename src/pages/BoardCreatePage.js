/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar';
import BoardCreateForm from '../components/BoardCreateForm';

import { apiServer } from '../lib/Util';

const BoardCreatePage = () => {

    const { t } = useTranslation(['translation', 'boards']);

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
            .catch((error) => setErrorMessage(error.message
                + ': check the API server at '
                + url)
            );
    }, []);

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("boards:create_a_board")}</h3>
                    <Link to="/boards" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
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