import React from 'react';
import BoardCard from './BoardCard';

/**
 * TODO: card css
 * TODO: support for light and dark mode
 * TODO: link to trello tasklist
 * TODO: style for try-it
 * 
 */
const WorkspaceMain = () => {

    const webapp = {
        id: "webapp",
        name: "WEBAPP",
        description: "Workspace Flub78",
        favorite: true,
        recent: true,
        href: "trello_tasklist.html",
        image: "code_editor.jpg",
        theme: 'dark'
    };

    const marly = {
        id: "marly",
        name: "Marly",
        description: "",
        favorite: false,
        recent: false,
        href: "trello_tasklist.html",
        image: "IMG_20181118_152709.jpg",
        theme: 'dark'
    };

    const forest = {
        id: "forest",
        name: "Forest",
        description: "",
        favorite: false,
        recent: false,
        href: "trello_tasklist.html",
        image: "IMG_20210425_145446.jpg",
        theme: 'dark'
    };

    const gvv = {
        id: "gvv",
        name: "GVV",
        description: "",
        favorite: true,
        recent: true,
        href: "trello_tasklist.html",
        image: "20230903_151040.jpg"
    };

    const projects = {
        id: "projects",
        name: "Projets persos",
        description: "",
        favorite: false,
        recent: false,
        href: "trello_tasklist.html",
        image: "welding.jpg",
        theme: 'dark'
    };

    const devops = {
        id: "devops",
        name: "DevOps",
        description: "",
        favorite: false,
        recent: false,
        href: "trello_tasklist.html",
        image: "jenkins.GIF"
    };

    const training = {
        id: "training",
        name: "Training",
        description: "",
        favorite: false,
        recent: true,
        href: "trello_tasklist.html",
        image: "training-concept-image.jpg"
    };

    const boards = [webapp, marly, forest, gvv, projects, devops, training];

    return (
        <div>
            <section id="workspace" className="workspace-group col-lg-8">
                <div id="favorite">
                    <div id="favorite-title">
                        <h5><i className="fa-regular fa-star"></i>
                            Tableaux Favoris</h5>

                        <div className="d-flex flex-wrap">
                            {boards
                                .filter((board) => board.favorite)
                                .map((board) => {
                                    return (<BoardCard card={board} />);
                                })
                            }
                        </div>

                    </div>
                </div>

                <div id="recent" className="workspace-group">
                    <div id="recent-title">
                        <h5><i className="fa-regular fa-clock m-1"></i>Recemmment consultés</h5>
                        <div className="workspace-card-container d-flex flex-wrap">

                            {boards
                                .filter((board) => board.recent)
                                .map((board) => {
                                    return (<BoardCard card={board} />);
                                })
                            }>

                        </div>
                    </div>
                </div>

                <div id="my-workspaces" className="workspace-group">
                    <h6>VOS ESPACES DE TRAVAIL</h6>
                    <div id="workspace-banner" className="container d-flex justify-content-between">
                        <div id="workspace-banner-left">
                            <div className="">
                                <button className="w">W</button>
                                Workspace Flub78
                            </div>
                        </div>
                        <div id="workspace-banner-right" className="d-flex flex-wrap">
                            <div className="btn-3 m-2"><i className="fa-brands fa-trello m-2"></i>Tableaux</div>
                            <div className="btn-3 m-2"><i className="bi bi-grid-3x3-gap m-1"></i>Vues</div>
                            <div className="btn-3 m-2"><i className='fas fa-users m-2'></i>Membres (1)</div>
                            <div className="btn-3 m-2"><i className="fa-solid fa-gear m-2"></i>Parametres</div>
                            <div className="btn-4 m-2 shopping"><i className="fa-solid fa-bag-shopping shopping m-2"></i>Acheter
                            </div>
                        </div>
                    </div>
                    <div className="workspace-card-container d-flex flex-wrap">

                        {boards
                            // .filter((board) => board.favorite)
                            // .sort((a, b) => b.date - a.date)
                            // .slice(0, rangeValue)
                            .map((board) => {
                                return (<BoardCard card={board} />);
                            })
                        }

                        <div className="workspace-card create-card light-bg-card">
                            <h6>Créer un tableau</h6>
                            <p>1 restant(s)</p>
                            <i className="fa-regular fa-circle-question icon button-icon bottom-right-icon"></i>
                        </div>
                    </div>
                </div>

                <div id="closed-workspace">
                    <div className="btn-3">Afficher tous les tableaux fermés</div>
                </div>
            </section>
        </div>
    );
};

export default WorkspaceMain;