import React from 'react';
import axios from 'axios';
import { apiServer } from '../lib/Util';
import { useNavigate } from 'react-router-dom';

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

    const handleInput = (e) => {
        e.persist();

        const id = e.target.id;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        console.log('handleInput: id=' + id + ', value=' + value + ', type=' + type + ', checked=' + checked);

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

    /**
     * Fetch boards from the API
     */
    // React.useEffect(() => {
    //     const url = apiServer + '/boards';
    //     console.log('axios: fetching boards from ' + url);

    //     axios.get(url)
    //         .then((res) => setBoardsData(res.data))
    // }, []);

    return (

        <form onSubmit={saveElement}>

            <label htmlFor="name" className="form-label mt-3">Name:</label>
            <div className="input-group mb-4">
                <span className="input-group-text" onChange={handleInput}>
                    <i className="bi bi-person-fill"></i>
                </span>
                <input type="text" className="form-control" id="name" placeholder="e.g. Mario" onChange={handleInput} value={formData.name} />
                <span className="input-group-text">
                    <span className="tt"
                        data-bs-placement="bottom"
                        title="If you do not remember your name, ask your wife...">
                        <i className="bi bi-question-circle"></i>
                    </span>
                </span>
            </div>
            <div className="text-danger mt-0 mb-2">{inputErrorList.name}</div>


            <label htmlFor="description" className="form-label mt-3">Description:</label>
            <div className="input-group mb-4">
                <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                </span>
                <input type="text" className="form-control" id="description" placeholder="e.g. This is a board to ..." onChange={handleInput} value={formData.description} />
                <span className="input-group-text">
                    <span className="tt"
                        data-bs-placement="bottom"
                        title="If you do not remember your name, ask your wife...">
                        <i className="bi bi-question-circle"></i>
                    </span>
                </span>
            </div>
            <div className="text-danger mt-0 mb-2">{inputErrorList.description}</div>


            <label htmlFor="email" className="form-label">Email address:</label>
            <div className="input-group mb-4">
                <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                </span>
                <input type="email" className="form-control" id="email" onChange={handleInput}
                    placeholder="e.g. mario@example.com" />
                <span className="input-group-text">
                    <span className="tt"
                        data-bs-placement="bottom"
                        title="Type your email address">
                        <i className="bi bi-question-circle"></i>
                    </span>
                </span>
            </div>
            <div className="text-danger mt-0 mb-2">{inputErrorList.email}</div>


            <label htmlFor="favorite" className="form-label">Favorite:</label>
            <div className="input-group mb-4">
                <span className="input-group-text">
                    <i className="bi bi-question-circle"></i>
                </span>
                <input type="checkbox" id="favorite" onChange={handleInput} />
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
                <input type="text" className="form-control" id="href" onChange={handleInput} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.href}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image:</label>
                <input type="text" className="form-control" id="image" onChange={handleInput} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.image}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="theme" className="form-label">Theme:</label>
                <input type="text" className="form-control" id="theme" onChange={handleInput} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.theme}</div>

            </div>


            <div className="mb-3">
                <label htmlFor="lists" className="form-label">Lists:</label>
                <input type="text" className="form-control" id="lists" onChange={handleInput} />
                <div className="text-danger mt-0 mb-2">{inputErrorList.lists}</div>

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    );
};

export default BoardCreateForm;