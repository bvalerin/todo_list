
import React from 'react';

import searchIcon from '../../images/input-icons/search.svg';


import darkmodeIcon from '../../images/button-icons/darkmode.svg';

export const DashboardNavbar = () => {
    return (
        <div className="dashboardnavbar__main">
            <div className="input__form-box input__search-box">
                <input 
                    type="text"
                    className="input__search"
                    placeholder=""
                    name="email" 
                    autoComplete="off"
                />
                <div className="input__search-img-box">
                    <img src={ searchIcon } alt="Message Icon" />
                </div>
            </div>

            <button
                className="btn btn-darkmode"
            >
                <i className="fa fa-circle"></i>
                <img src={ darkmodeIcon } alt="Darkmode Icon" />
            </button>
        </div>
    )
}
