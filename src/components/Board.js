import React from 'react';
import TaskList from './TaskList';

const createList = () => {
    console.log('create list');
}

const Board = ({ board }) => {
    return (

        <section id="list-main-area" className="d-flex overflow-auto " style={{ height: 'calc(100% - 58px)' }}
            ondrop="dropList(event)" ondragover="allowDrop(event)">

            {board.map((list, index) => {
                return <TaskList key={index} list={list} />
            })}

            <div className="tsk-list" style={{ min_width: '275px', max_width: '275px' }}>
                <div className="task-list create-list p-2 ps-4  rounded"
                    onClick={createList}> + Ajouter une autre liste
                </div>
            </div>
        </section>
    );
};

export default Board;