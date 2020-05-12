import React, { useState } from 'react'

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
    const [empresa, setEmpresa] = useState([]);
    const [nombre, setNombre] = useState('');
    const [state, setState] = useState(false);

    return (
        <UserContext.Provider value={{
            empresa, setEmpresa, nombre, setNombre, state, setState
        }}>
            {children}
        </UserContext.Provider>
    );

};