import React from 'react';
import Task from './Task';


const TaskList = ({ list }) => {


    return (

        <div id="done-list" className="task-list" draggable="true" ondragstart="dragList(event)">
            <div className="list-name">
                <div>{list.name}</div>
                <div> <i className="bi bi-three-dots tasklist-menu-icon"></i>
                </div>
            </div>

            {
                list.tasks.map((task, index) => {
                    return <Task key={index} task={task} />
                })
            }

            <div className="create-task">+ Ajouter une carte <i className="bi  bi-copy create-task-icon
"></i></div>
        </div>

    );
};

export default TaskList;