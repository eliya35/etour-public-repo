import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../usercontext/UserProvider';
import '../Styles/loginrequired.css';


function LoginRequired() {
    const { user } = useContext(UserContext);

    return (
        <div className=' login-required'>
            {
                user &&
                <Navigate to='/' replace />
            }

            {
                !user &&
                <div className="no-user">
                    <h1>Login Required!!</h1>
                    <p>
                        You are seeing this page because the feature/page you are trying to access can
                        only be accessed when you are logged in. Sorry for any inconvenience Adventurer.
                        To access all features you are recommended to <a href="/login/">Login </a>
                        or <a href="/register">Register a free adventure account</a>.
                    </p>

                </div>
            }
        </div>
    );
}

export default LoginRequired;