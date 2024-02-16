import React from 'react';
import TaskList from './TaskList';

const Board = ({ board }) => {
    return (

        <section id="list-main-area" className="d-flex overflow-auto " style={{ height: 'calc(100% - 58px)' }}
            ondrop="dropList(event)" ondragover="allowDrop(event)">

            {board.map((list, index) => {
                return <TaskList key={index} list={list} />
            })}

            <div className="tsk-list" style={{ min_width: '275px', max_width: '275px' }}>
                <div id="create-list" className="task-list bg-light p-2 ps-4  rounded"> + Ajouter une autre liste
                </div>
            </div>
        </section>
    );
};

export default Board;