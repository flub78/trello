/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { useTranslation } from "react-i18next";

import TagColorList from '../components/TagColorList';

/**
 * React component to display the list of tag_colors
 */
const TagColorListPage = () => {

    const { t } = useTranslation(['translation', 'tag_colors']);

    return (
        <div>
            < TagColorList />

        </div>
    );
};

export default TagColorListPage;