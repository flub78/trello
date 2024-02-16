import React from 'react';
import TaskList from './TaskList';


const Board = ({ board }) => {
    return (
        <div>
            {board.map((list, index) => {
                return <TaskList key={index} list={list} />
            })}
        </div>

    );
};

export default Board;