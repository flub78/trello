import React from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const EditInput = ({ descriptor, value, onChange }) => {

    if (descriptor.subtype === 'boolean') {
        return (
            <div>
                <Form.Check
                    type={descriptor.type}
                    label={descriptor.label}
                    id={descriptor.field}
                    checked={value}
                    onChange={onChange}
                />
                <div className="text-danger mt-0 mb-2">{descriptor.error}</div>
            </div>
        );
    }

    if (descriptor.base_type === 'varchar') {
        return (
            <div>
                <FloatingLabel
                    label={descriptor.label}
                    className="mb-3"
                >
                    <Form.Control type={descriptor.type}
                        title={descriptor.title}
                        id={descriptor.field}
                        placeholder={descriptor.placeholder}
                        onChange={onChange}
                        value={value} />
                </FloatingLabel>
                <div className="text-danger mt-0 mb-2">{descriptor.error}</div>
            </div>
        );
    }

    return (
        <div>
            <h1>Edit Input {descriptor.name}</h1>
        </div>
    );
};

export default EditInput;