import React, { useState } from 'react';
import ThumbnailEntry from './ThumbnailEntry';
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import i18n from "i18next";


// 
const Navbar = ({ theme, boardsData }) => {

    // let theme = "dark";

    const { t } = useTranslation(['translation', 'navbar']);

    const [selected, setSelected] = useState(i18n.language);

    // function called when a new language is selected
    const changeLanguage = (lng) => {
        setSelected(lng);
        i18n.changeLanguage(lng);
    }

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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{t("navbar:workspaces")}</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item"
                                        href="/">{t("navbar:workspace")} Flub78</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{t("navbar:recents")}</a>
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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{t("navbar:favorites")}</a>
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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{t("navbar:models")}</a>
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
                                <a className="nav-link text-white" href="#">{t("create")}</a>
                            </li>
                        </ul>

                        <form className="d-flex" id="navbar-search">
                            <input className="form-control me-2 input-search bg-light" type="text" placeholder="Parcourir"></input>

                            <ReactFlagsSelect className="me-2"
                                selected={selected}
                                countries={["FR", "GB"]}
                                customLabels={{ "GB": "EN", "FR": "FR" }}
                                onSelect={(code) => changeLanguage(code)}
                            />

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