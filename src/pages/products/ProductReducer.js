const ProductReducer = (state, action) => {
    switch(action.type){
        case "ratingFilter":
            return {
                ...state,
                ratingFilter: action.filterBy
            }
        case "priceFilter":
            return {
                ...state,
                priceFilter: action.filterBy
            }
        case "spacTrendAssuredFilter":
            if(state.spacTrendAssuredFilter===true)
                return {...state, spacTrendAssuredFilter: false}
            return {...state, spacTrendAssuredFilter: true}
        case "priceRangeFilter":
            return {
                ...state,
                priceRangeFilter: action.filterBy
            }
    }
}

export { ProductReducer }