import React from 'react';
import "../../styles/App.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../hooks/cart-context/cart-context';
import { wishlistContext } from '../../hooks/wishlist-context/wishlist-context';

 
const Navbar = () => {
    const { itemsInCart } = useContext(cartContext)
    const { itemsInWishlist } = useContext(wishlistContext)

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
                <Link to="/login" className="category-link"><button className="navbar-icon-btn"><i class="fas fa-sign-in"></i></button></Link>
                    <Link to="/wishlist" className="category-link"><button className="navbar-icon-btn"><i class="fas fa-heart"></i></button></Link>
                    <Link to="/cart" className="category-link"><button className="navbar-icon-btn"><i className="fas fa-shopping-cart"></i><div className='icon-badge'>{itemsInCart}</div></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;