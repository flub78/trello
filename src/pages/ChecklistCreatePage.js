/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import ChecklistCreateForm from '../components/ChecklistCreateForm';

const ChecklistCreatePage = () => {

    const { t } = useTranslation(['translation', 'checklists']);

    return (
        <div>
            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>{t("checklists:create_a_checklist")}</h3>
                    <Link to="/checklists" className="btn btn-sm btn-danger m-1">{t("translation:back")}</Link>
                </Card.Header>

                <Card.Body>
                    <div>
                        <ChecklistCreateForm />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChecklistCreatePage;