import {createContext, useContext, useState} from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const loginContext = (data) =>{
        localStorage.setItem('token', data.token);
        setUser(data.user);
    }
    const logoutContext = () => {
        localStorage.removeItem('token');
        setUser(null)
    }
    const value = {
        user,
        loginContext,
        logoutContext,
    }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within the AuthProvider');
    }
    return context;
}
