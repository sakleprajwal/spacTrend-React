import React from 'react';
import "../../styles/Cart.css";
import { useContext } from 'react';
import { cartContext } from '../../hooks/cart-context/cart-context';
import { wishlistContext } from '../../hooks/wishlist-context/wishlist-context';
import axios from 'axios';
import { useEffect } from 'react';

const Cart = () => {
    const {removeFromCart} = useContext(cartContext);
    const {addToWishlist} = useContext(wishlistContext);
    const encodedToken = localStorage.getItem("token");

    const fetchCartData = async() => {
        try{
            const { data } = await axios.get('/api/user/cart', {
                headers:{
                    'authorization': encodedToken
                }
            })
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return (
        <div>
            <div className="cart-section flex-row">
                <div className="cart-item">
                    <div className="ecom-card">
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
                                <div className="cart-item-quantity">
                                    <button className="cart-item-quantity-btn">-</button>
                                    <span className="cart-item-quantity-count">1</span>
                                    <button className="cart-item-quantity-btn">+</button>
                                </div>
                            </div>
                            <div className="card-actions">
                                <div className="card-action-buttons">
                                    <button onClick={removeFromCart} className="btn text-button">REMOVE</button>
                                </div>
                                <div className="card-action-icons">
                                    <button onClick={addToWishlist} className="btn icon-button" title="Add to favorites"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <div className="ecom-card">
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
                                <div className="cart-item-quantity">
                                    <button className="cart-item-quantity-btn">-</button>
                                    <span className="cart-item-quantity-count">1</span>
                                    <button className="cart-item-quantity-btn">+</button>
                                </div>
                            </div>
                            <div className="card-actions">
                                <div className="card-action-buttons">
                                    <button onClick={removeFromCart} className="btn text-button">REMOVE</button>
                                </div>
                                <div className="card-action-icons">
                                    <button onClick={addToWishlist} className="btn icon-button" title="Add to favorites"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <div className="ecom-card">
                        <div className="ecom-card-img">
                            <img src="asset/product3-spacTrend.webp" alt="Product image"/>
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
                                <div className="cart-item-quantity">
                                    <button className="cart-item-quantity-btn">-</button>
                                    <span className="cart-item-quantity-count">1</span>
                                    <button className="cart-item-quantity-btn">+</button>
                                </div>
                            </div>
                            <div className="card-actions">
                                <div className="card-action-buttons">
                                    <button onClick={removeFromCart} className="btn text-button">REMOVE</button>
                                </div>
                                <div className="card-action-icons">
                                    <button onClick={addToWishlist} className="btn icon-button" title="Add to favorites"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
                <div className="cart-price-detail-section flex-column">
                    <h3>Price Details</h3>
                    <div className="cart-price-breakdown">
                        <hr/>
                        <div className="cart-price-label-amount flex-row">
                            <h4>Price(2 items)</h4>
                            <span>Rs. 1499</span>
                        </div>
                        <div className="cart-price-label-amount flex-row">
                            <h4>Discount</h4>
                            <span>Rs. 200</span>
                        </div>
                        <div className="cart-price-label-amount flex-row" >
                            <h4>Delivery changes</h4>
                            <span>Rs. 50</span>
                        </div>
                        <hr/>
                        <div className="cart-price-label-amount flex-row total-price">
                            <h4>Total amount</h4>
                            <span>Rs. 1249</span>
                        </div>
                        <hr/>
                        <div className="cart-price-label-amount">
                            <h4>You will save Rs. 200 on this order </h4>
                        </div>
                    </div>
                    <button className="btn text-button">PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;