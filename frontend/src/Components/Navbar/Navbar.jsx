import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png';
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const [isAdmin,setIsAdmin] = useState(false);
    const [isUser,setIsUser] = useState(false);


    const renderAuthButtons = () => {

        if (!isUser && !isAdmin){
            return (
                <>
                    {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); setIsUser(false); window.location.replace('/')}}>Logout</button>:<Link to='/login'><button onClick={()=>{setIsUser(true);}}>Login</button></Link>}
                    {localStorage.getItem('admin-token')?<button onClick={()=>{localStorage.removeItem('admin-token'); setIsAdmin(false); window.location.replace('/')}}>Admin Logout</button>:<Link to='/adminlogin'><button onClick={()=>{setIsAdmin(true);}}>Admin Login</button></Link>}
                </>
            )
        }
        
        else if (isAdmin && !isUser){
            return(
                <>{localStorage.getItem('admin-token')?<button onClick={()=>{localStorage.removeItem('admin-token'); setIsAdmin(false); window.location.replace('/')}}>Admin Logout</button>:<Link to='/adminlogin'><button onClick={()=>{setIsAdmin(true);}}>Admin Login</button></Link>}</>
            )
        }
        
        else if (isUser && !isAdmin){
            return(
                <>{localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); setIsUser(false); window.location.replace('/')}}>Logout</button>:<Link to='/login'><button onClick={()=>{setIsUser(true);}}>Login</button></Link>}</>
            )
        }

        // if (localStorage.getItem('admin-token')) {
        //     return (
        //         localStorage.getItem('admin-token') ? (
        //             <button onClick={() => { localStorage.removeItem('admin-token'); window.location.replace('/'); }}>Admin Logout</button>
        //         ) : (
        //             <Link to='/adminlogin'><button>Admin Login</button></Link>
        //         )
        //     );
        // } else {
        //     return (
        //         localStorage.getItem('auth-token') ? (
        //             <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>Logout</button>
        //         ) : (
        //             <Link to='/login'><button>Login</button></Link>
        //         )
        //     );
        // }
    };


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>CARA</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link> {menu==='men'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women </Link>{menu==='women'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids </Link> {menu==='kids'?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                
                {renderAuthButtons()}

                {/* {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
                {localStorage.getItem('admin-token')?<button onClick={()=>{localStorage.removeItem('admin-token');window.location.replace('/')}}>Admin Logout</button>:<Link to='/adminlogin'><button>Admin Login</button></Link>} */}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar