import React from 'react';
import "../../styles/Cart.css";

const Cart = () => {
    return (
        <div>
            <div class="cart-section flex-row">
                <div class="cart-item">
                    <div class="ecom-card">
                        <div class="ecom-card-img">
                            <img src="asset/product1-spacTrend.webp" alt="Product image"/>
                        </div>
                        <div class="ecom-details">
                            <div class="ecom-card-details">
                                <div>
                                    <h2 class="ecom-card-title">Roadster</h2>
                                    <h4 class="ecom-card-subtitle">Men Printed Pullover</h4>
                                </div>
                                <div class="product-prices">
                                    <div>
                                        <h4 class="final-price">Rs. 999</h4>
                                        <h4 class="original-price">Rs. 999</h4>
                                    </div>
                                    <h4 class="product-discount">( 50% OFF )</h4>
                                </div>
                                <div class="cart-item-quantity">
                                    <button class="cart-item-quantity-btn">-</button>
                                    <span class="cart-item-quantity-count">1</span>
                                    <button class="cart-item-quantity-btn">+</button>
                                </div>
                            </div>
                            <div class="card-actions">
                                <div class="card-action-buttons">
                                    <button class="btn text-button">REMOVE</button>
                                </div>
                                <div class="card-action-icons">
                                    <button class="btn icon-button" title="Add to favorites"><i class="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <div class="ecom-card">
                        <div class="ecom-card-img">
                            <img src="asset/product2-spacTrend.webp" alt="Product image"/>
                        </div>
                        <div class="ecom-details">
                            <div class="ecom-card-details">
                                <div>
                                    <h2 class="ecom-card-title">Roadster</h2>
                                    <h4 class="ecom-card-subtitle">Men Printed Pullover</h4>
                                </div>
                                <div class="product-prices">
                                    <div>
                                        <h4 class="final-price">Rs. 999</h4>
                                        <h4 class="original-price">Rs. 999</h4>
                                    </div>
                                    <h4 class="product-discount">( 50% OFF )</h4>
                                </div>
                                <div class="cart-item-quantity">
                                    <button class="cart-item-quantity-btn">-</button>
                                    <span class="cart-item-quantity-count">1</span>
                                    <button class="cart-item-quantity-btn">+</button>
                                </div>
                            </div>
                            <div class="card-actions">
                                <div class="card-action-buttons">
                                    <button class="btn text-button">REMOVE</button>
                                </div>
                                <div class="card-action-icons">
                                    <button class="btn icon-button" title="Add to favorites"><i class="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <div class="ecom-card">
                        <div class="ecom-card-img">
                            <img src="asset/product3-spacTrend.webp" alt="Product image"/>
                        </div>
                        <div class="ecom-details">
                            <div class="ecom-card-details">
                                <div>
                                    <h2 class="ecom-card-title">Roadster</h2>
                                    <h4 class="ecom-card-subtitle">Men Printed Pullover</h4>
                                </div>
                                <div class="product-prices">
                                    <div>
                                        <h4 class="final-price">Rs. 999</h4>
                                        <h4 class="original-price">Rs. 999</h4>
                                    </div>
                                    <h4 class="product-discount">( 50% OFF )</h4>
                                </div>
                                <div class="cart-item-quantity">
                                    <button class="cart-item-quantity-btn">-</button>
                                    <span class="cart-item-quantity-count">1</span>
                                    <button class="cart-item-quantity-btn">+</button>
                                </div>
                            </div>
                            <div class="card-actions">
                                <div class="card-action-buttons">
                                    <button class="btn text-button">REMOVE</button>
                                </div>
                                <div class="card-action-icons">
                                    <button class="btn icon-button" title="Add to favorites"><i class="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
                <div class="cart-price-detail-section flex-column">
                    <h3>Price Details</h3>
                    <div class="cart-price-breakdown">
                        <hr/>
                        <div class="cart-price-label-amount flex-row">
                            <h4>Price(2 items)</h4>
                            <span>Rs. 1499</span>
                        </div>
                        <div class="cart-price-label-amount flex-row">
                            <h4>Discount</h4>
                            <span>Rs. 200</span>
                        </div>
                        <div class="cart-price-label-amount flex-row" >
                            <h4>Delivery changes</h4>
                            <span>Rs. 50</span>
                        </div>
                        <hr/>
                        <div class="cart-price-label-amount flex-row total-price">
                            <h4>Total amount</h4>
                            <span>Rs. 1249</span>
                        </div>
                        <hr/>
                        <div class="cart-price-label-amount">
                            <h4>You will save Rs. 200 on this order </h4>
                        </div>
                    </div>
                    <button class="btn text-button">PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;