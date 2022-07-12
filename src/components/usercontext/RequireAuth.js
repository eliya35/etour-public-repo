import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom'
import { UserContext } from './UserProvider';

function useAuth() {
    return useContext(UserContext)
}

export function RequireAuth({ children }) {
    let auth = useAuth()
    let location = useLocation()

    if (!auth.user) {
        return <Navigate to='/login-required/' state={{ from: location }} replace />
    }

    return children
}