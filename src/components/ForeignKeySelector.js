import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

import { apiServer } from '../lib/Util';

const ForeignKeySelector = ({ api, keyId }) => {

    const [items, setItems] = React.useState([]);

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
            ForeignKeySelector {api} {keyId}

            <Form.Select className="form-select-inline ms-1 me-1" size="sm" >
                {items.map((item) => (
                    <option key={item.id} value={item.id}>{item.image}</option>
                ))}
            </Form.Select>

        </div>
    );
};

export default ForeignKeySelector;