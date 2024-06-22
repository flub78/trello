/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import { useTranslation } from "react-i18next";

import TaskList from '../components/TaskList';

/**
 * React component to display the list of tasks
 */
const TaskListPage = () => {

    const { t } = useTranslation(['translation', 'tasks']);

return (
    <div>
        < TaskList />
    </div>
);
};

export default TaskListPage;