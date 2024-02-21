import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';

const openCreateListPanel = (event) => {
    console.log('open create list panel');

    const target = event.target;
    const createTaskPanel = target.previousElementSibling;
    const textArea = createTaskPanel.querySelector('textarea');

    target.classList.toggle('absent');
    target.classList.toggle('present');

    createTaskPanel.classList.toggle('absent');
    createTaskPanel.classList.toggle('present');
    textArea.focus();
}

const validateCreateList = (event) => {
    const parent = event.target.parentElement;
    const textArea = parent.querySelector('textarea');
    const name = textArea.value;

    if (name.length > 0) {
        console.log('create list with name ' + name);
    } else {
        // console.log('task name is empty');
        // nothing to do
    }
}

/**
 * When "X" button is clicked, the create task panel is hidden
 * @param {*} event 
 */
const cancelCreateList = (event) => {
    const createTaskPanel = event.target.parentElement;
    const createTaskButton = createTaskPanel.nextElementSibling;

    createTaskButton.classList.toggle('absent');
    createTaskButton.classList.toggle('present');

    createTaskPanel.classList.toggle('absent');
    createTaskPanel.classList.toggle('present');
}

const Board = ({ board, board_name }) => {

    console.log('Board component');
    console.log(board_name.toLowerCase());
    console.log(board);
    const [lists, setLists] = React.useState([]);

    /**
     * Fetch lists from the API
     */
    React.useEffect(() => {
        const url = 'http://localhost:3000/lists?board=' + board_name.toLowerCase();
        console.log('url = ' + url);
        axios.get(url)
            .then((res) => setLists(res.data))
    }, [board_name]);

    console.log("Lists:");
    console.log(lists);

    return (

        <section id="list-main-area" className="d-flex overflow-auto " style={{ height: 'calc(100% - 58px)' }}
            ondrop="dropList(event)" ondragover="allowDrop(event)">

            {/* All the task lists */}
            {board.map((list, index) => {
                return <TaskList key={index} list={list} />
            })}

            {/* Create list button */}
            <div className="tsk-list" style={{ min_width: '275px', max_width: '275px' }}>

                <div className="task-list create-task-panel absent" >
                    <textarea className="m-1 p-1 rounded" id="list-name-input" type="text" placeholder="Saisissez le titre de la liste..." />
                    <button className="btn btn-primary m-1" onClick={validateCreateList}>
                        Ajouter une list</button>
                    <i className="bi bi-x-lg m-1 cancel-create" onClick={cancelCreateList}></i>
                </div>

                <div className="task-list create-list p-2 ps-4  rounded present"
                    onClick={openCreateListPanel}> + Ajouter une autre liste
                </div>
            </div>

        </section>
    );
};

export default Board;