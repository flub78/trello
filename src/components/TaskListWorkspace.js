import React from 'react';

const TaskListWorkspace = () => {
    return (

        // <!-- center section -->
        <div className="col " id="tasklist-workspace">

            {/* <!-- internal navbar --> */}
            <nav className="navbar bg-dark navbar-expand " id="internal-nav">
                <div className="container-fluid d-flex flex-wrap">

                    <button className="bg-dark rounded-5 border-0 hidden" id="open-sidebar-button"
                    >
                        <i className="fa-solid fa-chevron-right text-light"></i>

                    </button>
                    <a className="navbar-brand  text-light ms-2" href="#">Testing</a>

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
                                <a className="nav-link dropdown-toggle  text-light" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <!-- V --> */}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
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
                                <li><a className="dropdown-item" href="#">Become a React Superhero</a></li>
                                <li><a className="dropdown-item" href="#">Another book</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            {/* <!-- tasklist workspace --> */}
            <section id="list-main-area" className="d-flex overflow-auto " style={{ height: 'calc(100% - 58px)' }}
                ondrop="dropList(event)" ondragover="allowDrop(event)">

                <div id="todo-list" className="task-list" draggable="true" ondragstart="dragList(event)">
                    <div className="list-name">
                        <div>Todo</div>
                        <div> <i className="bi bi-three-dots tasklist-menu-icon"></i>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="card-header">
                            <div className="d-flex">
                                <div>PDF document generation</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                        <div className="task-body">
                            <div className="color-tags d-flex">
                                <div className="color-tag bg-danger"></div>
                                <div className="color-tag bg-primary"></div>
                                <div className="color-tag bg-success"></div>
                            </div>
                            <div className="icon-line d-flex">
                                <i className="bi bi-text-paragraph m-1"></i>
                                <i className="bi bi-check2-square m-1"> 2/5</i>
                                <i className="bi bi-eye m-1"></i>
                                <i className="bi bi-chat m-1">3</i>
                            </div>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="card-header">
                            <div className="d-flex">
                                <div>Tasks and lists renaming</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="card-header">
                            <div className="d-flex">
                                <div>Online payments</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                        <div className="task-body">
                            <div className="color-tags d-flex">
                                <div className="color-tag bg-warning"></div>
                                <div className="color-tag bg-dark"></div>
                            </div>
                            <div className="icon-line d-flex">
                                <i className="bi bi-text-paragraph m-1"></i>

                            </div>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="container justify-content-center align-items-center">
                            <img src="/imgs/welding.jpg" className="card-img-top" alt="welding" />
                        </div>

                        <div className="card-header">
                            <div className="d-flex">
                                <div>Code generator default management</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                        <div className="task-body">
                            <div className="color-tags d-flex">
                                <div className="color-tag bg-warning"></div>
                            </div>
                            <div className="icon-line d-flex">
                                <i className="bi bi-text-paragraph m-1"></i>
                                <i className="bi bi-check2-square m-1"> 2/5</i>
                                <i className="bi bi-eye m-1"></i>
                                <i className="bi bi-chat m-1">3</i>
                            </div>
                        </div>
                    </div>
                    <div className="task m-1" draggable="true">
                        <div className="card-header">
                            <div className="d-flex">
                                <div>PDF document generation</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                        <div className="task-body">
                            <div className="color-tags d-flex">
                                <div className="color-tag bg-danger"></div>
                                <div className="color-tag bg-primary"></div>
                                <div className="color-tag bg-success"></div>
                            </div>
                            <div className="icon-line d-flex">
                                <i className="bi bi-text-paragraph m-1"></i>
                                <i className="bi bi-check2-square m-1"> 2/5</i>
                                <i className="bi bi-eye m-1"></i>
                                <i className="bi bi-chat m-1">3</i>
                            </div>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="container justify-content-center align-items-center">

                            <img src="/imgs/asana-todolist.png.webp" className="card-img-top" alt="todo list image" />
                        </div>
                        <div className="card-header">
                            <div className="d-flex">
                                <div>Calendar events repetition</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                    </div>


                    <div className="create-task">+ Ajouter une carte <i className="bi  bi-copy create-task-icon"></i></div>
                </div>

                <div id="wip-list" className="task-list" draggable="true" ondragstart="dragList(event)">
                    <div className="list-name">
                        <div>In Progress</div>
                        <div> <i className="bi bi-three-dots tasklist-menu-icon"></i>
                        </div>
                    </div>
                    <div className="create-task">+ Ajouter une carte <i className="bi  bi-copy create-task-icon"></i></div>
                </div>

                <div id="done-list" className="task-list" draggable="true" ondragstart="dragList(event)">
                    <div className="list-name">
                        <div>Done</div>
                        <div> <i className="bi bi-three-dots tasklist-menu-icon"></i>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="card-header">
                            <div className="d-flex">
                                <div>Trello like look and feel</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                    </div>

                    <div className="task m-1" draggable="true">
                        <div className="container justify-content-center align-items-center">
                            <img src="/imgs/testing.png" className="card-img-top" alt="testing image" />
                        </div>
                        <div className="card-header">
                            <div className="d-flex">
                                <div>Email generation</div>
                                <i className="bi bi-pencil  modif-icon m-1"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-task">+ Ajouter une carte <i className="bi  bi-copy create-task-icon
"></i></div>
                </div>

                <div className="tsk-list" style={{ min_width: '275px', max_width: '275px' }}>
                    <div id="create-list" className="task-list bg-light p-2 ps-4  rounded"> + Ajouter une autre liste
                    </div>
                </div>

            </section >
        </div >
    );
};

export default TaskListWorkspace;