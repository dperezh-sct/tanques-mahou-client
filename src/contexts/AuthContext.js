import React, { useState } from 'react'
import { validateAuth } from '../services/api';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(validateAuth);
    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            {children}
        </AuthContext.Provider>
    );

};