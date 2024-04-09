import React, { createContext, useState, useEffect } from "react";

const AuthContext = React.createContext({});

export function useAuth(){
    return React.useContext(AuthContext);
}

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        auth,
        setAuth,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;