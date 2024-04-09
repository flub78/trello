import React from 'react';
import axios from 'axios';
import { apiServer } from '../lib/Util';
import { useNavigate } from 'react-router-dom';

import CreateInput from '../components/cg/CreateInput';


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
        theme: '',
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

        <form onSubmit={saveElement}>

            <CreateInput descriptor={{
                label: 'Name',
                field: 'name',
                error: inputErrorList.name,
                base_type: 'varchar',
                icon: 'bi bi-person-fill',
                placeholder: 'e.g. My board',
                title: 'Identifier for the board'
            }} value={formData.name} onChange={onChange} />

            <CreateInput descriptor={{
                label: 'Description',
                field: 'description',
                error: inputErrorList.description,
                base_type: 'varchar',
                icon: 'fa-regular fa-comment',
                placeholder: 'e.g. My board',
                title: 'Description for the board'
            }} value={formData.description} onChange={onChange} />

            <CreateInput descriptor={{
                label: 'Email',
                field: 'email',
                error: inputErrorList.email,
                base_type: 'varchar',
                icon: 'bi bi-envelope-fill',
                placeholder: 'e.g. john@example.org',
                title: 'Type your email address'
            }} value={formData.email} onChange={onChange} />

            <label htmlFor="favorite" className="form-label">Favorite:</label>
            <div className="input-group mb-4">
                <span className="input-group-text">
                    <i className="bi bi-question-circle"></i>
                </span>
                <input type="checkbox" id="favorite" onChange={onChange} />
                <span className="input-group-text">
                    <span className="tt"
                        data-bs-placement="bottom"
                        title="Type your favorite address">
                        <i className="bi bi-question-circle"></i>
                    </span>
                </span>
            </div>
            <div className="text-danger mt-0 mb-2">{inputErrorList.favorite}</div>

            <div className="mb-3">
                <label htmlFor="href" className="form-label">Href:</label>
                <input type="text" className="form-control" id="href" onChange={onChange} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.href}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image:</label>
                <input type="text" className="form-control" id="image" onChange={onChange} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.image}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="theme" className="form-label">Theme:</label>
                <input type="text" className="form-control" id="theme" onChange={onChange} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.theme}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="lists" className="form-label">Lists:</label>
                <input type="text" className="form-control" id="lists" onChange={onChange} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.lists}</div>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    );
};

export default BoardCreateForm;