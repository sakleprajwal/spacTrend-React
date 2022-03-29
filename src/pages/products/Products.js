import React from 'react';
import "../../styles/Products.css";
import { useState, useContext, useEffect, useReducer } from 'react';
import Categories from '../../components/Categories/Categories';
import { cartContext } from '../../hooks/cart-context/cart-context';
import { categoryContext } from '../../hooks/category-context/category-context';
import { wishlistContext } from '../../hooks/wishlist-context/wishlist-context';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

const Products = () => {
	const [productList, setProductList] = useState([])

	const {category} = useContext(categoryContext);
	const {addToCart} = useContext(cartContext);
	const {addToWishlist} = useContext(wishlistContext)

	const fetchProductList = async () => {
		const { data } = await axios.get('/api/products');
		setProductList(data.products.filter((product) => product.category === category));
	}

	const categoryFilterFunc = (productList, category) => setProductList(productList.filter((product) => product.category === category));

	const reducer = (state, action) => {
		switch(action.type){
			case "ratingFilter":
				return {
					...state,
					ratingFilter: action.filterBy
				}
			case "priceFilter":
				return {
					...state,
					priceFilter: action.filterBy
				}
			case "spacTrendAssuredFilter":
				if(state.spacTrendAssuredFilter===true)
					return {...state, spacTrendAssuredFilter: false}
				return {...state, spacTrendAssuredFilter: true}
			case "priceRangeFilter":
				return {
					...state,
					priceRangeFilter: action.filterBy
				}
		}
	}

	const [{ratingFilter, priceFilter, spacTrendAssuredFilter, priceRangeFilter}, dispatch] = useReducer(
		reducer,
		{ratingFilter: 3, priceFilter: "lowToHigh", spacTrendAssuredFilter: false, priceRangeFilter: 5000}
	)

	const ratingFilterFunc = (productList, ratingFilter) => {
		return productList.filter((product) => product.rating >= ratingFilter)
	}

	const priceFilterFunc = (productList, priceFilter) => {
		if(priceFilter === "lowToHigh")
			return productList.sort( (a, b) => a.finalPrice - b.finalPrice );
		return productList.sort( (a, b) => b.finalPrice - a.finalPrice );
	}

	const spacTrendAssuredFilterFunc = (productList, spacTrendAssuredFilter) => {
		if(spacTrendAssuredFilter === true)
			return productList.filter( (product) => product.spacTrendAssured === true)
		return productList
	}

	const priceRangeFilterFunc = (productList, priceRangeFilter) => {
		return productList.filter((product) => product.finalPrice <= priceRangeFilter)
	}

	const priceFilteredProductList = priceFilterFunc(productList, priceFilter)
	const ratingFilteredProductList = ratingFilterFunc(priceFilteredProductList, ratingFilter)
	const spacTrendAssuredFilteredProductList = spacTrendAssuredFilterFunc(ratingFilteredProductList, spacTrendAssuredFilter)
	const finalProductList = priceRangeFilterFunc(spacTrendAssuredFilteredProductList, priceRangeFilter)

	useEffect(() => {
		fetchProductList();
		categoryFilterFunc(productList, category)
	}, [category])

	
	const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
	let initialStyle = {}
	if(isMobile)
		initialStyle = {display: "none"};
	else
		initialStyle = {display: "flex",flexDirection: "column"};

	const[filterToggleStyle, setFilterToggleStyle] = useState(initialStyle)
	const[toggle, setToggle] = useState(true);
	console.log(isMobile, filterToggleStyle)

	const filterToggleHandler = () => {
		if(toggle === false){
			setToggle(true)
			setFilterToggleStyle({display: "none"})
		} else {
			setToggle(false)
			setFilterToggleStyle({display: "flex",flexDirection: "column"})
		}
	}

    return (
        <div>
			<Categories/>

			<div className="product-listing-section flex-row">
				<div className="filter-toggle-section">
					<button onClick={filterToggleHandler} className="btn fab-button filter-toggle-btn"><i className="fas fa-filter"></i></button> 
				</div>
				<div className="filter-section" style={filterToggleStyle} >
					<h3>Filters</h3>
					<div className="price-filter">
						<h3>Price</h3>
						<div className="slidecontainer">
							<input type="range" defaultValue="5000" onChange={(e) => dispatch({ type: "priceRangeFilter", filterBy: e.target.value })} min="0" max="10000" step="500" className="slider" id="myRange"/>
							<p>Price range: 0 to  {priceRangeFilter} </p>
						</div>
					</div>
					<div className="rating-filter">
						<h3>Rating</h3>
						<label className="category-input-container">
							<input type="radio" name="rating" onChange={() => dispatch({ type: "ratingFilter", filterBy: 5})} className="category-input"/>
							<span className="category-input-label">5 Stars only</span>
						</label>
						<label className="category-input-container">
							<input type="radio" name="rating" onChange={() => dispatch({ type: "ratingFilter", filterBy: 4})} className="category-input"/>
							<span className="category-input-label">4 Starts & above</span>
						</label>
						<label className="category-input-container">
							<input type="radio" name="rating" defaultChecked onChange={() => dispatch({ type: "ratingFilter", filterBy: 3})} className="category-input"/>
							<span className="category-input-label">3 Stars & above</span>
						</label>
					</div>
					<div className="sortby-price-filter">
						<h3>Sort by price</h3>
						<label className="category-input-container">
							<input type="radio" name="price" defaultChecked onChange={() => dispatch({ type: "priceFilter", filterBy: "lowToHigh"})} className="category-input"/>
							<span className="category-input-label">Low to high</span>
						</label>
						<label className="category-input-container">
							<input type="radio" name="price" onChange={() => dispatch({ type: "priceFilter", filterBy: "highToLow"})} className="category-input"/>
							<span className="category-input-label">High to low</span>
						</label>
					</div>
					<div className="category-filter">
						<h3>Category</h3>
						<label className="category-input-container">
							<input type="checkbox" onChange={() => dispatch({ type: "spacTrendAssuredFilter"})} className="category-input"/>
							<span className="category-input-label">spacTrend Assured</span>
						</label>
					</div>
				</div>


				<div className="products-section flex-row">
				{
					finalProductList.map(item => 
							<div key={item._id} className="ecom-card vertical-card product-list">
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
												<h4 className="final-price">{item.finalPrice}</h4>
												<h4 className="original-price">{item.originalPrice}</h4>
											</div>
											<h4 className="product-discount">( {item.discount} OFF )</h4>
										</div>
									</div>
									<div className="card-actions">
										<div className="card-action-buttons">
											<button onClick={addToCart} className="btn text-button">Add to cart</button>
										</div>
										<div className="card-action-icons">
											<button onClick={addToWishlist} className="btn icon-button" title="Add to favorites"><i className="fas fa-heart"></i></button>
										</div>
									</div>
								</div>                
							</div>
						)
				}
				</div>
			</div>
        </div>
    );
};

export default Products;