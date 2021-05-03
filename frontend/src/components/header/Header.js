import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <input className="header__search" type="text" placeholder="Search" />
            <input type="range" className="header__toogle-darkmode" />
        </div>
    )
}

export default Header;