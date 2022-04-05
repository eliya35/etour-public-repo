import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import {useLocation, Navigate} from 'react-router-dom'


function useAuth() {
    return useContext(AuthContext)
}

export function RequireAuth({ children }) {
    let auth = useAuth()
    let location = useLocation()

    if (!auth.user) { 
        return <Navigate  to='/login-reqireid/'  state={{ from: location }} replace/>
    }

    return children
}
