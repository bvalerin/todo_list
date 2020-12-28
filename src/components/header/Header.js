import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <input className="header__search" type="text" placeholder="Search" />
            <input type="range" />
        </div>
    )
}

export default Header;