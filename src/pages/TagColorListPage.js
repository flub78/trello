/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import { apiServer } from '../lib/Util';
import Navbar from '../components/Navbar';
import TagColorList from '../components/TagColorList';
import Loading from '../components/Loading';

/**
 * React component to display the list of tag_colors
 */
const TagColorListPage = () => {

    const { t } = useTranslation(['translation', 'tag_colors']);

    const [tag_colorsData, setTagColorsData] = React.useState([]);
const [loading, setLoading] = React.useState(true);

/**
 * Fetch tag_colors from the REST API
 */
React.useEffect(() => {
    const url = apiServer + '/tag_colors';
    console.log('axios: fetching tag_colors from ' + url);

    axios.get(url)
        .then((res) => setTagColorsData(res.data))
setLoading(false);
    }, []);


return (
    <div>
        <Navbar theme="light" tag_colorsData={ tag_colorsData } />
        < TagColorList />
    </div>
);
};

export default TagColorListPage;