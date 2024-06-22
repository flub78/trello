/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import TagCreateForm from '../components/TagCreateForm';

const TagCreatePage = () => {

    const { t } = useTranslation(['translation', 'tags']);

    return (
        <div>
            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("tags:create_a_tag")}</h3>
                    <Link to="/tags" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <TagCreateForm />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TagCreatePage;