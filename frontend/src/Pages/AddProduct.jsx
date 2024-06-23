import React from "react";
import './CSS/AdminMain.css';
import AdminSidebar from "../Components/AdminSidebar/AdminSidebar";
import AdminAddProduct from "../Components/AdminAddProduct/AdminAddProduct";

const AddProduct = () => {
    return (
        <div className="adminmain">
            <AdminSidebar />
            <AdminAddProduct />
        </div>
    )
}

export default AddProduct;