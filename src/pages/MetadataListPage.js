/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { useTranslation } from "react-i18next";

import MetadataList from '../components/MetadataList';

/**
 * React component to display the list of metadatas
 */
const MetadataListPage = () => {

    const { t } = useTranslation(['translation', 'metadatas']);

return (
    <div>
        < MetadataList />
    </div>
);
};

export default MetadataListPage;