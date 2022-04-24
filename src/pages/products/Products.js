import { React, useState, useContext, useEffect, useReducer } from 'react';
import "../../styles/Products.css";
import axios from 'axios';
import Categories from '../../components/Categories/Categories';
import { categoryContext } from '../../hooks/category-context/category-context';
import ProductCard from './ProductCard';
import {
    ratingFilterFunc,
    priceFilterFunc,
    spacTrendAssuredFilterFunc,
    priceRangeFilterFunc
} from './FilterUtils'
import { ProductReducer } from './ProductReducer'
import FilterContainer from './FilterContainer';

const Products = () => {
	const [productList, setProductList] = useState([])
	const {category} = useContext(categoryContext);

	const fetchProductList = async () => {
		const { data } = await axios.get('/api/products');
		setProductList(data.products.filter((product) => product.category === category));
	}

	const [{ratingFilter, priceFilter, spacTrendAssuredFilter, priceRangeFilter}, dispatch] = useReducer(
		ProductReducer,
		{ratingFilter: 3, priceFilter: "lowToHigh", spacTrendAssuredFilter: false, priceRangeFilter: 5000}
	)

	const priceFilteredProductList = priceFilterFunc(productList, priceFilter)
	const ratingFilteredProductList = ratingFilterFunc(priceFilteredProductList, ratingFilter)
	const spacTrendAssuredFilteredProductList = spacTrendAssuredFilterFunc(ratingFilteredProductList, spacTrendAssuredFilter)
	const finalProductList = priceRangeFilterFunc(spacTrendAssuredFilteredProductList, priceRangeFilter)

	useEffect(() => {
		fetchProductList();
	}, [category])

    return (
        <div>
			<Categories/>

			<div className="product-listing-section flex-row">
				<FilterContainer dispatch = {dispatch} priceRangeFilter = {priceRangeFilter} />

				<div className="products-section flex-row">
				{
					finalProductList.map(item => 
						<ProductCard key={item._id} product={item} />
					)
				}
				</div>
			</div>
        </div>
    );
};

export default Products;