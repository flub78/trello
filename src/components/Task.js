import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import TaskEditor from './TaskEditor';

const editTask = (event) => {
    console.log('edit task');
    event.stopPropagation();
}



const Task = ({ taskid, deleteHandler }) => {

    const [task, setTask] = React.useState([]);

    React.useEffect(() => {
        const url = 'http://localhost:3000/tasks/' + taskid;
        // console.log('fetching task from ' + url);
        axios.get(url)
            .then((res) => { res && setTask(res.data) })
            .then(response => console.log(response.data))
            .catch(error => console.error(error))
    }, [taskid]);

    const checklist_len = task.check_list ? task.check_list.length : 0;
    const check_count = task.check_list ? task.check_list.filter((item) => item.checked).length : 0;

    const deleteTask = () => {
        if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
            deleteHandler(task.id);
        }
    }

    return (

        <div className="task card m-1 flex-nowrap" >


            {/* Image */}
            {task.image ?
                <div className="container justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src={"/imgs/" + task.image} className="card-img-top" alt="welding" />
                </div>
                : ''}

            {/* Header witn name and menu button */}
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal"> {task.name} </div>
                    <div className="dropdown">
                        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                            <i className="bi bi-pencil  modif-icon m-1" onClick={editTask}></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

                            <li><a className="dropdown-item" href="#" onClick={deleteTask}>
                                <i className="bi bi-trash3 m-1" ></i>Supprimer</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="task-body" data-bs-toggle="modal" data-bs-target="#exampleModal">

                {/* Tags */}
                <div className="color-tags d-flex">
                    {task.color_tags ?
                        task.color_tags.map((tag, index) => {
                            return <div key={index} className={"color-tag " + tag}></div>
                        })
                        : ''}
                </div>

                {/* Icons line */}
                <div className="icon-line d-flex">
                    {task.description ? <i className="bi bi-text-paragraph m-1"></i> : ''}

                    {checklist_len > 0 ? <i className="bi bi-check2-square m-1"> {check_count}/{checklist_len}</i> : ''}

                    {task.watched ? <i className="bi bi-eye m-1"></i> : ''}

                    {task.comments ? <i className="bi bi-chat m-1"> {task.comments.length} </i> : ''}

                </div>
            </div>
            <TaskEditor task={task} key={task.id} />
        </div>
    );
};

export default Task;