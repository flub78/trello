import React from 'react';
import Task from './Task';

/**
 * When "Ajouter une carte" button is clicked, the create task panel is displayed
 * TODO: it should close other create task panels
 * @param {*} event 
 */
const openCreateTaskPanel = (event) => {
    const target = event.target;
    const createTaskPanel = target.previousElementSibling;
    const textArea = createTaskPanel.querySelector('textarea');

    target.classList.toggle('absent');
    target.classList.toggle('present');

    createTaskPanel.classList.toggle('absent');
    createTaskPanel.classList.toggle('present');
    textArea.focus();
}

const validateCreateTask = () => {
    console.log('validate create task');
}

/**
 * When "X" button is clicked, the create task panel is hidden
 * @param {*} event 
 */
const cancelCreateTask = (event) => {
    console.log('cancel create task');
    const createTaskPanel = event.target.parentElement;
    const createTaskButton = createTaskPanel.nextElementSibling;

    createTaskButton.classList.toggle('absent');
    createTaskButton.classList.toggle('present');

    createTaskPanel.classList.toggle('absent');
    createTaskPanel.classList.toggle('present');
}

const TaskList = ({ list }) => {

    return (

        <div id="done-list" className="task-list" draggable="true" ondragstart="dragList(event)">
            <div className="list-name">
                <div>{list.name}</div>
                <div>
                    <div class="dropdown">
                        <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown"><i
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

            <div className="create-task-panel absent" >
                <textarea className="m-1 p-1 w-100" type="text" placeholder="Saisissez un titre pour cette carte..." />
                <button className="btn btn-primary m-1" onClick={validateCreateTask}>
                    Ajouter une carte</button>
                <i className="bi bi-x-lg m-1 cancel-create" onClick={cancelCreateTask}></i>
            </div>

            <div className="create-task present" onClick={openCreateTaskPanel}>
                + Ajouter une carte <i className="bi  bi-copy create-task-icon"></i>
            </div>
        </div>

    );
};

export default TaskList;