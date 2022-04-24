import React from 'react';
import "../../styles/Wishlist.css"
import { useCart } from '../../hooks/cart-context/cart-context';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { addToCart, removeFromWishlist, cartItems, wishlistItems } = useCart()

    return (
        <div>
            {
                wishlistItems.length === 0 ?
                <div className='emptyCart-section flex-column'>
                    <img className='emptyCart-image' src='asset/empty-cart.jpg'></img>
                    <h1 className='emptyCart-title'>Your Wishlist is empty</h1>
                    <h4 className='emptyCart-subtitle'>Checkout the products and add them to wishlist!!</h4>
                    <Link to="/products" className="btn text-button emptyCart-button">Products</Link>
                </div> :
                <div className="wishlist-section flex-row">
                    {
                        wishlistItems.map(item => (
                            <div key={item._id} className="ecom-card vertical-card wishlist-card">
                                <div className="ecom-card-img">
                                    <img src={item.imageUrl} alt="Product image"/>
                                </div>
                                <div className="ecom-details">
                                    <div className="ecom-card-details">
                                        <div>
                                            <h2 className="ecom-card-title">{item.title}</h2>
                                            <h4 className="ecom-card-subtitle">{item.subtitle}</h4>
                                        </div>
                                        <div className="product-prices">
                                            <div>
                                                <h4 className="final-price">Rs. {item.finalPrice}</h4>
                                                <h4 className="original-price">Rs. {item.originalPrice}</h4>
                                            </div>
                                            <h4 className="product-discount">( {item.discount}% OFF )</h4>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        {
                                            cartItems.some(product => product._id === item._id) ? 
                                            <div className="card-action-buttons">
                                                <Link to="/cart" className="btn text-button">Go to cart</Link>
                                            </div> :
                                            <div className="card-action-buttons">
                                                <button onClick={() => addToCart(item)} className="btn text-button">Add to cart</button>
                                            </div>
                                        }
                                        <div className="card-action-icons">
                                            <button onClick={() => removeFromWishlist(item._id)} className="btn icon-button" title="Remove"><i className="far fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>                
                            </div>
                        ))
                    }
                </div> 
            }
        </div>
    );
};

export default Wishlist;