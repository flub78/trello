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

import FieldInput from '../components/cg/FieldInput';
import { apiServer } from '../lib/Util';

/**
 * A form to edit a board
 * @param {*} param0 
 * @returns 
 */
const BoardEditForm = ({ id }) => {

    const { t } = useTranslation(['translation', 'boards']);

    const [formData, setFormData] = React.useState({
    });

    const [inputErrorList, setInputErrorList] = React.useState({});

    const [errorMessage, setErrorMessage] = React.useState('');

    const navigate = useNavigate();

    /**
     * Set an object property value by path (string)
     * @param {*} obj 
     * @param {*} value 
     * @param {*} path 
     */
    function setDeepValue(obj, value, path) {
        if (typeof path === "string") {
            var path = path.split('.');
        }

        if (path.length > 1) {
            var p = path.shift();
            if (obj[p] == null || typeof obj[p] !== 'object') {
                obj[p] = {};
            }
            setDeepValue(obj[p], value, path);
        } else {
            obj[path[0]] = value;
        }
    }

    /**
     * Update the state each time the user types something in the form
     * @param {*} e 
     */
    const onChange = (e) => {
        e.persist();

        const id = e.target.id;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        console.log('onChange: id=' + id + ', value=' + value + ', type=' + type + ', checked=' + checked);

        let fd = { ...formData };

        setDeepValue(fd, type === 'checkbox' ? checked : value, id);

        // setFormData({
        //     ...formData,
        //     [id]: type === 'checkbox' ? checked : value
        // });
        console.log('onChange updated: formData=' + JSON.stringify(fd));
        // console.log(e);
        setFormData(fd);
    }

    /**
     * Save the element on submit
     * @param {*} e 
     */
    const updateElement = (e) => {
        e.preventDefault();

        console.log('updateElement: ' + JSON.stringify(formData));

        const url = apiServer + '/boards/' + id + '?lang=' + i18n.language;
        console.log('axios: patching board to ' + url);

        axios.put(url, formData)
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
                    }
                    if (error.response.status === 419) {
                        console.error("axios: error=" + error.response.data.message)
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

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {

        const url = apiServer + '/boards/' + id + '?lang=' + i18n.language;
        console.log('axios: fetching board from ' + url);

        axios.get(url)
            .then((res) => setFormData(res.data))
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });
    }, [id]);

    return (

        <Form onSubmit={updateElement}>

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Row className="align-items-center">
                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        label: t("boards:name"),
                        field: 'name',
                        subtype: 'string',
                        error: inputErrorList.name,
                        icon: 'bi bi-person-fill',
                        placeholder: 'e.g. My board',
                        title: 'Identifier for the board'
                    }} value={formData.name} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        label: t("boards:description"),
                        field: 'description',
                        type: 'text',
                        error: inputErrorList.description,
                        icon: 'fa-regular fa-comment',
                        placeholder: 'e.g. My board',
                        title: 'Description for the board'
                    }} value={formData.description} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        label: t("boards:email"),
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
                        label: t("boards:favorite"),
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
                        label: t("boards:href"),
                        field: 'href',
                        type: 'text',
                        error: inputErrorList.href,
                        title: 'Relative link to the board page .e.g. /boards/webapp',
                    }} value={formData.href} onChange={onChange} />
                </Col>

                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: t("boards:image"),
                        field: 'image',
                        type: 'text',
                        error: inputErrorList.image,
                        title: 'Board backgroung image',
                    }} value={formData.image} onChange={onChange} />

                </Col>

                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: t("boards:theme"),
                        field: 'theme',
                        subtype: 'enum',
                        error: inputErrorList.image,
                        values: { 'light': 'Light', 'dark': 'Dark' },
                        title: 'Board color theme',
                    }} value={formData.theme} onChange={onChange} />

                </Col>
            </Row>

            <FieldInput descriptor={{
                label: t("boards:lists"),
                field: 'lists',
                type: 'text',
                error: inputErrorList.lists,
                title: 'List of comumns',
            }} value={formData.lists} onChange={onChange} />

            <button type="submit" className="btn btn-primary">{t("translation:submit")}</button>

        </Form>
    );
};

export default BoardEditForm;