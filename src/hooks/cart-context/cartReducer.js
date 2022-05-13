export const cartReducer = (state, {type, payload}) => {
    switch(type){
        case "addToCart":
            return {
                ...state,
                cartItems: [...state.cartItems, payload],
            }
        case "addToWishlist":
            return {
                ...state,
                wishlistItems: [...state.wishlistItems, payload],
            }
        case "updateProductQty":
            return {
                ...state,
                cartItems: payload,
            }
        case "removeFromCart":
            return {
                ...state,
                cartItems: payload
            }
        case "removeFromWishlist":
            return {
                ...state,
                wishlistItems: payload
            }
        case "resetCart":
            return {
                ...state,
                cartItems: payload,
            }
    }
}