import React from "react";
import './CSS/AdminMain.css';
import AdminSidebar from "../Components/AdminSidebar/AdminSidebar";
import AdminListProduct from "../Components/AdminListProduct/AdminListProduct";

const ListProduct = () => {
    return (
        <div className="adminmain">
            <AdminSidebar />
            <AdminListProduct />
        </div>
    )
}

export default ListProduct;