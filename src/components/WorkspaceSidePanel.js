import React from 'react';

const WorkspaceSidePanel = () => {
    return (
        <section id="sidepanel" className="col-lg-3 mx-2">
            <div id="side-menus">

                <div id="left-menu">

                    <div className="btn-1 bg-primary-subtle text-primary mt-3">
                        <i className="fa-brands fa-trello m-1"></i>Tableaux
                    </div>

                    <div className="btn-1 text-left mt-3">
                        <i className="fa-brands fa-trello m-1"></i>
                        Modèles
                    </div>

                    <div className="btn-1 text-left">
                        <i className="bi bi-soundwave m-1"></i>
                        Accueil
                    </div>
                </div>

                <div id="workspace-menu">
                    <h6 className="m-2">Espaces de travail</h6>
                    <div className="accordion" id="chapters">
                        <div className="accordion-item">

                            <h2 className="accordion-header" id="heading-1">
                                <div className="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                                    <div id="collapsible" className="nav-button " >
                                        <button className="w">W</button>
                                        Workspace Flub78
                                    </div>
                                </div>
                            </h2>

                            <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">

                                    <div className="btn-2"><i className="fa-brands fa-trello m-1"></i>Tableaux
                                    </div>

                                    <div className="btn-2"><i className="fa-regular fa-heart m-1"></i>A la une</div>
                                    <div className="btn-2">
                                        <i className="bi bi-grid-3x3-gap m-1"></i>Vues
                                    </div>
                                    <div className="btn-2">
                                        <i className='fas fa-users m-1'></i>Membres
                                    </div>
                                    <div className="btn-2"><i className="fa-solid fa-gear m-1"></i>Paramètres
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="try-it" className="m-4">
                    <h6 className="m2">Essayer Trello Premium</h6>
                    <small>Profitez d'un nombre illimité de tableaux, de toutes les vues, d'automatisations
                        illimitées
                        et
                        plus
                        encore.</small>
                    <div id="start-it">
                        <a href="">Commencez l'essai gratuit</a>
                        <div id="trello-icon"></div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WorkspaceSidePanel;