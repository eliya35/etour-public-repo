import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/api/user/current/')
        axios.get('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/current/')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log("An error occured while retriving user credentials");
            })
    }, []);

    if (isLoading) {
        return <div><span>Loading...</span></div>
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

