import React from 'react';

const ThumbnailEntry = ({ card }) => {

    const class_name = card.favorite ? "fa-solid fa-star favorite-star" : "fa-regular fa-star clic-star";

    // background: url(../assets/imgs/code_editor.jpg) center/cover;
    const bg_url = 'url(/imgs/' + card.image + ') center / cover';

    return (
        <li>
            <a className={"workspace-card webapp-card text-decoration-none text-dark"} href={card.href}>
                <div className="d-flex m-2">
                    <div className={"thumbnail "} style={{ background: bg_url }}>
                    </div >

                    <h6 className="font-weight-bold m-2" >{card.name}</h6>
                </div>
            </a>
        </li>
    );
};

export default ThumbnailEntry;