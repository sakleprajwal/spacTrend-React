import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import "../../styles/Wishlist.css"

const Wishlist = () => {
    return (
        <div>
            <Navbar/>
            <div class="wishlist-section flex-row">
                <div class="ecom-card vertical-card wishlist-card">
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
                        </div>
                        <div class="card-actions">
                            <div class="card-action-buttons">
                                <button class="btn text-button">Add to cart</button>
                            </div>
                            <div class="card-action-icons">
                                <button class="btn icon-button" title="Remove"><i class="far fa-trash"></i></button>
                            </div>
                        </div>
                    </div>                
                </div>

                <div class="ecom-card vertical-card wishlist-card">
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
                        </div>
                        <div class="card-actions">
                            <div class="card-action-buttons">
                                <button class="btn text-button">Add to cart</button>
                            </div>
                            <div class="card-action-icons">
                                <button class="btn icon-button" title="Remove"><i class="far fa-trash"></i></button>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default Wishlist;