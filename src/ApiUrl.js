import React, { createContext, useState } from 'react';

export const ApiContext = createContext('');

const ApiUrlProvider = ({ children }) => {
    // Backend URL API
    const [baseURL] = useState('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/')
    return (
        <ApiContext.Provider
            value={{baseURL}}
        >
            {children}
        </ApiContext.Provider>
    );
}

export default ApiUrlProvider;