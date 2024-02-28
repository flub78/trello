import React from 'react';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column';

/**
 * Create list has been clicked, open the list creation panel
 * @param {*} event 
 */
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

/**
 * The user has provided a list name to create
 * @param {*} event 
 */
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

/**
 * get the correct board
 * @param {*} brdid 
 * @param {*} boardsData 
 * @returns 
 */
const boardData = (brdid, boardsData) => {
    const subarray = boardsData.filter((board) => (board.id === brdid));
    if (subarray.length > 0) {
        return subarray[0];
    }
    return null;
}

/**
 * Board React component
 * @param {*} param0 
 * @returns 
 */
const Board = ({ brdid, boardsData }) => {

    const board = boardData(brdid, boardsData);

    const background = board?.image ? 'url(/imgs/' + board.image + ') center/cover' : 'none';

    const setBackground = (background) => {
        const workspace = document.getElementById("tasklist-workspace");
        if (workspace) workspace.style.background = background;

        const navbar = document.getElementById("internal-nav");
        if (navbar) navbar.style.background = background;
    }
    setBackground(background);

    const [lists, setLists] = React.useState([]);

    const onDragEnd = result => {
        console.log('onDragEnd');
    }

    /**
     * Fetch lists from the API
     */
    React.useEffect(() => {
        const url = 'http://localhost:3000/lists?board=' + brdid;
        axios.get(url)
            .then((res) => setLists(res.data))
    }, [brdid]);

    return (
        <DragDropContext onDragEnd={onDragEnd} >

            <section id="list-main-area" className="d-flex flex-nowrap   g-0"
                style={{
                    height: 'calc(100% - 58px)'
                }}>

                {/* All the task lists */}

                {board?.lists?.map((list, index) => {
                    return <Column key={index} listid={list} brdid={brdid} />
                }
                )}

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

        </DragDropContext >

    );
};

export default Board;