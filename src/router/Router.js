import MockmanEs from 'mockman-js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Products from '../pages/products/Products';
import Wishlist from '../pages/Wishlist/Wishlist';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import BrokenLink from '../pages/404/BrokenLink';
import { RequireAuth } from '../hooks/RequireAuth/RequireAuth';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/wishlist' element={ <RequireAuth> <Wishlist/> </RequireAuth> } />
                <Route path='/cart' element={ <RequireAuth> <Cart/> </RequireAuth> } />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/mockman' element={<MockmanEs/>} />
                <Route path='*' element={<BrokenLink />} />
            </Routes>
        </div>
    );
};

export default Router;