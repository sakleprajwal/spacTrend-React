import React from 'react';
import "../../styles/Wishlist.css"
import { useContext } from 'react';
import { cartContext } from '../../hooks/cart-context/cart-context';
import { wishlistContext } from '../../hooks/wishlist-context/wishlist-context';

const Wishlist = () => {
    const {removeFromWishlist} = useContext(wishlistContext)
    const {addToCart} = useContext(cartContext)

    return (
        <div>
            <div className="wishlist-section flex-row">
                <div className="ecom-card vertical-card wishlist-card">
                    <div className="ecom-card-img">
                        <img src="asset/product1-spacTrend.webp" alt="Product image"/>
                    </div>
                    <div className="ecom-details">
                        <div className="ecom-card-details">
                            <div>
                                <h2 className="ecom-card-title">Roadster</h2>
                                <h4 className="ecom-card-subtitle">Men Printed Pullover</h4>
                            </div>
                            <div className="product-prices">
                                <div>
                                    <h4 className="final-price">Rs. 999</h4>
                                    <h4 className="original-price">Rs. 999</h4>
                                </div>
                                <h4 className="product-discount">( 50% OFF )</h4>
                            </div>
                        </div>
                        <div className="card-actions">
                            <div className="card-action-buttons">
                                <button onClick={addToCart} className="btn text-button">Add to cart</button>
                            </div>
                            <div className="card-action-icons">
                                <button onClick={removeFromWishlist} className="btn icon-button" title="Remove"><i className="far fa-trash"></i></button>
                            </div>
                        </div>
                    </div>                
                </div>

                <div className="ecom-card vertical-card wishlist-card">
                    <div className="ecom-card-img">
                        <img src="asset/product2-spacTrend.webp" alt="Product image"/>
                    </div>
                    <div className="ecom-details">
                        <div className="ecom-card-details">
                            <div>
                                <h2 className="ecom-card-title">Roadster</h2>
                                <h4 className="ecom-card-subtitle">Men Printed Pullover</h4>
                            </div>
                            <div className="product-prices">
                                <div>
                                    <h4 className="final-price">Rs. 999</h4>
                                    <h4 className="original-price">Rs. 999</h4>
                                </div>
                                <h4 className="product-discount">( 50% OFF )</h4>
                            </div>
                        </div>
                        <div className="card-actions">
                            <div className="card-action-buttons">
                                <button onClick={addToCart} className="btn text-button">Add to cart</button>
                            </div>
                            <div className="card-action-icons">
                                <button onClick={removeFromWishlist} className="btn icon-button" title="Remove"><i className="far fa-trash"></i></button>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default Wishlist;