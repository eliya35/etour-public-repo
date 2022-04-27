import React, { useContext } from 'react';
import { UserContext } from '../usercontext/UserProvider';
import { Navigate } from 'react-router-dom';

import '../Styles/loginrequired.css'


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
                        You are seeing this page because the feature/page you are tring to access can
                        only be accessed when you are logged in. Sorry for any inconvinience Adventurer.
                        To accecss all features you are recomended to <a href="/login/">Login </a>
                        or <a href="/register">Register an adventure account</a>.
                    </p>

                </div>
            }
        </div>
    );
}

export default LoginRequired;