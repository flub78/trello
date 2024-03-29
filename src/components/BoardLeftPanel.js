import React from 'react';
import ThumbnailEntry from './ThumbnailEntry';


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

const BoardLeftPanel = ({ theme, boardsData }) => {
    return (

        <div id="left-sidebar" className="col-2 open-sidebar d-flex flex-column justify-content-between">

            <div className="left-sidebar-top-group">
                {/* <!-- Left sidebar header --> */}
                <div id="left-sidebar-header" className="bg-dark">

                    <div className="row">
                        <div className="col-2">
                            <div className="w">W</div>
                        </div>
                        <div className="col-8 text-light">
                            <div className="mt-3  text-light ps-2">Workspace Flub78</div>
                            <div className=" text-light ps-2 pb-1">Gratuit</div>
                        </div>
                        <div className="col-2 mt-4">
                            <button className="bg-dark border-0 visible"
                                id="close-sidebar-button" onClick={toggleSidebar}
                            >
                                <i className="fa-solid fa-chevron-left text-light"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- left sidebar menu --> */}
                <div id="left-sidebar-menus">
                    <div id="left-sidebar-menu-menu">
                        <ul className="table-list">

                            <li className="text-light table-button">
                                <div className="d-flex d-start">
                                    <i className="bi bi-trello m-1"></i>
                                    <div className="m-1">Tableaux</div>
                                </div>
                            </li>

                            <li className="text-light table-button">
                                <div className="d-flex d-start">
                                    <i className="bi bi-people  text-light m-1"></i>
                                    <div className="m-1">Membres</div>
                                </div>
                                <div>
                                    <i className="bi bi-plus-lg m-1"></i>
                                </div>
                            </li>

                            <li className="text-light table-button">
                                <div className="d-flex d-start">
                                    <i className="bi bi-gear-fill m-1"></i>
                                    <div className="m-1">Paramètres de l'espace de travail</div>
                                </div>
                                <div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </li>

                        </ul>

                        <h6 className="text-light m-1 ps-2">Vues de l'espace de travail</h6>

                        <ul className=" table-list">

                            <li className="text-light table-button">
                                <div className="d-flex d-start">
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

                            {boardsData
                                .map((board, index) => {
                                    return (<ThumbnailEntry card={board} key={"recent_" + index} theme={"text-light"} sidebar={true} />);
                                })
                            }

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

export default BoardLeftPanel;