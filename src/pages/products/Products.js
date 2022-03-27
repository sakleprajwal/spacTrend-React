import React from 'react';
import "../../styles/Products.css";
import Categories from '../../components/Categories/Categories';

const Products = () => {
    return (
        <div>
			<Categories/>

			<div className="product-listing-section flex-row">
				<div className="filter-section">
					<h3>Filters</h3>
					<div className="price-filter">
						<h3>Price</h3>
						<div className="slidecontainer">
							<input type="range" min="100" max="10000" step="100" defaultValue="50" className="slider" id="myRange"/>
							<p>Price range: 0 to  <span id="demo"></span></p>
						</div>
					</div>
					<div className="category-filter">
						<h3>Category</h3>
						<label className="category-input-container">
							<input type="checkbox" className="category-input"/>
							<span className="category-input-label">spacTrend Assured</span>
						</label>
					</div>
					<div className="rating-filter">
						<h3>Rating</h3>
						<label className="category-input-container">
							<input type="radio" name="rating" className="category-input"/>
							<span className="category-input-label">5 Stars only</span>
						</label>
						<label className="category-input-container">
							<input type="radio" name="rating" className="category-input"/>
							<span className="category-input-label">4 Starts & above</span>
						</label>
						<label className="category-input-container">
							<input type="radio" name="rating" defaultChecked className="category-input"/>
							<span className="category-input-label">3 Stars & above</span>
						</label>
					</div>
					<div className="sortby-price-filter">
						<h3>Sort by price</h3>
						<label className="category-input-container">
							<input type="radio" name="price" className="category-input"/>
							<span className="category-input-label">Low to high</span>
						</label>
						<label className="category-input-container">
							<input type="radio" name="price" className="category-input"/>
							<span className="category-input-label">High to low</span>
						</label>
					</div>
				</div>

				{/* <script>
					{var slider = document.getElementById("myRange");
					var output = document.getElementById("demo");
					output.innerHTML = slider.value;
					
					slider.oninput = function() {
					output.innerHTML = this.value;
					}}
				</script> */}

				

				<div className="products-section flex-row">
					<div className="ecom-card vertical-card product-list">
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
									<button className="btn text-button">Add to cart</button>
								</div>
								<div className="card-action-icons">
									<button className="btn icon-button" title="Add to favorites"><i className="fas fa-heart"></i></button>
								</div>
							</div>
						</div>                
					</div>
				</div>
			</div>
        </div>
    );
};

export default Products;