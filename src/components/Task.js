import React from 'react';

const Task = ({ task }) => {
    return (
        <div className="task card m-1 flex-nowrap" draggable="true">
            <div className="container justify-content-center align-items-center">
                <img src={"/imgs/" + task.image} className="card-img-top" alt="welding" />
            </div>

            <div className="card-header">
                <div className="d-flex">
                    <div> {task.name}</div>
                    <i className="bi bi-pencil  modif-icon m-1"></i>
                </div>
            </div>
            <div className="task-body">
                {/* <p className="card-text">{task.description}</p> */}

                <div className="color-tags d-flex">
                    {task.color_tags ?
                        task.color_tags.map((tag, index) => {
                            return <div key={index} className={"color-tag " + tag}></div>
                        })
                        : ''}
                </div>

                <div className="icon-line d-flex">
                    {task.description ? <i className="bi bi-text-paragraph m-1"></i> : ''}

                    <i className="bi bi-check2-square m-1"> 2/5</i>

                    {task.watched ? <i className="bi bi-eye m-1"></i> : ''}

                    {task.comments ? <i className="bi bi-chat m-1"> {task.comments.length} </i> : ''}

                </div>
            </div>
        </div>

    );
};

export default Task;