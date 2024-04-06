import React from 'react';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import axios from 'axios';
import { apiServer } from '../lib/Util';
import { Link } from 'react-router-dom';

const BoardsListPage = () => {

    const [boardsData, setBoardsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data))
        setLoading(false);
    }, []);


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

    const boardsTable = boardsData.map((board) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )


        return (
            <tr key={board.id} className="odd">
                <td className="">
                    <div className="btn btn-sm btn-success"> <i className="fa-regular fa-pen-to-square"></i></div>
                </td>
                <td className="">
                    <div type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, board.name)}>
                        <i className="fa-regular fa-trash-can"></i></div>
                </td>
                <td className="">{board.name}</td>
                <td className="">{board.description}</td>
                <td className="">{board.email}</td>
                <td className="">{board.favorite}</td>
                <td className="">{board.href}</td>
                <td className="">{board.image}</td>
                <td className="">{board.theme}</td>
                <td className="">{board.lists}</td>
            </tr>
        );
    });

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />

            <section id="main" className="container-lg-fluid">


                <div className="container-fluid mt-2 mw-100" style={{ overflow: 'auto', max_height: 'calc(100vh - 136px)' }}>

                    <div className="d-flex justify-content-between m-1">
                        <h3>Boards</h3>

                        <div>
                            <Link to="/boards/create" className="btn btn-sm btn-primary m-1">Create a board</Link>

                            <div className="btn btn-sm btn-primary m-1">CSV</div>
                            <div className="btn btn-sm btn-primary m-1">PDF</div>
                        </div>

                        <div>
                            Afficher <select size="1" name="DataTables_Table_0_length" aria-controls="DataTables_Table_0">
                                <option value="10">10</option>
                                <option value="25" selected="selected">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select> éléments
                        </div>
                        <div>
                            Rechercher&nbsp;: <input type="text" />
                        </div>
                    </div>

                    <table className=" table table-striped " id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                        <thead>
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
            </section >
        </div >
    );
};

export default BoardsListPage;