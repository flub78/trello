/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import ChecklistItemCreateForm from '../components/ChecklistItemCreateForm';

const ChecklistItemCreatePage = () => {

    const { t } = useTranslation(['translation', 'checklist_items']);

    return (
        <div>
            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("checklist_items:create_a_checklist_item")}</h3>
                    <Link to="/checklist-items" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <ChecklistItemCreateForm />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChecklistItemCreatePage;