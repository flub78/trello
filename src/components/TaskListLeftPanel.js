import React from 'react';

const TaskListLeftPanel = () => {
    return (

        <div id="left-sidebar" classNameName="col-2 open-sidebar d-flex flex-column justify-content-between">

            <div classNameName="left-sidebar-top-group">
                {/* <!-- Left sidebar header --> */}
                <div id="left-sidebar-header" classNameName="bg-dark">

                    <div classNameName="row">
                        <div classNameName="col-2">
                            <div classNameName="w">W</div>
                        </div>
                        <div classNameName="col-8 text-light">
                            <div classNameName="mt-3  text-light ps-2">Workspace Flub78</div>
                            <div classNameName=" text-light ps-2 pb-1">Gratuit</div>
                        </div>
                        <div classNameName="col-2 mt-4">
                            <button classNameName="bg-dark border-0 visible" onclick="toggleSidebar()"
                                id="close-sidebar-button">
                                <i classNameName="fa-solid fa-chevron-left text-light"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- left sidebar menu --> */}
                <div id="left-sidebar-menus">
                    <div id="left-sidebar-menu-menu">
                        <ul classNameName="table-list">

                            <li classNameName="text-light table-button">
                                <div classNameName="d-flex d-start">
                                    <i classNameName="bi bi-trello m-1"></i>
                                    <div classNameName="m-1">Tableaux</div>
                                </div>
                            </li>

                            <li classNameName="text-light table-button">
                                <div classNameName="d-flex d-start">
                                    <i classNameName="bi bi-people  text-light m-1"></i>
                                    <div classNameName="m-1">Membres</div>
                                </div>
                                <div>
                                    <i classNameName="bi bi-plus-lg m-1"></i>
                                </div>
                            </li>

                            <li classNameName="text-light table-button">
                                <div classNameName="d-flex d-start">
                                    <i classNameName="bi bi-gear-fill m-1"></i>
                                    <div classNameName="m-1">Paramètres de l'espace de travail</div>
                                </div>
                                <div>
                                    <i classNameName="fa-solid fa-chevron-down"></i>
                                </div>
                            </li>

                        </ul>

                        <h6 classNameName="text-light m-1 ps-2">Vues de l'espace de travail</h6>

                        <ul classNameName=" table-list">

                            <li classNameName="text-light table-button">
                                <div classNameName="d-flex d-start">
                                    <i className="bi bi-table m-1"></i>
                                    <div className="m-1">Tableur</div>
                                </div>
                                <div>
                                    <i className="bi bi-three-dots m-1"></i>
                                </div>
                            </li>

                            <li className="text-light table-button">
                                <div className="d-flex d-start">
                                    <i className="bi bi-calendar4-week m-1"></i>
                                    <div className="m-1">Calendrier</div>
                                </div>
                                <div>
                                    <i className="bi bi-three-dots m-1"></i>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div id="left-sidebar-menu-views">
                        <div className="d-flex justify-content-between">
                            <h6 className="m-1 p-1 ms-2 text-light">Vos tableaux</h6>
                            <i className="bi bi-plus-lg m-1 p-1 me-2 text-light"></i>
                        </div>
                        <ul className="table-list">

                            <li>
                                <div className="table-button d-flex flex-start">
                                    <div className="d-flex">
                                        <div className="table-thumbnail forest-card"></div>
                                        <div className="table-name">Forest</div>

                                    </div>
                                    <div>
                                        <i className="bi bi-three-dots m-1"></i>
                                        <i className="bi  bi-star m-1"></i>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="table-button d-flex flex-start">
                                    <div className="d-flex">
                                        <div className="table-thumbnail marly-card"></div>
                                        <div className="table-name">Marly</div>
                                    </div>
                                    <div>
                                        <i className="bi bi-three-dots m-1"></i>
                                        <i className="bi  bi-star m-1"></i>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="table-button d-flex flex-start">
                                    <div className="d-flex">
                                        <div className="table-thumbnail gvv-card"></div>
                                        <div className="table-name">GVV</div>
                                    </div>
                                    <div>
                                        <i className="bi bi-three-dots m-1"></i>
                                        <i className="bi  bi-star m-1"></i>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="table-button d-flex flex-start">
                                    <div className="d-flex">
                                        <div className="table-thumbnail webapp-card"></div>
                                        <div className="table-name">WEBAPP</div>
                                    </div>
                                    <div>
                                        <i className="bi bi-three-dots m-1"></i>
                                        <i className="bi  bi-star m-1"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="left-sidebar-menu-tables">

                    </div>
                </div>
            </div>

            {/* <!-- left sidebar tryit --> */}
            <div id="left-sidebar-tryit" className="try-it">
                <i className="bi bi-bag m-2"></i>
                Essayer Premium gratuitement.

            </div>

        </div>
    );
};

export default TaskListLeftPanel;