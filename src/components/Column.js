import React from 'react';
import axios from 'axios';
import Task from './Task';

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
    }, [listid, list]);

    /**
     * Close all create task panels
     */
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

    /**
     * Save the list
     */
    const saveList = () => {
        const url = 'http://localhost:3000/lists/' + listid;
        console.log('updating list ' + url);
        console.log('list ', list);
        axios.put(url, list)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }

    /**
     * Create a task in the list
     * @param {*} event 
     */
    const validateCreateTask = (event) => {
        const parent = event.target.parentElement;
        const textArea = parent.querySelector('textarea');
        const name = textArea.value;

        if (name.length > 0) {
            console.log('create task with name ' + name);
            // Persist the task to the API
            const url = 'http://localhost:3000/tasks';
            axios.post(url, {
                name: name,
                list: listid
            }).then((res) => {
                console.log('task created: ' + res.data.id);
                textArea.value = '';
                closeAllPanels();
                //setList({ ...list, tasks: [...list.tasks, res.data.id] });
                list.tasks.push(res.data.id);
                setList(list); // should trigger a rerender ???

                // Save the list state
                saveList();
            });


        } else {
            // console.log('task name is empty');
            // nothing to do
        }
    }

    /**
     * Delete task from the list
     */
    const deleteTask = (taskid) => {
        console.log('delete task ' + taskid);
        const url = 'http://localhost:3000/tasks/' + taskid;
        axios.delete(url)
            .then((res) => {
                console.log('task deleted: ' + taskid);
                const newTasks = list.tasks.filter((task) => task !== taskid);
                setList({ ...list, tasks: newTasks });
                saveList();
            });
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
                    <Task taskid={task} key={task} />
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