import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const [formData, setFormData] = React.useState({
    });

    const [inputErrorList, setInputErrorList] = React.useState({});

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

        const url = apiServer + '/boards/' + id;
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

        const url2 = apiServer + '/boards/' + id;
        console.log('axios: fetching board from ' + url2);

        axios.get(url2)
            .then((res) => setFormData(res.data))
    }, [id]);

    return (

        <Form onSubmit={updateElement}>

            <Row className="align-items-center">
                <Col sm={6} md={6} lg={3}>
                    <FieldInput descriptor={{
                        label: 'Name',
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
                        label: 'Description',
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
                        label: 'Email',
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
                        label: 'Favorite',
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
                        label: 'Href',
                        field: 'href',
                        type: 'text',
                        error: inputErrorList.href,
                        base_type: 'varchar',
                        title: 'Relative link to the board page .e.g. /boards/webapp',
                    }} value={formData.href} onChange={onChange} />
                </Col>

                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: 'Image',
                        field: 'image',
                        type: 'text',
                        error: inputErrorList.image,
                        base_type: 'varchar',
                        title: 'Board backgroung image',
                    }} value={formData.image} onChange={onChange} />

                </Col>

                <Col sm={4}>
                    <FieldInput descriptor={{
                        label: 'Theme',
                        field: 'theme',
                        subtype: 'enum',
                        error: inputErrorList.image,
                        values: { 'light': 'Light', 'dark': 'Dark' },
                        title: 'Board color theme',
                    }} value={formData.theme} onChange={onChange} />

                </Col>
            </Row>

            <FieldInput descriptor={{
                label: 'Lists',
                field: 'lists',
                type: 'text',
                error: inputErrorList.lists,
                base_type: 'varchar',
                title: 'List of comumns',
            }} value={formData.lists} onChange={onChange} />

            <button type="submit" className="btn btn-primary">Submit</button>

        </Form>
    );
};

export default BoardEditForm;