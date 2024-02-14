import React from 'react';

const NavbarButton = ({ button }) => {
    return (
        <div className="nav-button navbar-brand text-primary" id={button.id}>
            <i className="bi bi-grid-3x3-gap-fill"></i>
        </div>
    );
};

export default NavbarButton;