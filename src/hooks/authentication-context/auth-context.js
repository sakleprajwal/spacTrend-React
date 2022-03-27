import { createContext } from "react";
import { useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [login, setLogin] = useState(false)

    return (
        <AuthContext.Provider value={{login, setLogin}}>
            { children }
        </AuthContext.Provider>
    )
}

export {AuthProvider}