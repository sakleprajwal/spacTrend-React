import { createContext, useContext, useReducer } from "react";
import axios from 'axios';
import { cartReducer } from "./cartReducer";
import Toaster from '../../components/Toaster/Toaster';
import { useAuth } from "../authentication-context/auth-context";

const cartContext = createContext([]);

const CartProvider = ({children}) => {
    const [{ cartItems, wishlistItems }, cartDispatch] = useReducer(cartReducer, {
        cartItems: [],
        wishlistItems: [],
    })
    const {isLoggedIn} = useAuth()

    const addToCart = async(product) => {
        try{
            const decodedToken = localStorage.getItem("token");

            const res = await axios.post('/api/user/cart', product, {
                headers: {
                    'authorization': decodedToken
                }
            });
            if(isLoggedIn && res.status === 201) {
                product.qty = 1;
                cartDispatch({ type: "addToCart", payload: product})
    			Toaster({message: "Added to cart", type: "info"});
            } else Toaster({message: "Please login", type: "error"});
        } catch(err) {
            Toaster({message: "Please login", type: "error"});
        }
    }

    const addToWishlist = async(product) => {
        try{
            const decodedToken = localStorage.getItem("token");

            const res = await axios.post('/api/user/wishlist', product, {
                headers: {
                    'authorization': decodedToken
                }
            });
            if(isLoggedIn && res.status === 201) {
                cartDispatch({ type: "addToWishlist", payload: product});
                Toaster({message: "Added to wishlist", type: "info"});
            } else Toaster({message: "Please login", type: "error"});
        } catch(err) {
            Toaster({message: "Please login", type: "error"});
        }
    }

    const updateProductQty = (productId, operation) => {
        cartItems.map(item => {
            if(item._id === productId && operation === "increament")
                item.qty += 1
            else if(item._id === productId && operation === "decreament")
                item.qty -= 1
        })
        cartDispatch({ type: "updateProductQty", payload: cartItems })
    }

    const removeFromCart = (productId) => {
        const cartItemsAfterRemove = cartItems.filter(item => item._id !== productId)
        cartDispatch({ type: "removeFromCart", payload: cartItemsAfterRemove })
        Toaster( {message: "Removed from cart", type: "info"} );
    }

    const removeFromWishlist = (productId) => {
        const wishlistItemsAfterRemove = wishlistItems.filter(item => item._id !== productId)
        cartDispatch({ type: "removeFromWishlist", payload: wishlistItemsAfterRemove })
        Toaster( {message: "Removed from wishlist", type: "info"} );
    }

    const resetCart = () => {
        cartDispatch({ type: "resetCart", payload: [] })
    }

    return(
        <cartContext.Provider value={{
                    cartItems,
                    wishlistItems,
                    addToCart,
                    addToWishlist,
                    updateProductQty,
                    removeFromCart,
                    removeFromWishlist,
                    resetCart,
                }
            }>
            {children}
        </cartContext.Provider>
    )
} 

const useCart = () => useContext(cartContext);

export { useCart, CartProvider }