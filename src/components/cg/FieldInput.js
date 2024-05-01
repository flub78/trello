import React from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const FieldInput = ({ descriptor, value, onChange }) => {

    // console.log('FieldInput: descriptor=' + JSON.stringify(descriptor) + ', value=' + value);

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

    if (descriptor.subtype === 'enum') {
        return (
            <div className="d-flex">
                <label htmlFor={descriptor.field} className="form-label m-3">{descriptor.label}:</label>
                <Form.Select id={descriptor.field} defaultValue={value} onChange={onChange} value={value}>
                    {Object.keys(descriptor.values).map((key) => (
                        <option key={key} value={key} >
                            {descriptor.values[key]}
                        </option>
                    ))}
                </Form.Select>
                <div className="text-danger mt-0 mb-2">{descriptor.error}</div>
            </div>
        );
    }

    /* Default is text input */
    if (!descriptor.type || descriptor.subtype === 'string') {
        descriptor.type = 'text';
    }
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

};

export default FieldInput;