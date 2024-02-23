import React from 'react';

const ThumbnailEntry = (props) => {

    const class_name = props.card.favorite ? "fa-solid fa-star favorite-star" : "fa-regular fa-star clic-star";

    // background: url(../assets/imgs/code_editor.jpg) center/cover;
    const bg_url = 'url(/imgs/' + props.card.image + ') center / cover';

    const theme = (props.theme) ? props.theme : "text-dark";

    if (props.sidebar) {
        return (

            <li>
                <div className="table-button d-flex flex-start">
                    <a className={"workspace-card webapp-card text-decoration-none " + theme} href={props.card.href}>

                        <div className="d-flex align-items-center">
                            <div className={"small-thumbnail ms-3"} style={{ background: bg_url }}></div>
                            <div className="table-name font-weight-bold m-2 ">{props.card.name}</div>

                        </div>
                    </a>

                    <div>
                        <i className="bi bi-three-dots m-1"></i>
                        <i className="bi  bi-star m-1"></i>
                    </div>
                </div>
            </li>

        );

    } else {
        return (

            <li>
                <a className={"workspace-card webapp-card text-decoration-none " + theme} href={props.card.href}>
                    <div className="d-flex m-2 ">
                        <div className={"thumbnail "} style={{ background: bg_url }}>
                        </div >

                        <h6 className="font-weight-bold m-2" >{props.card.name}</h6>
                    </div>
                </a>
            </li>
        );
    }
};

export default ThumbnailEntry;