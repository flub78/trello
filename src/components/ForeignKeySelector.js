import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

import { apiServer } from '../lib/Util';

const ForeignKeySelector = ({ api, keyId, id, onChange, value, image }) => {

    const [items, setItems] = React.useState([]);

    console.log('ForeignKeySelector: api=' + api + ', keyId=' + keyId +
        ', id=' + id + ', value=' + value);

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + api;
        console.log('axios: fetching item list from ' + url);

        axios.get(url)
            .then((res) => setItems(res.data))
            .catch((error) => console.log(error.message
                + ': check the API server at '
                + url)
            );
    }, []);

    return (
        <div>
            <Form.Select
                className="form-select-inline ms-1 me-1"
                size="sm"
                onChange={onChange}
                value={value}
                id={id}>
                {items.map((item) => (
                    <option key={item[keyId]} value={item[keyId]}>{item[image]}</option>
                ))}
            </Form.Select>

        </div>
    );
};

export default ForeignKeySelector;