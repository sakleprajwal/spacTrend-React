import { createContext } from "react";
import { useState } from "react";


const categoryContext = createContext({})

const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState("Men");
    return (
        <categoryContext.Provider value={{category, setCategory}}>
            {children}
        </categoryContext.Provider>
    )
}

export {categoryContext, CategoryProvider}