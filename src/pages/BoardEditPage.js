import React from 'react';
import Navbar from '../components/Navbar';
import EditInput from '../components/cg/EditInput';

import axios from 'axios';
import { apiServer } from '../lib/Util';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BoardEditPage = () => {

    const [boardsData, setBoardsData] = React.useState([]);

    let { id } = useParams();

    const [formData, setFormData] = React.useState({
    });

    const [inputErrorList, setInputErrorList] = React.useState({});

    const navigate = useNavigate();

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
    const handleInput = (e) => {
        e.persist();

        const id = e.target.id;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        console.log('handleInput: id=' + id + ', value=' + value + ', type=' + type + ', checked=' + checked);

        let fd = { ...formData };

        setDeepValue(fd, type === 'checkbox' ? checked : value, id);

        // setFormData({
        //     ...formData,
        //     [id]: type === 'checkbox' ? checked : value
        // });
        console.log('handleInput updated: formData=' + JSON.stringify(fd));
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
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data));

        const url2 = apiServer + '/boards/' + id;
        console.log('axios: fetching board from ' + url2);

        axios.get(url2)
            .then((res) => setFormData(res.data))
    }, [id]);

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            <section id="main" className="container-lg-fluid">

                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h3>Edit board</h3>
                        <Link to="/boards" className="btn btn-sm btn-danger m-1">Back</Link>
                    </div>
                    <div class="card-body">

                        <div className="container-fluid mt-2 mw-100" style={{ overflow: 'auto', max_height: 'calc(100vh - 136px)' }}>

                            <div>
                                <form onSubmit={updateElement}>



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

                                    <EditInput descriptor={{
                                        label: 'Name React',
                                        field: 'name',
                                        error: inputErrorList.name,
                                        base_type: 'varchar'
                                    }} formData={formData} handleInput={handleInput} />

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
                                            placeholder="e.g. mario@example.com" value={formData.email} />
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

                                        <input type="checkbox"
                                            id="favorite"
                                            onChange={handleInput}
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
                                        <input type="text" className="form-control" id="href" onChange={handleInput} value={formData.href} />
                                        <div className="text-danger mt-0 mb-2">{inputErrorList.href}</div>

                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Image:</label>
                                        <input type="text" className="form-control" id="image" onChange={handleInput} value={formData.image} />
                                        <div className="text-danger mt-0 mb-2">{inputErrorList.image}</div>

                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="theme" className="form-label">Theme:</label>
                                        <input type="text" className="form-control" id="theme" onChange={handleInput} value={formData.theme} />
                                        <div className="text-danger mt-0 mb-2">{inputErrorList.theme}</div>

                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="lists" className="form-label">Lists:</label>
                                        <input type="text" className="form-control" id="lists" onChange={handleInput} value={formData.lists} />
                                        <div className="text-danger mt-0 mb-2">{inputErrorList.lists}</div>

                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default BoardEditPage;