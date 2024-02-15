import React from 'react';

const BoardCard = ({ card }) => {

    const class_name = card.favorite ? "fa-solid fa-star favorite-star" : "fa-regular fa-star clic-star";

    // background: url(../assets/imgs/code_editor.jpg) center/cover;
    const bg_url = 'url(./imgs/' + card.image + ') center / cover';
    const text_color = (card.theme === 'dark') ? "text-light" : "text-dark";

    return (
        <div className="card text-dark" id={card.id}
            style={{ background: bg_url }
            }>

            <a className={"workspace-card webapp-card text-decoration-none " + text_color} href={card.href}>
                <h5 className="ont-weight-bold" >{card.name}</h5>
                <p>{card.description}</p>
                <i className={class_name}></i>
            </a>
        </div >
    );
};

export default BoardCard;