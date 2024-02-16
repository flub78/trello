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

const TaskListWorkspace = () => {

    const cg = {
        name: 'Code generator',
        description: 'Generate code for your project',
        image: 'welding.jpg',
        href: '/code-generator',
        watched: true,
        check_list: [{ title: "subtask 1", checked: true },
        { title: "subtask 2", checked: false },
        { title: "subtask 3", checked: true },
        { title: "subtask 4", checked: false },
        { title: "subtask 5", checked: true }],
        color_tags: ['bg-warning', 'bg-dark'],
        comments: [{ text: "Comment 1" }, { text: "Comment 2" }, { text: "Comment 3" }]
    };

    const pdf = {
        name: 'PDF document generation',
        href: '/code-generator',
        description: 'Generate PDF file',
        watched: true,
        check_list: [{ title: "subtask 1", checked: false },
        { title: "subtask 2", checked: false },
        { title: "subtask 3", checked: true },
        { title: "subtask 4", checked: false },
        { title: "subtask 5", checked: true }],

        color_tags: ['bg-danger', 'bg-primary', 'bg-success'],
        comments: [{ text: "Comment 1" }, { text: "Comment 2" }, { text: "Comment 3" }]
    };

    const renaming = {
        name: 'Tasks and lists renaming'
    };

    const payments = {
        name: 'Online payments',
        description: 'SUpport CB and Paypal paiements',
        color_tags: ['bg-warning', 'bg-black']

    };

    const calendar = {
        name: 'Calendar events repetition',
        image: 'asana-todolist.png.webp'
    };

    const trello = {
        name: 'Trello like look and feel',
    };

    const testing = {
        name: 'Email generation',
        image: 'testing.png'
    };

    const todo = {
        name: 'Todo',
        tasks: [pdf, renaming, payments, cg, calendar]
    };

    const in_progress = {
        name: 'In Progress',
        tasks: []
    };

    const done = {
        name: 'Done',
        tasks: [trello, testing]
    };

    const board = [todo, in_progress, done];

    return (

        // <!-- center section -->
        <div className="col " id="tasklist-workspace">

            {/* <!-- internal navbar --> */}
            <nav className="navbar bg-dark navbar-expand " id="internal-nav">
                <div className="container-fluid d-flex flex-wrap">

                    <button className="bg-dark rounded-5 border-0 hidden" id="open-sidebar-button" onClick={toggleSidebar} >
                        <i className="fa-solid fa-chevron-right text-light"></i>
                    </button>
                    <a className="navbar-brand  text-light ms-2" href="/">Webapp</a>

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
                                <i className="bi bi-filter  text-light"></i>
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
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
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
                                Choose a book title
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

            <Board board={board} />

        </div >
    );
};

export default TaskListWorkspace;