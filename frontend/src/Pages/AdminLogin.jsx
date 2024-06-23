import React, { useState } from 'react';
import '../Pages/CSS/AdminLogin.css';

const AdminLogin = () => {

    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const Adminlogin = async () => {
        console.log("Admin Login function executed",formData);
        let responseData;
        await fetch('http://localhost:4000/adminlogin',{
            method:'POST',
            headers:{
                Accept:'application/form-Data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data);
        
        if (responseData.success){
            localStorage.setItem('admin-token',responseData.token);
            window.location.replace("/adminpanel");
        }
        else{
            alert(responseData.errors);
        }
    }



    return(
        <div className="adminlogin">
            <div className="adminsignup-container">
                <h1>Admin Login</h1>
                <div className="adminsignup-fields">
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password"  placeholder='Password' />
                </div>
                <button onClick={()=>{Adminlogin()}}>Login</button>
            </div>
        </div>
    )
}

export default AdminLogin;