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
                    <div class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><i
                            class="bi bi-three-dots tasklist-menu-icon"></i></a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Ajouter une carte</a></li>
                            <li><a class="dropdown-item" href="#">Déplacer</a></li>
                            <li><a class="dropdown-item" href="#">Supprimer la liste</a></li>
                        </ul>
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