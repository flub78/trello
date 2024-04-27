import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';

import { apiServer } from '../lib/Util';
import Loading from './Loading';

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
                <td>{board.name}</td>
                <td>{board.description}</td>
                <td>{board.email}</td>
                <td>{(board.favorite) ?
                    <i className="fa-regular fa-square-check"></i> :
                    <i className="fa-regular fa-square"></i>}
                </td>
                <td>{board.href}</td>
                <td>{board.image}</td>
                <td>{board.theme}</td>
                <td>{board.lists}</td>
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
                        <div className='d-flex'>
                            Afficher
                            <Form.Select className="form-select-inline ms-1 me-1" size="sm" defaultValue="25">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </Form.Select>
                            éléments
                        </div>
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

                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default BoardList;