import MockmanEs from 'mockman-js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Products from '../pages/products/Products';
import Wishlist from '../pages/Wishlist/Wishlist';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/wishlist' element={<Wishlist/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/mockman' element={<MockmanEs/>} />
            </Routes>
        </div>
    );
};

export default Router;