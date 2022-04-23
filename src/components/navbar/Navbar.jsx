import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { NotificationContext } from '../mydestinations/Cart';
import { UserContext } from '../usercontext/UserProvider';
import SearchBar from './SearcBar'
import axios from 'axios';


import '../Styles/navbar.css'


// Handle Navbar
const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    let navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const notification = useContext(NotificationContext)


    const handleSignOut = () => {
        // axios.get('http://127.0.0.1:8000/api/logout/');
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/logout/'
        );
        setUser(null);
        navigate('/');
    };


    return (
        <>
            <nav className="navbar" >
                <Link to='/' className='navbar-logo'>Etour</Link>
                {
                    user &&
                    <div className="current-user-mobile">
                        <span className='adventurer'>Hi there: </span>
                        <span
                            className='adventurer-name'
                            onClick={() => navigate('/profile/')}
                        > <i class="bi bi-person-circle"></i> {user.username}
                        </span>
                        <div className="sign-out-btn">
                            <button
                                type='button'
                                className='btn btn-outline-primary btn-sm'
                                onClick={handleSignOut}
                            >Sign Out
                            </button>
                        </div>
                    </div>
                }
                {
                    !user &&
                    <div className="no-user-mobile">
                        <div className="login-nav-btn">
                            <span>Hello: Adventurer</span>
                            <button
                                type='button'
                                className='btn btn-outline-success btn-sm'
                            ><a href="/logout/"><i class="bi bi-person-circle"></i> Sign in</a>
                            </button>
                        </div>
                    </div>
                }
                <div className="mobile-search-app">
                    <SearchBar placeholder="Search Destination..." />
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link
                            to='/featured/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Featuerd
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to='/mylist/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >My Destination: <span className='badge badge-light' id='notification-numb'>{notification}</span>
                            <span className='sr-only'>destinations</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to='/donate/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Donate
                        </Link>
                    </li>
                    <div className="serch-app">
                        <SearchBar placeholder="Search Destination..." />
                    </div>

                    {/* If Logged in... */}

                    {
                        user &&
                        <div className='current-user'>
                            <span className='adventurer'>Whats Sup!: </span>

                            <span
                                className='adventurer-name'
                                onClick={() => navigate('/profile/')}
                            > <i class="bi bi-person-circle"></i> {user.username}
                            </span>
                            <div className="sign-out-btn">
                                <button
                                    type='button'
                                    className='btn btn-outline-primary btn-sm'
                                    onClick={handleSignOut}
                                >Sign Out
                                </button>
                            </div>
                        </div>
                    }


                    {/* else do this... */}

                    {
                        !user &&
                        < div className='user-null'>
                            <span>Hello: Adventurer</span>
                            <div className="login-nav-btn">
                                <button
                                    type='button'
                                    className='btn btn-outline-success btn-sm'
                                ><a href="/logout/">Log in</a>
                                </button>
                            </div>
                        </div>
                    }
                </ul>
            </nav>
        </>
    );
}

export default NavBar;