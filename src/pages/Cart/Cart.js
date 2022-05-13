import { React, useEffect } from 'react';
import "../../styles/Cart.css";
import { useCart } from '../../hooks/cart-context/cart-context';
import axios from 'axios';
import OrderDetails from './OrderDetails';
import { Link } from 'react-router-dom';
import Toaster from '../../components/Toaster/Toaster';

const Cart = () => {
    const { cartItems, updateProductQty, removeFromCart, removeFromWishlist, addToWishlist, wishlistItems } = useCart();
    const encodedToken = localStorage.getItem("token");

    const fetchCartData = async() => {
        try{
            const { data } = await axios.get('/api/user/cart', {
                headers:{
                    'authorization': encodedToken
                }
            })
        }catch(err){
            Toaster({message: "Couldn't fetch cart data", type: "error"})
        }
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return (
        <div>
            {
                cartItems.length === 0 ?
                <div className='emptyCart-section flex-column'>
                    <img className='emptyCart-image' src='asset/empty-cart.jpg'></img>
                    <h1 className='emptyCart-title'>Your Cart is empty</h1>
                    <h4 className='emptyCart-subtitle'>Checkout the products and add them to cart!!</h4>
                    <Link to="/products" className="btn text-button emptyCart-button">Products</Link>
                </div> :
                <div className="cart-section flex-row">
                    <div className="cart-item">
                        {
                            cartItems.map(product => (
                                <div key={product._id} className="ecom-card">
                                    <div className="ecom-card-img">
                                        <img src={product.imageUrl} alt="Product image"/>
                                    </div>
                                    <div className="ecom-details">
                                        <div className="ecom-card-details">
                                            <div>
                                                <h2 className="ecom-card-title">{product.title}</h2>
                                                <h4 className="ecom-card-subtitle">{product.subtitle}</h4>
                                            </div>
                                            <div className="product-prices">
                                                <div>
                                                    <h4 className="final-price">{product.finalPrice}</h4>
                                                    <h4 className="original-price">{product.originalPrice}</h4>
                                                </div>
                                                <h4 className="product-discount">( {product.discount}% OFF )</h4>
                                            </div>
                                            <div className="cart-item-quantity">
                                                <button onClick={() => updateProductQty(product._id, "decreament")} className="cart-item-quantity-btn">-</button>
                                                <span className="cart-item-quantity-count">{ product.qty }</span>
                                                <button onClick={() => updateProductQty(product._id, "increament")} className="cart-item-quantity-btn">+</button>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <div className="card-action-buttons">
                                                <button onClick={() => removeFromCart(product._id)} className="btn text-button">REMOVE</button>
                                            </div>
                                            {
			    			                	wishlistItems.some(item => product._id === item._id) ? 
			    			                	<div className="card-action-icons">
			    			                		<button onClick={() => removeFromWishlist(product._id)} className="btn icon-button wishlist-inactive" title="Add to favorites"><i className="fas fa-heart"></i></button>
			    			                	</div> :
			    			                	<div className="card-action-icons">
			    			                	<button onClick={() => addToWishlist(product)} className="btn icon-button wishlist-active" title="Add to favorites"><i className="far fa-heart"></i></button>
			    			                    </div>
			    			                }
                                        </div>
                                    </div>                
                                </div>
                            ))
                        }
                    </div> 
                    
                    <OrderDetails cartItems = {cartItems} />
                </div>
            }
        </div>
    );
};

export default Cart;