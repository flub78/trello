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
 * A form to create a tag_color
 * @returns 
 */
const TagColorCreateForm = () => {

    const { t } = useTranslation(['translation', 'tag_colors']);

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
        e.persist();

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

        const url = apiServer + '/tag_colors?lang=' + i18n.language;
        // const url = apiServer + '/tag_colors';
        console.log('axios: posting tag_color to ' + url);

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
                navigate('/tag_colors');
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors)
                    }
                    if (error.response.status === 500) {
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
                        label: t("tag_colors:name"),
                        field: 'name',
                        subtype: 'string',
                        error: inputErrorList.name,
                        icon: 'bi bi-person-fill',
                        placeholder: 'e.g. My tag_color',
                        title: 'Identifier for the tag_color'
                    }} value={formData.name} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        label: t("tag_colors:description"),
                        field: 'description',
                        type: 'text',
                        error: inputErrorList.description,
                        icon: 'fa-regular fa-comment',
                        placeholder: 'e.g. My tag_color',
                        title: 'Description for the tag_color'
                    }} value={formData.description} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        label: t("tag_colors:email"),
                        field: 'email',
                        type: 'email',
                        error: inputErrorList.email,
                        icon: 'bi bi-envelope-fill',
                        placeholder: 'e.g. john@example.org',
                        title: 'Type your email address'
                    }} value={formData.email} onChange={onChange} />
                </Col>

                <Col sm={4} md={6} lg={2} >
                    <FieldInput descriptor={{
                        label: t("tag_colors:favorite"),
                        field: 'favorite',
                        type: 'checkbox',
                        error: inputErrorList.favorite,
                        subtype: 'boolean',
                    }} value={formData.favorite} onChange={onChange} />
                </Col>
            </Row>

            <Row>
                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: t("tag_colors:href"),
                        field: 'href',
                        type: 'text',
                        error: inputErrorList.href,
                        title: 'Relative link to the tag_color page .e.g. /tag_colors/webapp',
                    }} value={formData.href} onChange={onChange} />
                </Col>

                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: t("tag_colors:image"),
                        field: 'image',
                        type: 'text',
                        error: inputErrorList.image,
                        title: 'TagColor backgroung image',
                    }} value={formData.image} onChange={onChange} />

                </Col>

                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: t("tag_colors:theme"),
                        field: 'theme',
                        subtype: 'enum',
                        error: inputErrorList.image,
                        values: { 'light': 'Light', 'dark': 'Dark' },
                        title: 'TagColor color theme',
                    }} value={formData.image} onChange={onChange} />

                </Col>
            </Row>

            <FieldInput descriptor={{
                label: t("tag_colors:lists"),
                field: 'lists',
                type: 'text',
                error: inputErrorList.lists,
                title: 'List of comumns',
            }} value={formData.lists} onChange={onChange} />

            <button type="submit" className="btn btn-primary">{t("translation:submit")}</button>
        </Form >

    );
};

export default TagColorCreateForm;