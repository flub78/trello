import React from 'react';
import EditInput from '../components/cg/EditInput';

import axios from 'axios';
import { apiServer } from '../lib/Util';
import { useNavigate } from 'react-router-dom';

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

        <form onSubmit={updateElement}>

            <EditInput descriptor={{
                label: 'Name',
                field: 'name',
                error: inputErrorList.name,
                base_type: 'varchar',
                icon: 'bi bi-person-fill',
                placeholder: 'e.g. My board',
                title: 'Identifier for the board'
            }} value={formData.name} onChange={onChange} />

            <EditInput descriptor={{
                label: 'Description',
                field: 'description',
                error: inputErrorList.description,
                base_type: 'varchar',
                icon: 'fa-regular fa-comment',
                placeholder: 'e.g. My board',
                title: 'Description for the board'
            }} value={formData.description} onChange={onChange} />

            <EditInput descriptor={{
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

                <input type="checkbox"
                    id="favorite"
                    onChange={onChange}
                    value={formData.favorite}
                    checked={formData.favorite}
                />
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
                <input type="text" className="form-control" id="href" onChange={onChange} value={formData.href} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.href}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image:</label>
                <input type="text" className="form-control" id="image" onChange={onChange} value={formData.image} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.image}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="theme" className="form-label">Theme:</label>
                <input type="text" className="form-control" id="theme" onChange={onChange} value={formData.theme} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.theme}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="lists" className="form-label">Lists:</label>
                <input type="text" className="form-control" id="lists" onChange={onChange} value={formData.lists} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.lists}</div>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default BoardEditForm;