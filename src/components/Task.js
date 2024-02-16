import React from 'react';

const Task = ({ task }) => {
    return (
        <div className="task card m-1 flex-nowrap" draggable="true">
            <div className="container justify-content-center align-items-center">
                <img src={"/imgs/" + task.image} className="card-img-top" alt="welding" />
            </div>

            <div className="card-header">
                <div className="d-flex">
                    <div> {task.description}</div>
                    <i className="bi bi-pencil  modif-icon m-1"></i>
                </div>
            </div>
            <div className="task-body">
                <div className="color-tags d-flex">
                    <div className="color-tag bg-warning"></div>
                </div>
                <div className="icon-line d-flex">
                    <i className="bi bi-text-paragraph m-1"></i>
                    <i className="bi bi-check2-square m-1"> 2/5</i>
                    <i className="bi bi-eye m-1"></i>
                    <i className="bi bi-chat m-1">3</i>
                </div>
            </div>
        </div>

    );
};

export default Task;