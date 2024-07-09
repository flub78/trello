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
 * React component to display the list of checklists
 */
const ChecklistList = () => {

    const { t } = useTranslation(['translation', 'checklists']);

    const [checklistsData, setChecklistsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState('');

    /**
     * Fetch checklists from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/checklists';
        console.log('axios: fetching checklists from ' + url);

        axios.get(url)
            .then((res) => setChecklistsData(res.data))
            .catch((error) => setErrorMessage(error.message + ': check the API server at ' + url));
        setLoading(false);
    }, []);


    /**
     * Callback to delete a checklist
     * @param {*} e 
     * @param {*} id 
     */
    const deleteElement = (e, id) => {
        e.preventDefault();

        console.log('deleteElement: id=' + id);

        const url = apiServer + '/checklists/' + id;
        console.log('axios: deleting checklist from ' + url);

        axios.delete(url)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                const newChecklistsData = checklistsData.filter((checklist) => checklist.name !== id);
                setChecklistsData(newChecklistsData);
                window.location.reload(false);

            });
    }


    /**
     * The lines for the table body
     */
    const checklistsTable = checklistsData.map((checklist) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )

        return (
            <tr key={checklist.id} className="odd">
                <td>
                    <Link to={"/checklists/edit/" + checklist.id}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, checklist.id)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </td>
                <td> <Cell value={checklist.name} subtype="string" table="checklists" field="name"> </Cell></td>
			<td> <Cell value={checklist.description} subtype="string" table="checklists" field="description"> </Cell></td>
			<td> <Cell value={checklist.task_id} subtype="foreign_key" table="checklists" field="task_id"> </Cell></td>
			<td> <Cell value={checklist.image} subtype="image" table="checklists" field="image"> </Cell></td>


            </tr >
        );
    });

    return (


        <Card >
            <Card.Header className="card-header d-flex justify-content-between">
                <h3>{t("checklists:checklists")}</h3>
                <div>
                    <Link to="/checklists/create" className="btn btn-sm btn-primary m-1">{t("checklists:create_a_checklist")}
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
                                <th align="left">{t("checklists:name.label")}</th>
			                    <th align="left">{t("checklists:description.label")}</th>
			                    <th align="left">{t("checklists:task_id.label")}</th>
			                    <th align="left">{t("checklists:image.label")}</th>

                            </tr>
                        </thead>

                        <tbody >
                            {checklistsTable}
                        </tbody>

                        <tfoot>
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("checklists:name.label")}</th>
			                    <th align="left">{t("checklists:description.label")}</th>
			                    <th align="left">{t("checklists:task_id.label")}</th>
			                    <th align="left">{t("checklists:image.label")}</th>

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

export default ChecklistList;