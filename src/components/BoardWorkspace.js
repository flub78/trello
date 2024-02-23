import React from 'react';
import Board from './Board';

const toggleSidebar = () => {
    console.log('CloseSidebar');
    var sidebar = document.getElementById("left-sidebar");
    var closeButton = document.getElementById("close-sidebar-button");
    var openButton = document.getElementById("open-sidebar-button");

    sidebar.classList.toggle("open-sidebar");
    sidebar.classList.toggle("close-sidebar");

    closeButton.classList.toggle("visible");
    closeButton.classList.toggle("hidden");

    openButton.classList.toggle("visible");
    openButton.classList.toggle("hidden");
}

const BoardWorkspace = ({ brd }) => {


    const board = [];

    return (

        // <!-- center section -->
        <div className="col " id="tasklist-workspace">

            {/* <!-- internal navbar --> */}
            <nav className="navbar bg-dark navbar-expand " id="internal-nav">
                <div className="container-fluid d-flex flex-wrap">

                    <button className="bg-dark rounded-5 border-0 hidden" id="open-sidebar-button" onClick={toggleSidebar} >
                        <i className="fa-solid fa-chevron-right text-light"></i>
                    </button>
                    <a className="navbar-brand  text-light ms-2" href="/"> {brd.name}</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item me-1">
                                <i className="bi bi-star  text-light"></i>
                            </li>

                            <li className="nav-item m-1">
                                <i className="bi bi-people  text-light"></i>
                            </li>

                            <li className="nav-item m-1  text-light">
                                <button> <i className="fa-solid fa-chart-simple m-1"></i>Tableaux</button>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle  text-light" href="/" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <!-- V --> */}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>


                        </ul>

                        <ul className="navbar-nav mb-2 mb-lg-0 flex-end align-items-center">

                            <li className="nav-item m-1  text-light">
                                <i className="fa-solid fa-rocket m-1"></i>
                                Power-ups
                            </li>

                            <li className="nav-item m-1  text-light">
                                <i className="bi bi-lightning-fill  text-light"></i>
                                Automatisation
                            </li>

                            <li className="nav-item m-1  text-light">
                                <i className="bi bi-filter  text-light m-1"></i>
                                Filtres
                            </li>

                            <li className="nav-item m-1 user-icon">
                                F
                            </li>

                            <li className="nav-item m-1  text-light">
                                <i className="bi bi-people m-1"></i>
                                Partager
                            </li>

                            <li className="nav-item m-1">
                                <div href="#sidebar" className="d-block" type="button" data-bs-toggle="offcanvas"
                                    role="button" data-bs-target="#sidebar" aria-controls="sidebar">
                                    <i className="bi bi-three-dots  text-light"></i>

                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>

            {/* <!-- right off canvas sidebar --> */}
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1"
                id="sidebar" aria-labelledby="sidebar-label">

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebar-label">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>

                    {/* <!-- Example of drodown --> */}
                    <div className="container justify-content-center align-items-center">

                        <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Choose Something
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Become a React Superhero</a></li>
                                <li><a className="dropdown-item" href="/">Another book</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="/">Separated link</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            <Board board={board} board_name={brd.name} />

        </div >
    );
};

export default BoardWorkspace;