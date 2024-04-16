import React from 'react';
import NavbarButton from './NavbarButton';
import ThumbnailEntry from './ThumbnailEntry';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next";

// 
const Navbar = ({ theme, boardsData }) => {

    // let theme = "dark";

    const { t } = useTranslation();

    let nav_style = (theme === "dark") ? "navbar-dark bg-dark" : "navbar-light bg-light";
    let text_color = (theme === "dark") ? "text-white" : "text-dark";

    return (
        <div>
            <nav className={"navbar navbar-expand-md fixed-top " + nav_style} id="top-navbar" style={{ position: "sticky" }}>
                <div className="container-fluid">

                    <div className="nav-button navbar-brand">
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                    </div>
                    <div id="logo" className={"nav-button " + text_color}>
                        <i className="fa-brands fa-trello icon m-1"></i>
                        Frello
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        { /* span class="navbar-toggler-icon"></span */}
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Espaces de
                                    travail</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item"
                                        href="/">Workspace Flub78</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Récents</a>
                                <ul className="dropdown-menu">

                                    {boardsData
                                        .filter((board) => board.recent)
                                        .map((board, index) => {
                                            return (<ThumbnailEntry card={board} key={"recent_" + index} />);
                                        })
                                    }
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Favoris</a>
                                <ul className="dropdown-menu">

                                    {boardsData
                                        .filter((board) => board.favorite)
                                        .map((board, index) => {
                                            return (<ThumbnailEntry card={board} key={"favorite_" + index} />);
                                        })
                                    }
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Modèles</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/boards">Boards</a></li>
                                    <li><a className="dropdown-item" href="/columns">Columns</a></li>
                                    <li><a className="dropdown-item" href="/tasks">Tasks</a></li>
                                    <li><a className="dropdown-item" href="/task-comments">Task Comments</a></li>
                                    <li><a className="dropdown-item" href="/tag-colors">Tag Colors</a></li>
                                    <li><a className="dropdown-item" href="/tags">Tags</a></li>
                                    <li><a className="dropdown-item" href="/checklists">Checklists</a></li>
                                    <li><a className="dropdown-item" href="/checklist-items">Checklist Itemss</a></li>
                                </ul>
                            </li>

                            <li className="nav-item bg-primary rounded">
                                <a className="nav-link text-white" href="#">Créer</a>
                            </li>
                        </ul>

                        <form className="d-flex" id="navbar-search">
                            <input className="form-control me-2 input-search bg-light" type="text" placeholder="Parcourir"></input>
                            {/* <!-- <button class="btn btn-primary" type="button">Search</button> --> */}

                            <LanguageSelector />

                            <div className="me-2">{t("hello")}</div>

                            <div className="" id="notification-button">
                                <i className="fa-regular fa-bell button-icon" title="Notifications"></i>
                            </div>

                            <div className="nav-button">
                                <i className={"fa-regular fa-circle-question icon button-icon " + text_color} title="Informations"></i>
                            </div>
                        </form>
                        <div className="nav-button user-icon" title="Compte">F</div>

                    </div>
                </div>
            </nav>

        </div >
    );
};

export default Navbar;