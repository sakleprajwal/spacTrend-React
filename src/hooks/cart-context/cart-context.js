import { createContext } from "react";
import { useState } from "react";


const cartContext = createContext({itemsInCart: 4});

const CartProvider = ({children}) => {
    const [itemsInCart, setItems] = useState(0)
    const addToCart = () => {
        setItems(itemsInCart+1)
    }
    const removeFromCart = () => {
        setItems(itemsInCart-1)
    }

    return(
        <cartContext.Provider value={{itemsInCart, addToCart, removeFromCart}}>
            {children}
        </cartContext.Provider>
    )
}


 export { cartContext, CartProvider }