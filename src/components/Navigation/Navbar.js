import { React, useContext } from 'react';
import "../../styles/App.css";
import { NavLink } from 'react-router-dom';
import { cartContext } from '../../hooks/cart-context/cart-context';
import {useAuth} from '../../hooks/authentication-context/auth-context'

 
const Navbar = () => {
    const { itemsInCart } = useContext(cartContext);
    const {isLoggedIn, setIsLoggedIn} = useAuth()

    const logoutHandler = () => {
        localStorage.setItem("token", "");
        setIsLoggedIn(false);
    }

    return ( 
        <div>
            <div className="navbar-section flex-row">
                <div className="navbar-brand">
                    <NavLink to="/" className="category-link"><span>spacTrend</span></NavLink>
                </div>
                <div className="search flex-row">
                    <input type="text" className="search-input" placeholder="search for Product, Brand and more"/>
                    <button className="navbar-icon-btn search-btn"><i className="fas fa-search"></i></button>
                </div>
                <div className="navbar-actions flex-row">
                    {
                        !isLoggedIn && 
                        <NavLink to="/login" className="category-link" >
                            <button className="navbar-icon-btn"><i className="fas fa-sign-in"></i></button>
                        </NavLink>
                    }
                    <NavLink to="/wishlist" className="category-link">
                        <button className="navbar-icon-btn"><i className="fas fa-heart"></i></button>
                    </NavLink>
                    <NavLink to="/cart" className="category-link">
                        <button className="navbar-icon-btn"><i className="fas fa-shopping-cart"></i><div className='icon-badge'>{itemsInCart}</div></button>
                    </NavLink>
                    {
                        isLoggedIn && 
                        <button className="navbar-icon-btn" onClick={logoutHandler}><i className="fas fa-sign-out"></i></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;