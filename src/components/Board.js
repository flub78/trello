import React from 'react';
import axios from 'axios';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Column from './Column';
import { closeAllPanels, apiServer } from '../lib/Util';


const Container = styled.div`
    display: flex;
        `;

/**
  * get the correct board
  * @param {*} brdid 
  * @param {*} boardsData 
  * @returns 
  */
const boardData = (brdid, boardsData) => {
    if (!boardsData) return null;
    console.log('boardData', brdid, boardsData);

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
        const url = apiServer + '/columns?board=' + brdid;
        console.log('axios: fetching lists from ' + url);
        axios.get(url)
            .then((res) => setLists(res.data))
    }, [brdid]);

    /**
     * Save the board
     */
    const saveBoard = () => {
        const url = apiServer + '/boards/' + board.id;
        console.log('axios: updating board ' + url);
        console.log('board ', board);
        axios.put(url, board)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }

    /**
     * Create list has been clicked, open the list creation panel
     * @param {*} event 
     */
    const openCreateListPanel = (event) => {
        console.log('open create list panel');

        closeAllPanels();
        const target = event.target;
        const createListPanel = target.previousElementSibling;
        const textArea = createListPanel.querySelector('textarea');

        target.classList.toggle('absent');
        target.classList.toggle('present');

        createListPanel.classList.toggle('absent');
        createListPanel.classList.toggle('present');
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
            const newList = {
                name: name,
                tasks: [],
                board: board.id
            }
            console.log("new list: ", newList);
            const url = apiServer + '/columns';
            console.log('axios: creating list ' + url);
            axios.post(url, newList).then((res) => {
                console.log('list created: ' + res.data.id);
                textArea.value = '';
                closeAllPanels();
                board.lists.push(res.data.id);

                // set(list); // should trigger a rerender ???

                // Save the board state
                saveBoard();
                window.location.reload();
            });

        } else {
            // console.log('list name is empty');
            // nothing to do
        }
    }

    /**
     * When "X" button is clicked, the create task panel is hidden
     * @param {*} event 
     */
    const cancelCreateList = (event) => {
        const createListPanel = event.target.parentElement;
        const createListButton = createListPanel.nextElementSibling;

        createListButton.classList.toggle('absent');
        createListButton.classList.toggle('present');

        closeAllPanels();
    }

    /**
     * Remove a list from the board
     * @param {*} listid
     * @returns
     */
    const removeListFromBoard = (listid) => {
        const url = apiServer + '/bords/' + brdid
        board.lists = board.lists.filter((id) => id !== listid);

        saveBoard();
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <Droppable
                droppableId="all-columns"
                direction="horizontal"
                type="column">
                {(provided) => (
                    <Container
                        // add the ref to the provided.innerRef
                        {...provided.droppableProps}
                        ref={provided.innerRef}>

                        <section id="list-main-area" className="d-flex flex-nowrap   g-0"
                            style={{
                                height: 'calc(100% - 58px)'
                            }}>

                            {/* All the task lists */}

                            {board?.lists?.map((list, index) => {
                                return <Column key={index} listid={list} brdid={brdid} removeListFromBoard={removeListFromBoard} index={index} />
                            }
                            )}

                            {/* Create list button */}
                            <div className="tsk-list" style={{ min_width: '275px', max_width: '275px' }}>

                                <div className="task-list create-task-panel absent" >
                                    <textarea className="m-1 p-1 rounded" id="list-name-input" type="text" placeholder="Saisissez le titre de la liste..." />
                                    <button className="btn btn-primary m-1" onClick={validateCreateList}>
                                        Ajouter une liste</button>
                                    <i className="bi bi-x-lg m-1 cancel-create" onClick={cancelCreateList}></i>
                                </div>

                                <div id="create-list" className="task-list create-list p-2 ps-4  rounded present"
                                    onClick={openCreateListPanel}> + Ajouter une autre liste
                                </div>
                            </div>
                        </section>

                        {provided.placeholder}
                    </Container>
                )}

            </Droppable>
        </DragDropContext>



    );
};

export default Board;