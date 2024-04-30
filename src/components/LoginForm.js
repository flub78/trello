import React from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import Form from 'react-bootstrap/Form';

import FieldInput from './cg/FieldInput';
import { apiServer } from '../lib/Util';

/**
 * A form to edit a board
 * @param {*} param0 
 * @returns 
 */
const LoginForm = ({ id }) => {

    const { t } = useTranslation(['translation', 'boards']);

    const [formData, setFormData] = React.useState({
    });

    const login = (e) => {
        e.preventDefault();

        const url = apiServer + '/login';
        console.log('axios: login to ' + url);

        axios.post(url, formData)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
            })
            .catch(error => console.error(error));
    };

    return (

        <Form onSubmit={login} className="d-flex flex-column justify-content-center">

            <Form.Select className="mt-3" aria-label="Default select example">
                <option>Organization</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Control className="mt-3" type="text" placeholder={t("translation:email")} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />

            <Form.Control className="mt-3" type="password" placeholder={t("translation:password")} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

            <button type="submit" className="btn btn-primary m-3">{t("translation:submit")}</button>

        </Form>
    );
};

export default LoginForm;