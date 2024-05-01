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
import TagColorEditForm from '../components/TagColorEditForm';
import TagColorCreateForm from '../components/TagColorCreateForm';

import { apiServer } from '../lib/Util';

/**
 * A page to edit a tag_color
 * @returns 
 */
const TagColorEditPage = () => {

    const { t } = useTranslation(['translation', 'tag_colors']);

    const [tag_colorsData, setTagColorsData] = React.useState([]);

    // url parameter to identify the tag_color to edit
    let { id } = useParams();

    /**
     * Fetch tag_colors from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/tag-colors';
        console.log('axios: fetching tag_colors from ' + url);

        axios.get(url)
            .then((res) => setTagColorsData(res.data));

    }, [id]);

    return (
        <div>
            <Navbar theme="light" tag_colorsData={tag_colorsData} />

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("tag_colors:edit_a_tag_color")}</h3>
                    <Link to="/tag-colors" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <TagColorEditForm id={id} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TagColorEditPage;