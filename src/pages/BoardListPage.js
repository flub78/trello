/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { useTranslation } from "react-i18next";

import BoardList from '../components/BoardList';

/**
 * React component to display the list of boards
 */
const BoardListPage = () => {

    const { t } = useTranslation(['translation', 'boards']);

    return (
        <div>
            <BoardList />
        </div >
    );
};

export default BoardListPage;