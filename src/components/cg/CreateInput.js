import React from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CreateInput = ({ descriptor, value, onChange }) => {

    if (descriptor.base_type === 'varchar') {
        return (
            <div>
                <FloatingLabel
                    controlId="floatingInput"
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
            <h1>Create Input</h1>
        </div>
    );
};

export default CreateInput;