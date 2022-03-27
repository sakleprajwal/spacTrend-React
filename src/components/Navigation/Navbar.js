import React from 'react';
import "../../styles/App.css";
import { Link } from 'react-router-dom';
 
const Navbar = () => {
    return (
        <div>
            <div className="navbar-section flex-row">
                <div className="navbar-brand">
                    <Link to="/" className="category-link"><span>spacTrend</span></Link>
                </div>
                <div className="search flex-row">
                    <input type="text" className="search-input" placeholder="search for Product, Brand and more"/>
                    <button className="navbar-icon-btn search-btn"><i className="fas fa-search"></i></button>
                </div>
                <div className="navbar-actions flex-row">
                    <Link to="/login" className="category-link"><button className="navbar-icon-btn"><i className="fas fa-bell"></i></button></Link>
                    <Link to="/wishlist" className="category-link"><button className="navbar-icon-btn"><i className="far fa-heart"></i></button></Link>
                    <Link to="/cart" className="category-link"><button className="navbar-icon-btn"><i className="fas fa-shopping-cart"></i></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;