/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar';
import ColumnEditForm from '../components/ColumnEditForm';
import ColumnCreateForm from '../components/ColumnCreateForm';

import { apiServer } from '../lib/Util';

/**
 * A page to edit a column
 * @returns 
 */
const ColumnEditPage = () => {

    const { t } = useTranslation(['translation', 'columns']);

    const [columnsData, setColumnsData] = React.useState([]);

    const [errorMessage, setErrorMessage] = React.useState('');

    // url parameter to identify the column to edit
    let { id } = useParams();

    /**
     * Fetch columns from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/columns';
        console.log('axios: fetching columns from ' + url);

        axios.get(url)
            .then((res) => setColumnsData(res.data))
            .catch((error) => setErrorMessage(error.message + ': check the API server at ' + url)
            );

    }, [id]);

    return (
        <div>
            <Navbar theme="light" columnsData={columnsData} />

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("columns:edit_a_column")}</h3>
                    <Link to="/columns" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <ColumnEditForm id={id} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ColumnEditPage;