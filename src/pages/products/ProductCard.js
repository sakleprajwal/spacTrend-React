import { React } from 'react';
import "../../styles/Products.css";
import { useCart } from '../../hooks/cart-context/cart-context';
import { Link } from 'react-router-dom';



const ProductCard = ({product}) => {
    const { _id, imageUrl, title, subtitle, originalPrice, finalPrice, discount } = product
	const {cartItems, wishlistItems, addToCart, addToWishlist, removeFromWishlist} = useCart()

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
								<h4 className="final-price">Rs. {finalPrice}</h4>
								<h4 className="original-price">Rs. {originalPrice}</h4>
							</div>
							<h4 className="product-discount">( {discount}% OFF )</h4>
						</div>
					</div>
					<div className="card-actions">
						{
							cartItems.some(item => product._id === item._id) ? 
							<div className="card-action-buttons">
								<Link to="/cart" className="btn text-button">Go to cart</Link>
							</div> :
							<div className="card-action-buttons">
								<button onClick={() => addToCart(product)} className="btn text-button">Add to cart</button>
							</div>
						}
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
    );
};

export default ProductCard;