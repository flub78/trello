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
 * A form to edit a tag_color
 * @param {*} param0 
 * @returns 
 */
const TagColorEditForm = ({ id }) => {

    const { t } = useTranslation(['translation', 'tag_colors']);

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
        e.persist?.();

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

        const url = apiServer + '/tag-colors/' + id + '?lang=' + i18n.language;
        console.log('axios: patching tag_color to ' + url);

        axios.put(url, formData)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                setFormData({
                    name: '',
                    color: ''

                });
                navigate('/tag-colors');
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
     * Fetch tag_colors from the API
     */
    React.useEffect(() => {

        const url = apiServer + '/tag-colors/' + id + '?lang=' + i18n.language;
        console.log('axios: fetching tag_color from ' + url);

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
                        label: t("tag_colors:name.label", ""),
                        title: t("tag_colors:name.title", ""),
                        placeholder: t("tag_colors:name.placeholder", ""),
                        error: inputErrorList.name
                    }} value={formData.name} onChange={onChange} />
                </Col>

                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        field: 'color',
                        subtype: 'color',
                        label: t("tag_colors:color.label", ""),
                        title: t("tag_colors:color.title", ""),
                        placeholder: t("tag_colors:color.placeholder", ""),
                        error: inputErrorList.color
                    }} value={formData.color} onChange={onChange} />
                </Col>

            </Row>

            <button type="submit" className="btn btn-primary">{t("translation:submit")}</button>

        </Form>
    );
};

export default TagColorEditForm;