import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';


export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/current/'
        )
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log("An error occurred while fetching users information")
            })
    }, []);

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}