import React from 'react';
import Task from './Task';

const createTask = () => {
    console.log('create task');
}

const TaskList = ({ list }) => {


    return (

        <div id="done-list" className="task-list" draggable="true" ondragstart="dragList(event)">
            <div className="list-name">
                <div>{list.name}</div>
                <div>

                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-three-dots tasklist-menu-icon"></i>
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>

            {
                list.tasks.map((task, index) => {
                    return <Task key={index} task={task} />
                })
            }

            <div className="create-task" onClick={createTask}>+ Ajouter une carte <i className="bi  bi-copy create-task-icon
"></i></div>
        </div>

    );
};

export default TaskList;