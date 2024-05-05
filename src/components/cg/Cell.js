import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

/**
 * Display a value in a table cell
 * 
 * @param {*} param0 
 * @returns 
 */
const Cell = ({ value, subtype, table, field }) => {

    const { t } = useTranslation(['translation', table]);

    if (subtype === 'boolean') {
        return (
            <div>
                {value ? <i className="fa-regular fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
            </div>
        );
    }

    if (subtype === 'enum') {
        return (
            <div>
                {t(table + ':' + field + '.value.' + value, value)}
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