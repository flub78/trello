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
import TagColorCreateForm from '../components/TagColorCreateForm';

import { apiServer } from '../lib/Util';

const TagColorCreatePage = () => {

    const { t } = useTranslation(['translation', 'tag_colors']);

    const [tag_colorsData, setTagColorsData] = React.useState([]);

    const [errorMessage, setErrorMessage] = React.useState('');

    /**
     * Fetch tag_colors from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/tag-colors';
        console.log('axios: fetching tag_colors from ' + url);

        axios.get(url)
            .then((res) => setTagColorsData(res.data))
            .catch((error) => setErrorMessage(error.message 
                + ': check the API server at '
                + url)
        );
    }, []);

    return (
        <div>
            <Navbar theme="light" tag_colorsData={tag_colorsData} />

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("tag_colors:create_a_tag_color")}</h3>
                    <Link to="/tag-colors" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <TagColorCreateForm />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TagColorCreatePage;