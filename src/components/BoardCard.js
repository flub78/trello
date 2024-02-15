import React from 'react';

const BoardCard = ({ card }) => {

    const class_name = card.favorite ? "fa-solid fa-star favorite-star" : "fa-regular fa-star clic-star";

    // background: url(../assets/imgs/code_editor.jpg) center/cover;
    const bg_url = 'url(./imgs/' + card.image + ') center / cover';
    const text_color = (card.theme === 'dark') ? "text-light" : "text-dark";

    return (
        <a className={"workspace-card webapp-card text-decoration-none " + text_color} href={card.href}>
            <div className={"card " + text_color} id={card.id}
                style={{ background: bg_url }
                }>

                <h5 className="font-weight-bold " >{card.name}</h5>
                <p>{card.description}</p>
                <i className={class_name}></i>

            </div >
        </a>
    );
};

export default BoardCard;