import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
    const [data, setData] = useState({});
    return (
        <Context.Provider value={{ data, setData }}>
            {children}
        </Context.Provider>
    );
};
