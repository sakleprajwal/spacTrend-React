import React from 'react';
import "../../styles/App.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
    const [Categories, setCategories] = useState([]);

    const fetchCategories = async () => {
          const { data } = await axios.get("/api/categories");
          setCategories(data.categories);
      };

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div>
            <div className="categories-section flex-row">
            {
                    Categories.map(item =>
                        <Link key={item.id} to="/products" className="category-link"><div className="category-item flex-column"><img src={item.categoryImgUrl} alt="Category"/> <h4>{item.categoryName}</h4></div></Link>
                      )
                }
            </div>
        </div>
    );
};

export default Categories;