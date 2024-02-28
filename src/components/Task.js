import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

const editTask = (event) => {
    console.log('edit task');
    event.stopPropagation();
}

const openTask = () => {
    console.log('open task');
}

const Task2 = ({ taskid }) => {

    const [task, setTask] = React.useState([]);

    React.useEffect(() => {
        const url = 'http://localhost:3000/tasks/' + taskid;
        // console.log('fetching task from ' + url);
        axios.get(url)
            .then((res) => setTask(res.data))
    }, [taskid]);

    const checklist_len = task.check_list ? task.check_list.length : 0;
    const check_count = task.check_list ? task.check_list.filter((item) => item.checked).length : 0;

    return (
        // TODO: draggableId = { props.task.id } index = { props.index }
        // <Draggable >
        //     {(provided, snapshot) => (
        //         <div className="task card m-1 flex-nowrap" onClick={openTask}>

        //             {task.image ?
        //                 <div className="container justify-content-center align-items-center">
        //                     <img src={"/imgs/" + task.image} className="card-img-top" alt="welding" />
        //                 </div>
        //                 : ''}

        //             <div className="card-header">
        //                 <div className="d-flex">
        //                     <div> {task.name}</div>
        //                     <div className="dropdown">
        //                         <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
        //                             <i className="bi bi-pencil  modif-icon m-1" onClick={editTask}></i>
        //                         </a>
        //                         <ul className="dropdown-menu">
        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-card-image m-1"></i> Ouvrir la carte</a></li>

        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-tag m-1"></i>Modifier les étiquettes</a></li>

        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-people m-1"></i>Modifier les membres</a></li>

        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-card-image m-1"></i> Modifier la couverture</a></li>

        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-arrow-right m-1"></i>Déplacer</a></li>

        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-copy m-1"></i>Copier</a></li>

        //                             <li><a className="dropdown-item" href="#">
        //                                 <i className="bi bi-trash3 m-1"></i>Supprimer</a></li>

        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="task-body">
        //                 {/* <p className="card-text">{task.description}</p> */}

        //                 <div className="color-tags d-flex">
        //                     {task.color_tags ?
        //                         task.color_tags.map((tag, index) => {
        //                             return <div key={index} className={"color-tag " + tag}></div>
        //                         })
        //                         : ''}
        //                 </div>

        //                 <div className="icon-line d-flex">
        //                     {task.description ? <i className="bi bi-text-paragraph m-1"></i> : ''}

        //                     {checklist_len > 0 ? <i className="bi bi-check2-square m-1"> {check_count}/{checklist_len}</i> : ''}

        //                     {task.watched ? <i className="bi bi-eye m-1"></i> : ''}

        //                     {task.comments ? <i className="bi bi-chat m-1"> {task.comments.length} </i> : ''}

        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </Draggable>

        <div className="task card m-1 flex-nowrap" onClick={openTask}>

            {task.image ?
                <div className="container justify-content-center align-items-center">
                    <img src={"/imgs/" + task.image} className="card-img-top" alt="welding" />
                </div>
                : ''}

            <div className="card-header">
                <div className="d-flex">
                    <div> {task.name}</div>
                    <div className="dropdown">
                        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                            <i className="bi bi-pencil  modif-icon m-1" onClick={editTask}></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-card-image m-1"></i> Ouvrir la carte</a></li>

                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-tag m-1"></i>Modifier les étiquettes</a></li>

                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-people m-1"></i>Modifier les membres</a></li>

                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-card-image m-1"></i> Modifier la couverture</a></li>

                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-arrow-right m-1"></i>Déplacer</a></li>

                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-copy m-1"></i>Copier</a></li>

                            <li><a className="dropdown-item" href="#">
                                <i className="bi bi-trash3 m-1"></i>Supprimer</a></li>

                        </ul>
                    </div>
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

                    {checklist_len > 0 ? <i className="bi bi-check2-square m-1"> {check_count}/{checklist_len}</i> : ''}

                    {task.watched ? <i className="bi bi-eye m-1"></i> : ''}

                    {task.comments ? <i className="bi bi-chat m-1"> {task.comments.length} </i> : ''}

                </div>
            </div>
        </div>
    );
};

export default Task2;