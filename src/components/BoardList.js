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
 * React component to display the list of boards
 */
const BoardList = () => {

    const { t } = useTranslation(['translation', 'boards']);

    const [boardsData, setBoardsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    /**
     * Fetch boards from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data))
            .catch((error) => console.error(error));
        setLoading(false);
    }, []);


    /**
     * Callback to delete a board
     * @param {*} e 
     * @param {*} id 
     */
    const deleteElement = (e, id) => {
        e.preventDefault();

        console.log('deleteElement: id=' + id);

        const url = apiServer + '/boards/' + id;
        console.log('axios: deleting board from ' + url);

        axios.delete(url)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                const newBoardsData = boardsData.filter((board) => board.name !== id);
                setBoardsData(newBoardsData);
            });
    }


    /**
     * The lines for the table body
     */
    const boardsTable = boardsData.map((board) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )

        return (
            <tr key={board.id} className="odd">
                <td>
                    <Link to={"/boards/edit/" + board.name}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, board.name)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </td>
                <td> <Cell value="{board.name}" subtype="string" > </Cell></td>
                <td> <Cell value="{board.description}" subtype="string" > </Cell></td>
                <td> <Cell value="{board.email}" subtype="email" > </Cell></td>
                <td> <Cell value="{board.favorite}" subtype="boolean"></Cell></td>
                <td> <Cell value="{board.href}" subtype="string" > </Cell></td>
                <td> <Cell value="{board.image}" subtype="image" > </Cell></td>
                <td> <Cell value="{board.theme}" subtype="enum" > </Cell></td>
                <td> <Cell value="{board.lists}" subtype="csv_string" > </Cell></td>


            </tr >
        );
    });

    return (

        <Card >

            <Card.Header className="card-header d-flex justify-content-between">
                <h3>{t("boards:boards")}</h3>
                <div>
                    <Link to="/boards/create" className="btn btn-sm btn-primary m-1">{t("boards:create_a_board")}
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
                                <th align="left">{t("boards:name")}</th>
                                <th align="left">{t("boards:description")}</th>
                                <th align="left">{t("boards:email")}</th>
                                <th align="left">{t("boards:favorite")}</th>
                                <th align="left">{t("boards:href")}</th>
                                <th align="left">{t("boards:image")}</th>
                                <th align="left" >{t("boards:theme")}</th>
                                <th align="left">{t("boards:lists")}</th>
                            </tr>
                        </thead>

                        <tbody >
                            {boardsTable}
                        </tbody>

                        <tfoot>
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("boards:name")}</th>
                                <th align="left">{t("boards:description")}</th>
                                <th align="left">{t("boards:email")}</th>
                                <th align="left">{t("boards:favorite")}</th>
                                <th align="left">{t("boards:href")}</th>
                                <th align="left">{t("boards:image")}</th>
                                <th align="left" >{t("boards:theme")}</th>
                                <th align="left">{t("boards:lists")}</th>
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

export default BoardList;