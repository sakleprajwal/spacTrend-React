import { createContext } from "react";
import { useState } from "react";


const wishlistContext = createContext({itemsInWishlist: 4});

const WishlistProvider = ({children}) => {
    const [itemsInWishlist, setItems] = useState(0)
    const addToWishlist = () => {
        setItems(itemsInWishlist+1)
    }
    const removeFromWishlist = () => {
        setItems(itemsInWishlist-1)
    }
    return(
        <wishlistContext.Provider value={{itemsInWishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </wishlistContext.Provider>
    )
}


 export { wishlistContext, WishlistProvider }