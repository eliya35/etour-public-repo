import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/user/current/')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
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