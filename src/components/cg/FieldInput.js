import React from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ColorPicker from '../ColorPicker';



const type_from_subtype = (subtype) => {
    if (subtype === 'boolean') {
        return 'checkbox';
    } else if (subtype === 'enum') {
        return 'select';
    } else if (subtype === 'email') {
        return 'email';
    }
    return 'text';
}


const FieldInput = ({ descriptor, value, onChange }) => {

    const type = type_from_subtype(descriptor.subtype);

    const [color, setColor] =
        React.useState((descriptor.subtype === 'color') ? value : '');


    if (descriptor.subtype === 'boolean') {
        return (
            <div>
                <Form.Check
                    type={type}
                    label={descriptor.label}
                    id={descriptor.field}
                    checked={value}
                    onChange={onChange}
                />
                <div className="text-danger mt-0 mb-2">{descriptor.error}</div>
            </div>
        );
    }

    if (descriptor.subtype === 'color') {
        return (
            <div>
                <FloatingLabel
                    label={descriptor.label}
                    className="mb-3"
                >
                    <Form.Control type={type}
                        title={descriptor.title}
                        id={descriptor.field}
                        placeholder={descriptor.placeholder}
                        onChange={onChange}
                        value={value || ''} />
                </FloatingLabel>
                <ColorPicker color={value} onChange={onChange} id={descriptor.field} />
                <div className="text-danger mt-0 mb-2">{descriptor.error}</div>
            </div>
        );

    }

    if (descriptor.subtype === 'enum') {
        return (
            <div className="d-flex">
                <label htmlFor={descriptor.field} className="form-label m-3">{descriptor.label}:</label>
                <Form.Select id={descriptor.field} onChange={onChange} value={value}>
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
    return (
        <div>
            <FloatingLabel
                label={descriptor.label}
                className="mb-3"
            >
                <Form.Control type={type}
                    title={descriptor.title}
                    id={descriptor.field}
                    placeholder={descriptor.placeholder}
                    onChange={onChange}
                    value={value || ''} />
            </FloatingLabel>
            <div className="text-danger mt-0 mb-2">{descriptor.error}</div>
        </div>
    );

};

export default FieldInput;