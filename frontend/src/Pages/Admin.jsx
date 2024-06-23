import React from "react";
import './CSS/AdminMain.css';
import AdminSidebar from "../Components/AdminSidebar/AdminSidebar";

const Admin = () => {
    return (
        <div className="adminmain">
            {/* <AdminNavbar /> */}
            {/* <AdminMain /> */}
            <AdminSidebar />
        </div>
    )
}

export default Admin;