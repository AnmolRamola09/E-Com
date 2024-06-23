import React from "react";
import './AdminNavbar.css';
import navlogo from '../Assets/nav-logo.svg';
import navProfile from '../Assets/nav-profile.svg';

const AdminNavbar = () => {
    return (
        <div className="navbar">
            <img className="nav-logo" src={navlogo} alt="" />
            <img className="nav-profile" src={navProfile} alt="" />
        </div>
    )
}

export default AdminNavbar;