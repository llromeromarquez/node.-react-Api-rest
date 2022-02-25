import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(
        JSON.parse(sessionStorage.getItem("token")) || null
    );
    
    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user)); 
        sessionStorage.setItem("token", JSON.stringify(token));
    }, [user, token]);

    const contextValue = {
        user,
        token,
        login(nombre, Token) {
            setUser(nombre);
            setToken(Token);
        },
     
        logout() {
            setUser(null);
            setToken(null);
        },
     
        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value = {contextValue}>
     
       {children} 
    
    </AuthContext.Provider>
}



export default AuthProvider;
