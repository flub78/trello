import React from 'react';
import axios from 'axios';
import Task2 from './Task2';

const Column = ({ listid, brdid }) => {

    const [list, setList] = React.useState([]);

    /**
     * Fetch list from the API
     * {
     *  "id": "3",
     *  "board": "webapp",
     *  "name": "Done",
     *  "tasks": ["6", "7"]
     * }
     */
    React.useEffect(() => {
        const url = 'http://localhost:3000/lists/' + listid;
        // console.log('fetching list from ' + url);
        axios.get(url)
            .then((res) => setList(res.data))
    }, [listid]);

    const closeAllPanels = () => {
        const collection = document.getElementsByClassName("create-task-panel");
        for (let element of collection) {
            element.classList.add('absent');
            element.classList.remove('present');
        }
    }

    /**
     * When "Ajouter une carte" button is clicked, the create task panel is displayed
     * @param {*} event 
     */
    const openCreateTaskPanel = (event) => {
        const target = event.target;
        const createTaskPanel = target.previousElementSibling;
        const textArea = createTaskPanel.querySelector('textarea');

        closeAllPanels();

        target.classList.toggle('absent');
        target.classList.toggle('present');

        createTaskPanel.classList.toggle('absent');
        createTaskPanel.classList.toggle('present');
        textArea.focus();
    }

    const validateCreateTask = (event) => {
        const parent = event.target.parentElement;
        const textArea = parent.querySelector('textarea');
        const name = textArea.value;

        if (name.length > 0) {
            console.log('create task with name ' + name);
        } else {
            // console.log('task name is empty');
            // nothing to do
        }
    }

    /**
     * When "X" button is clicked, the create task panel is hidden
     * @param {*} event 
     */
    const cancelCreateTask = (event) => {
        const createTaskPanel = event.target.parentElement;
        const createTaskButton = createTaskPanel.nextElementSibling;

        createTaskButton.classList.toggle('absent');
        createTaskButton.classList.toggle('present');

        createTaskPanel.classList.toggle('absent');
        createTaskPanel.classList.toggle('present');
    }

    return (

        <div className="task-list">

            <div className="list-name">
                <div>{list.name}</div>
                <div>
                    <div className="dropdown">
                        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown"><i
                            className="bi bi-three-dots tasklist-menu-icon"></i></a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Ajouter une carte</a></li>
                            <li><a className="dropdown-item" href="#">Déplacer</a></li>
                            <li><a className="dropdown-item" href="#">Supprimer la liste</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {list?.tasks?.map((task) => {
                return (
                    <Task2 taskid={task} key={task} />
                );
            })}

            <div className="create-task-panel absent" >
                <textarea className="m-1 p-1 w-100 rounded" type="text" placeholder="Saisissez un titre pour cette carte..." />
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

export default Column;