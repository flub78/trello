import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Task from './Task';
import { closeAllPanels, apiServer } from '../lib/Util';


const Container = styled.div`
        // margin: 8px;
        // border: 1px solid lightgrey;
        // border-radius: 2px;
        // width: 220px;
        // font-family: Arial, Helvetica, sans-serif;
        // display: flex;
        // flex-direction: column;
        `;

const TaskList = styled.div`
        // padding: 8px;
        background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
        // flex-grow: 1;
        // min-height: 100px;
        `;


const Column = ({ listid, brdid, removeListFromBoard, index }) => {

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
        const url = apiServer + '/lists/' + listid;
        // console.log('fetching list from ' + url);
        axios.get(url)
            .then((res) => setList(res.data))
    }, [listid, list]);

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
        const url = apiServer + '/lists/' + listid;
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
            const url = apiServer + '/tasks';
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

    /**
     * Delete task from the list
     */
    const deleteTaskFromList = (taskid) => {
        console.log('delete task ' + taskid);
        if (!taskid) return;

        const url = apiServer + '/tasks/' + taskid;
        axios.delete(url)
            .then((res) => {
                console.log('task deleted: ' + taskid);
                const newTasks = list.tasks.filter((task) => task !== taskid);
                console.log('new tasks ', newTasks);
                //setList({ ...list, tasks: newTasks });
                list.tasks = newTasks;
                saveList();
                window.location.reload();
            });
    }

    const deleteList = () => {
        console.log('delete list ' + listid);
        if (!listid) return;

        if (window.confirm("Voulez-vous vraiment supprimer cette liste ?")) {
            const url = apiServer + '/lists/' + listid;

            list.tasks.forEach((task) => {
                axios.delete(apiServer + '/tasks/' + task);
            });

            axios.delete(url)
                .then((res) => {
                    console.log('list deleted: ' + listid);
                    window.location.reload();
                });
            removeListFromBoard(listid);
        }
    }


    return (
        <Draggable
            draggableId={listid}
            index={index}>
            {(provided) => {
                return (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="task-list"
                    >
                        <div className="list-name">
                            <div {...provided.dragHandleProps} >{list.name}</div>
                            <div>
                                <div className="dropdown">
                                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown"><i
                                        className="bi bi-three-dots tasklist-menu-icon"></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Ajouter une carte</a></li>
                                        <li><a className="dropdown-item" href="#">Déplacer</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={deleteList} >Supprimer la liste</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Droppable droppableId={listid} type="task">
                            {(provided, snapshot) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    {...provided.droppableProps}>

                                    {list?.tasks?.map((task, index) => {
                                        return (
                                            <Task taskid={task} key={task} deleteHandler={deleteTaskFromList} index={index} />
                                        );
                                    })}
                                    {provided.placeholder}
                                </TaskList>
                            )
                            }
                        </Droppable>



                        <div className="create-task-panel absent" >
                            <textarea className="m-1 p-1 w-100 rounded" type="text" placeholder="Saisissez un titre pour cette carte..." />
                            <button className="btn btn-primary m-1" onClick={validateCreateTask}>
                                Ajouter une carte</button>
                            <i className="bi bi-x-lg m-1 cancel-create" onClick={cancelCreateTask}></i>
                        </div>

                        <div className="create-task present" onClick={openCreateTaskPanel}>
                            + Ajouter une carte <i className="bi  bi-copy create-task-icon"></i>
                        </div>


                    </Container>
                );
            }}
        </Draggable >
    );
};

export default Column;