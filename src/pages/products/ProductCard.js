import { React, useContext } from 'react';
import "../../styles/Products.css";
import axios from 'axios';
import { wishlistContext } from '../../hooks/wishlist-context/wishlist-context';
import { cartContext } from '../../hooks/cart-context/cart-context';
import Toaster from '../../components/Toaster/Toaster';


const ProductCard = ({product}) => {
    const { _id, imageUrl, title, subtitle, originalPrice, finalPrice, discount } = product

	const {addToCart} = useContext(cartContext);
	const {addToWishlist} = useContext(wishlistContext);
    const decodedToken = localStorage.getItem("token");

    const addToCartHandler = async(product) => {
        try{
            const { data } = await axios.post('/api/user/cart', product, {
                headers: {
                    'authorization': decodedToken
                }
            })
            if(decodedToken) {
				console.log(data, decodedToken);
                addToCart();
            }
			Toaster({message: "Added to cart", type: "info"});
        } catch(err) {
            Toaster({message: "Please login", type: "error"});
        }
    }

    return (
        
            <div key={_id} className="ecom-card vertical-card product-list">
				<div className="ecom-card-img">
					<img src={imageUrl} alt="Product image"/>
				</div>
				<div className="ecom-details">
					<div className="ecom-card-details">
						<div>
							<h2 className="ecom-card-title">{title}</h2>
							<h4 className="ecom-card-subtitle">{subtitle}</h4>
						</div>
						<div className="product-prices">
							<div>
								<h4 className="final-price">{finalPrice}</h4>
								<h4 className="original-price">{originalPrice}</h4>
							</div>
							<h4 className="product-discount">( {discount} OFF )</h4>
						</div>
					</div>
					<div className="card-actions">
						<div className="card-action-buttons">
							<button onClick={() => addToCartHandler(product)} className="btn text-button">Add to cart</button>
						</div>
						<div className="card-action-icons">
							<button onClick={addToWishlist} className="btn icon-button" title="Add to favorites"><i className="fas fa-heart"></i></button>
						</div>
					</div>
				</div>                
			</div>
        
    );
};

export default ProductCard;