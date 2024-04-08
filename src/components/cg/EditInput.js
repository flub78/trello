import React from 'react';

const EditInput = ({ descriptor, value, onChange }) => {

    if (descriptor.base_type === 'varchar') {
        return (
            <div>
                <label htmlFor={descriptor.field}
                    className="form-label mt-3">{descriptor.label + ': '}</label>
                <div className="input-group mb-4">
                    <span className="input-group-text" >
                        <i className={descriptor.icon}></i>
                    </span>
                    <input type="text"
                        className="form-control"
                        id={descriptor.field}
                        placeholder={descriptor.placeholder}
                        onChange={onChange}
                        value={value} />
                    <span className="input-group-text">
                        <span className="tt"
                            data-bs-placement="bottom"
                            title={descriptor.title}>
                            <i className="bi bi-question-circle"></i>
                        </span>
                    </span>
                </div>
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