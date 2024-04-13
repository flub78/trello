import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CreateInput from '../components/cg/CreateInput';
import { apiServer } from '../lib/Util';

/**
 * A form to create a board
 * @returns 
 */
const BoardCreateForm = () => {

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

        const url = apiServer + '/boards';
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
                    <CreateInput descriptor={{
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
                    <CreateInput descriptor={{
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
                    <CreateInput descriptor={{
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
                    <CreateInput descriptor={{
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
                    <CreateInput descriptor={{
                        label: 'Href',
                        field: 'href',
                        type: 'text',
                        error: inputErrorList.href,
                        base_type: 'varchar',
                        title: 'Relative link to the board page .e.g. /boards/webapp',
                    }} value={formData.href} onChange={onChange} />
                </Col>

                <Col sm={4}>
                    <CreateInput descriptor={{
                        label: 'Image',
                        field: 'image',
                        type: 'text',
                        error: inputErrorList.image,
                        base_type: 'varchar',
                        title: 'Board backgroung image',
                    }} value={formData.image} onChange={onChange} />

                </Col>

                <Col sm={4}>
                    <CreateInput descriptor={{
                        label: 'Theme',
                        field: 'theme',
                        subtype: 'enum',
                        error: inputErrorList.image,
                        values: { 'light': 'Light', 'dark': 'Dark' },
                        title: 'Board color theme',
                    }} value={formData.image} onChange={onChange} />

                </Col>
            </Row>

            <CreateInput descriptor={{
                label: 'Lists',
                field: 'lists',
                type: 'text',
                error: inputErrorList.lists,
                base_type: 'varchar',
                title: 'List of comumns',
            }} value={formData.lists} onChange={onChange} />

            <button type="submit" className="btn btn-primary">Submit</button>
        </Form >

    );
};

export default BoardCreateForm;