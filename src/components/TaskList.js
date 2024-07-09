/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import { apiServer } from '../lib/Util';
import Loading from './Loading';
import Cell from '../components/cg/Cell';
import PerPageSelector from '../components/PerPageSelector';
import PaginationBloc from './PaginationBloc';

/**
 * React component to display the list of tasks
 */
const TaskList = () => {

    const { t } = useTranslation(['translation', 'tasks']);

    const [tasksData, setTasksData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState('');

    /**
     * Fetch tasks from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/tasks';
        console.log('axios: fetching tasks from ' + url);

        axios.get(url)
            .then((res) => setTasksData(res.data))
            .catch((error) => setErrorMessage(error.message + ': check the API server at ' + url));
        setLoading(false);
    }, []);


    /**
     * Callback to delete a task
     * @param {*} e 
     * @param {*} id 
     */
    const deleteElement = (e, id) => {
        e.preventDefault();

        console.log('deleteElement: id=' + id);

        const url = apiServer + '/tasks/' + id;
        console.log('axios: deleting task from ' + url);

        axios.delete(url)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                const newTasksData = tasksData.filter((task) => task.name !== id);
                setTasksData(newTasksData);
                window.location.reload(false);

            });
    }


    /**
     * The lines for the table body
     */
    const tasksTable = tasksData.map((task) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )

        return (
            <tr key={task.id} className="odd">
                <td>
                    <Link to={"/tasks/edit/" + task.id}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, task.id)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </td>
                <td> <Cell value={task.name} subtype="string" table="tasks" field="name"> </Cell></td>
			<td> <Cell value={task.description} subtype="text" table="tasks" field="description"> </Cell></td>
			<td> <Cell value={task.column_id} subtype="foreign_key" table="tasks" field="column_id"> </Cell></td>
			<td> <Cell value={task.due_date} subtype="date" table="tasks" field="due_date"> </Cell></td>
			<td> <Cell value={task.completed} subtype="boolean" table="tasks" field="completed"> </Cell></td>
			<td> <Cell value={task.href} subtype="string" table="tasks" field="href"> </Cell></td>
			<td> <Cell value={task.favorite} subtype="boolean" table="tasks" field="favorite"> </Cell></td>
			<td> <Cell value={task.watched} subtype="boolean" table="tasks" field="watched"> </Cell></td>
			<td> <Cell value={task.image} subtype="image" table="tasks" field="image"> </Cell></td>


            </tr >
        );
    });

    return (


        <Card >
            <Card.Header className="card-header d-flex justify-content-between">
                <h3>{t("tasks:tasks")}</h3>
                <div>
                    <Link to="/tasks/create" className="btn btn-sm btn-primary m-1">{t("tasks:create_a_task")}
                    </Link>

                    <Button variant="primary" size="sm" className="me-1">CSV</Button>
                    <Button variant="primary" size="sm">PDF</Button>
                </div>
            </Card.Header>

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Card.Body>
                <Container fluid>
                    <Form className='d-flex justify-content-between align-items-center'>
                        <PerPageSelector />

                        <div className='d-flex'>
                            <Form.Control type="text" placeholder="Rechercher" className="mb-2" />
                        </div>
                    </Form>

                    <Table striped bordered hover size="sm" responsive>

                        <thead className="thead-dark">
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("tasks:name.label")}</th>
			                    <th align="left">{t("tasks:description.label")}</th>
			                    <th align="left">{t("tasks:column_id.label")}</th>
			                    <th align="left">{t("tasks:due_date.label")}</th>
			                    <th align="left">{t("tasks:completed.label")}</th>
			                    <th align="left">{t("tasks:href.label")}</th>
			                    <th align="left">{t("tasks:favorite.label")}</th>
			                    <th align="left">{t("tasks:watched.label")}</th>
			                    <th align="left">{t("tasks:image.label")}</th>

                            </tr>
                        </thead>

                        <tbody >
                            {tasksTable}
                        </tbody>

                        <tfoot>
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("tasks:name.label")}</th>
			                    <th align="left">{t("tasks:description.label")}</th>
			                    <th align="left">{t("tasks:column_id.label")}</th>
			                    <th align="left">{t("tasks:due_date.label")}</th>
			                    <th align="left">{t("tasks:completed.label")}</th>
			                    <th align="left">{t("tasks:href.label")}</th>
			                    <th align="left">{t("tasks:favorite.label")}</th>
			                    <th align="left">{t("tasks:watched.label")}</th>
			                    <th align="left">{t("tasks:image.label")}</th>

                            </tr>
                        </tfoot>
                    </Table>

                    <div className="d-flex justify-content-between m-1">
                        <div>
                            Affichage de l'élement 1 à 16 sur 16 éléments
                        </div>

                        <PaginationBloc />

                    </div>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default TaskList;