import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="headerMain">
            <input type="text" placeholder="Search" />
            <input type="range" />
        </div>
    )
}

export default Header;