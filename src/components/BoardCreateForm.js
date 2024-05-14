/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FieldInput from './cg/FieldInput';
import { apiServer } from '../lib/Util';

/**
 * A form to create a board
 * @returns 
 */
const BoardCreateForm = () => {

    const { t } = useTranslation(['translation', 'boards']);

    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        email: '',
        favorite: false,
        href: '',
        image: '',
        theme: 'light',
        lists: ''
    });

    const [inputErrorList, setInputErrorList] = React.useState({});

    const navigate = useNavigate();

    const onChange = (e) => {
        e.persist?.();

        const id = e.target.id;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        console.log('onChange: id=' + id + ', value=' + value + ', type=' + type + ', checked=' + checked);

        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        });
    }

    const saveElement = (e) => {
        e.preventDefault();

        console.log('saveElement: ' + JSON.stringify(formData));

        const url = apiServer + '/boards?lang=' + i18n.language;
        console.log('axios: posting board to ' + url);

        axios.post(url, formData)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                setFormData({
                    name: '',
                    description: '',
                    email: '',
                    favorite: false,
                    href: '',
                    image: '',
                    theme: '',
                    lists: ''
                });
                navigate('/boards');
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors)
                    } else {
                        console.error("axios: error=" + error.response.data.message)
                    }
                } else {
                    console.error("unexpected axios: error=" + error.message)
                }
            })
            ;
    }

    return (
        <Form onSubmit={saveElement}>

            <Row className="align-items-center">
                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'name',
                        subtype: 'string',
                        label: t("boards:name.label", ""),
                        title: t("boards:name.title", ""),
                        placeholder: t("boards:name.placeholder", ""),
                        error: inputErrorList.name
                    }} value={formData.name} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'description',
                        subtype: 'string',
                        label: t("boards:description.label", ""),
                        title: t("boards:description.title", ""),
                        placeholder: t("boards:description.placeholder", ""),
                        error: inputErrorList.description
                    }} value={formData.description} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'email',
                        subtype: 'email',
					label: t("boards:email.label", ""),
                        title: t("boards:email.title", ""),
                        placeholder: t("boards:email.placeholder", ""),
                        error: inputErrorList.email
                    }} value={formData.email} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'favorite',
                        subtype: 'boolean',
					label: t("boards:favorite.label", ""),
                        title: t("boards:favorite.title", ""),
                        placeholder: t("boards:favorite.placeholder", ""),
                        error: inputErrorList.favorite
                    }} value={formData.favorite} onChange={onChange} />
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'href',
                        subtype: 'string',
					label: t("boards:href.label", ""),
                        title: t("boards:href.title", ""),
                        placeholder: t("boards:href.placeholder", ""),
                        error: inputErrorList.href
                    }} value={formData.href} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
					field: 'picture',
					subtype: 'string',
					label: t("boards:picture.label", ""),
					title: t("boards:picture.title", ""),
					placeholder: t("boards:picture.placeholder", ""),
					error:inputErrorList.picture
				}} value={formData.picture} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'theme',
                        subtype: 'enum',
					label: t("boards:theme.label", ""),
                        title: t("boards:theme.title", ""),
                        placeholder: t("boards:theme.placeholder", ""),
					values: { light:t('boards:theme.value.light','light'), dark:t('boards:theme.value.dark','dark'), },
                        error: inputErrorList.theme
                    }} value={formData.theme} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'lists',
                        subtype: 'csv_string',
					label: t("boards:lists.label", ""),
                        title: t("boards:lists.title", ""),
                        placeholder: t("boards:lists.placeholder", ""),
                        error: inputErrorList.lists
                    }} value={formData.lists} onChange={onChange} />
                </Col>

            </Row>


            <button type="submit" className="btn btn-primary">{t("translation:submit")}</button>
        </Form >

    );
};

export default BoardCreateForm;