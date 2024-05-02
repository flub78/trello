import React from 'react';

/**
 * Display a value in a table cell
 * 
 * @param {*} param0 
 * @returns 
 */
const Cell = ({ value, subtype }) => {

    if (subtype === 'boolean') {
        return (
            <div>
                {value ? <i className="fa-regular fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
            </div>
        );
    }

    return (
        <div>
            {value}
        </div>
    );
};

export default Cell;