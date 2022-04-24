import { React, useState } from 'react';
import "../../styles/Products.css";
import { useMediaQuery } from 'react-responsive';

const FilterContainer = (props) => {
	const {dispatch, priceRangeFilter} = props;

    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
	let initialStyle = {}
	if(isMobile)
		initialStyle = {display: "none"};
	else
		initialStyle = {display: "flex",flexDirection: "column"};

    const[filterToggleStyle, setFilterToggleStyle] = useState(initialStyle)
	const[toggle, setToggle] = useState(true);

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
        </div>
    );
};

export default FilterContainer;