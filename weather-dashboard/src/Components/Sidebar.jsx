import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className = "header">
                <h3 className="header-title">Weather App</h3>
            </div>
            <div className = "menu">
                <ul>
                    <li className="menu-item">
                        <p>Dashboard</p>
                    </li>
                    <li className="menu-item">
                        <p>Search</p>
                    </li>
                    <li className="menu-item">
                        <p>About</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
