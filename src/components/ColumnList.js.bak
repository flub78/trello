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
 * React component to display the list of columns
 */
const ColumnList = () => {

    const { t } = useTranslation(['translation', 'columns']);

    const [columnsData, setColumnsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    /**
     * Fetch columns from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/columns';
        console.log('axios: fetching columns from ' + url);

        axios.get(url)
            .then((res) => setColumnsData(res.data))
            .catch((error) => console.error(error));
        setLoading(false);
    }, []);


    /**
     * Callback to delete a column
     * @param {*} e 
     * @param {*} id 
     */
    const deleteElement = (e, id) => {
        e.preventDefault();

        console.log('deleteElement: id=' + id);

        const url = apiServer + '/columns/' + id;
        console.log('axios: deleting column from ' + url);

        axios.delete(url)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                const newColumnsData = columnsData.filter((column) => column.name !== id);
                setColumnsData(newColumnsData);
                window.location.reload(false);

            });
    }


    /**
     * The lines for the table body
     */
    const columnsTable = columnsData.map((column) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )

        return (
            <tr key={column.id} className="odd">
                <td>
                    <Link to={"/columns/edit/" + column.id}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, column.id)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </td>
                <td> <Cell value={column.name} subtype="string" table="columns" field="name"> </Cell></td>
			<td> <Cell value={column.board_id} subtype="string" table="columns" field="board_id"> </Cell></td>
			<td> <Cell value={column.tasks} subtype="csv_string" table="columns" field="tasks"> </Cell></td>


            </tr >
        );
    });

    return (


        <Card >
            <Card.Header className="card-header d-flex justify-content-between">
                <h3>{t("columns:columns")}</h3>
                <div>
                    <Link to="/columns/create" className="btn btn-sm btn-primary m-1">{t("columns:create_a_column")}
                    </Link>

                    <Button variant="primary" size="sm" className="me-1">CSV</Button>
                    <Button variant="primary" size="sm">PDF</Button>
                </div>
            </Card.Header>

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
                                <th align="left">{t("columns:name.label")}</th>
			                    <th align="left">{t("columns:board_id.label")}</th>
			                    <th align="left">{t("columns:tasks.label")}</th>

                            </tr>
                        </thead>

                        <tbody >
                            {columnsTable}
                        </tbody>

                        <tfoot>
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("columns:name.label")}</th>
			                    <th align="left">{t("columns:board_id.label")}</th>
			                    <th align="left">{t("columns:tasks.label")}</th>

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

export default ColumnList;