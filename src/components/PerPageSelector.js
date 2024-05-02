import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";


const PerPageSelector = () => {

    const { t } = useTranslation(['translation', 'boards']);

    return (

        <div className='d-flex'>
            {t('display')}
            <Form.Select className="form-select-inline ms-1 me-1" size="sm" defaultValue="25">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </Form.Select>
            {t('elements')}
        </div>
    );
};

export default PerPageSelector;