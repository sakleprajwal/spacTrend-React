import React from 'react';
import "../../styles/App.css";

 
const Navbar = () => {
    return (
        <div>
            <div class="navbar-section flex-row">
                <div class="navbar-brand">
                    <a href="https://spactrend.netlify.app/" class="category-link"><span>spacTrend</span></a>
                </div>
                <div class="search flex-row">
                    <input type="text" class="search-input" placeholder="search for Product, Brand and more" />
                    <button class="navbar-icon-btn search-btn"><i class="fas fa-search"></i></button>
                </div>
                <div class="navbar-actions flex-row">
                    <a href="https://spactrend.netlify.app/login.html" class="category-link"><button class="navbar-icon-btn"><i class="fas fa-bell"></i></button></a>
                    <a href="https://spactrend.netlify.app/wishlist.html" class="category-link"><button class="navbar-icon-btn"><i class="far fa-heart"></i></button></a>
                    <a href="https://spactrend.netlify.app/cart.html" class="category-link"><button class="navbar-icon-btn"><i class="fas fa-shopping-cart"></i></button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;