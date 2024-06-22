/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { useTranslation } from "react-i18next";

import TagList from '../components/TagList';

/**
 * React component to display the list of tags
 */
const TagListPage = () => {

    const { t } = useTranslation(['translation', 'tags']);

return (
    <div>
        < TagList />
    </div>
);
};

export default TagListPage;