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

    /**
     * Return a visible color for a background color
     * @param {*} color 
     * @returns 
     */
    const visibleColor = (background) => {
        if (!background) return 'black';
        const r = parseInt(background.substr(1, 2), 16);
        const g = parseInt(background.substr(3, 2), 16);
        const b = parseInt(background.substr(5, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

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

    if (subtype === 'color') {
        const style = {
            backgroundColor: value,
            color: visibleColor(value),
            paddingLeft: '5px',
            border: '1px solid black'
        };
        return (
            <div style={style}>
                Couleur : {value}
            </div>
        );
    }

    return (
        <div >
            {value}
        </div >
    );
};

export default Cell;