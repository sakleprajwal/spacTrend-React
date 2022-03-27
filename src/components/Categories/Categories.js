import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../styles/App.css"
import { useEffect } from 'react';
import { useContext } from 'react';
import {categoryContext} from '../../hooks/category-context/category-context.js'

const Categories = () => {
    const [Categories, setCategories] = useState([]);

    const fetchCategories = async () => {
          const { data } = await axios.get("/api/categories");
          setCategories(data.categories);
      };

    const {setCategory} = useContext(categoryContext)

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div>
            <div className="categories-section flex-row">
                {
                    Categories.map(item =>
                        <Link key={item.id} to="/products" onClick={() => setCategory(item.categoryName)} className="category-link"><div className="category-item flex-column"><img src={item.categoryImgUrl} alt="Category"/> <h4>{item.categoryName}</h4></div></Link>
                      )
                }
            </div>
        </div>
    );
};

export default Categories;