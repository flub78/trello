/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import MetadataEditForm from '../components/MetadataEditForm';

/**
 * A page to edit a metadata
 * @returns 
 */
const MetadataEditPage = () => {

    const { t } = useTranslation(['translation', 'metadatas']);

    // url parameter to identify the metadata to edit
    let { id } = useParams();

    return (
        <div>

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("metadatas:edit_a_metadata")}</h3>
                    <Link to="/metadata" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <MetadataEditForm id={id} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MetadataEditPage;