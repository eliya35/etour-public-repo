import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import loader from './clockwise.svg'


export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    useEffect(() => {
        axios.get('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/current/')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(setLoading(false))
    }, []);

    if (isLoading) {
        return <img src={loader} className="loading-clockwise" alt="loading..." />
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};