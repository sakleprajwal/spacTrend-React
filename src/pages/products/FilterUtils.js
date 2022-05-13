const ratingFilterFunc = (productList, ratingFilter) => {
    return productList.filter((product) => product.rating >= ratingFilter)
}

const priceFilterFunc = (productList, priceFilter) => {
    if(priceFilter === "lowToHigh")
        return productList.sort( (a, b) => a.finalPrice - b.finalPrice );
    return productList.sort( (a, b) => b.finalPrice - a.finalPrice );
}

const spacTrendAssuredFilterFunc = (productList, spacTrendAssuredFilter) => {
    if(spacTrendAssuredFilter === true)
        return productList.filter( (product) => product.spacTrendAssured === true)
    return productList
}

const priceRangeFilterFunc = (productList, priceRangeFilter) => {
    return productList.filter((product) => product.finalPrice <= priceRangeFilter)
}

export {
    ratingFilterFunc,
    priceFilterFunc,
    spacTrendAssuredFilterFunc,
    priceRangeFilterFunc
}