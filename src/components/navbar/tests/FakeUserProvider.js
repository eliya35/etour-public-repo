import React, { useState } from 'react';
import { UserContext } from '../../usercontext/UserProvider';


const FakeUserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "foo",
        last_name: "baz",
        email: "foobaz@gmail.com"
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
export default FakeUserProvider;