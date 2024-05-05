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
                        field: 'image',
                        subtype: 'image',
					label: t("boards:image.label", ""),
                        title: t("boards:image.title", ""),
                        placeholder: t("boards:image.placeholder", ""),
                        error: inputErrorList.image
                    }} value={formData.image} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'theme',
                        subtype: 'enum',
					label: t("boards:theme.label", ""),
                        title: t("boards:theme.title", ""),
                        placeholder: t("boards:theme.placeholder", ""),
					values: {light: t('boards:theme.light', 'light'),dark: t('boards:theme.dark', 'dark'), },
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

        </Form>
    );
};

export default BoardEditForm;