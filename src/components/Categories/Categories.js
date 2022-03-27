import React from 'react';
import "../../styles/App.css";
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div>
            <div className="categories-section flex-row">
                <Link to="/products" className="category-link"><div className="category-item flex-column"><img src="asset/fashion.png" alt="Category" /> <h4>Category1</h4></div></Link>
                <Link to="/products" className="category-link"><div className="category-item flex-column"><img src="asset/fashion.png" alt="Category" /> <h4>Category1</h4></div></Link>
                <Link to="/products" className="category-link"><div className="category-item flex-column"><img src="asset/fashion.png" alt="Category" /> <h4>Category1</h4></div></Link>
                <Link to="/products" className="category-link"><div className="category-item flex-column"><img src="asset/fashion.png" alt="Category" /> <h4>Category1</h4></div></Link>
                <Link to="/products" className="category-link"><div className="category-item flex-column"><img src="asset/fashion.png" alt="Category" /> <h4>Category1</h4></div></Link>
            </div>
        </div>
    );
};

export default Categories;