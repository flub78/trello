import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { apiServer } from '../lib/Util';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

/**
 * React component to display the list of boards
 */
const BoardsListPage = () => {

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
                <td className="">
                    <Link to={"/boards/edit/" + board.name}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td className="">
                    <div type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, board.name)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                </td>
                <td className="">{board.name}</td>
                <td className="">{board.description}</td>
                <td className="">{board.email}</td>
                <td className="">{(board.favorite) ?
                    <i class="fa-regular fa-square-check"></i> :
                    <i class="fa-regular fa-square"></i>}
                </td>
                <td className="">{board.href}</td>
                <td className="">{board.image}</td>
                <td className="">{board.theme}</td>
                <td className="">{board.lists}</td>
            </tr >
        );
    });

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            <Card >
                <Card.Header className="card-header d-flex justify-content-between">
                    <h3>Boards</h3>
                    <div>
                        <Link to="/boards/create" className="btn btn-sm btn-primary m-1">Create a board</Link>

                        <Button variant="primary" size="sm">CSV</Button>
                        <Button variant="primary" size="sm">PDF</Button>
                    </div>
                </Card.Header>

                <Card.Body>
                    <div>
                        <div className="container-fluid mt-2 mw-100" style={{ overflow: 'auto', max_height: 'calc(100vh - 136px)' }}>


                            <Form className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex'>
                                    Afficher
                                    <Form.Select className="form-select-inline ms-1 me-1">
                                        <option value="10">10</option>
                                        <option value="25" selected="selected">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </Form.Select>
                                    éléments
                                </div>
                                <div className='d-flex'>
                                    <Form.Control type="text" placeholder="Rechercher" />
                                </div>
                            </Form>

                            <table className=" table table-striped" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                <thead className="thead-dark">
                                    <tr role="row">
                                        <th align="right"></th>
                                        <th align="center"></th>
                                        <th align="left">Name</th>
                                        <th align="left">Description</th>
                                        <th align="left">Email</th>
                                        <th align="left">Favorite</th>
                                        <th align="left">Href</th>
                                        <th align="left">Image</th>
                                        <th align="left" >Theme</th>
                                        <th align="left">Lists</th>
                                    </tr>
                                </thead>

                                <tbody >
                                    {boardsTable}
                                </tbody>

                                <tfoot>

                                    <tr role="row">
                                        <th align="right"></th>
                                        <th align="center"></th>
                                        <th align="left">Name</th>
                                        <th align="left">Description</th>
                                        <th align="left">Email</th>
                                        <th align="left">Favorite</th>
                                        <th align="left">Href</th>
                                        <th align="left">Image</th>
                                        <th align="left">Theme</th>
                                        <th align="left">Lists</th>
                                    </tr>
                                </tfoot>
                            </table>

                            <div className="d-flex justify-content-between m-1">
                                <div>
                                    Affichage de l'élement 1 à 16 sur 16 éléments
                                </div>
                                <div>
                                    <div className="btn btn-sm btn-primary m-1">Premier</div>
                                    <div className="btn btn-sm btn-primary m-1">Précédant</div>
                                    <div className="btn btn-sm btn-primary m-1">1</div>
                                    <div className="btn btn-sm btn-primary m-1">2</div>
                                    <div className="btn btn-sm btn-primary m-1">3</div>
                                    <div className="btn btn-sm btn-primary m-1">4</div>
                                    <div className="btn btn-sm btn-primary m-1">5</div>
                                    <div className="btn btn-sm btn-primary m-1">Suivant</div>
                                    <div className="btn btn-sm btn-primary m-1">Dernier</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Card.Body>
            </Card>

        </div >
    );
};

export default BoardsListPage;