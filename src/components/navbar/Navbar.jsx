import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NotificationContext } from '../mydestinations/Cart';
import { UserContext } from '../usercontext/UserProvider';
import SearchBar from './SearcBar';
import axios from 'axios';
import '../Styles/navbar.css';


const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    let navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const notification = useContext(NotificationContext);

    const handleSignOut = () => {
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/logout/'
        );
        setUser(null);
        navigate('/');
    };

    return (
        <>
            <nav className="navbar" >
                <Link to='/' className='navbar-logo'>
                    <img src="https://etour-first-backet.s3.amazonaws.com/etour-logo/etour-logo-no-bg.png" alt="Etour" />
                </Link>

                {/* users on mobile */}
                <div style={{ visibility: user ? "visible" : "hidden" }} className="current-user-mobile">
                    <span
                        className='adventurer-name'
                        data-testid='my-profile'
                        onClick={() => navigate('/profile/')}
                    >
                        My Profile
                    </span>

                    <div className="sign-out-btn">
                        <button
                            type='button'
                            aria-label='sign out button'
                            className='btn btn-outline-primary btn-sm'
                            onClick={handleSignOut}
                        >
                            <i data-testid="user-template-icon" className="bi bi-person-circle" /> Sign Out
                        </button>
                    </div>
                </div>

                {/* non user on mobile */}
                <div style={{ visibility: !user ? "visible" : "hidden" }} className="no-user-mobile">
                    <div className="login-nav-btn">
                        <span data-testid="no-user-greating">Hello: Adventurer</span>

                        <button
                            type='button'
                            aria-label='sign in button'
                            className='btn btn-outline-success btn-sm'
                        >
                            <a
                                href="/logout/"
                            >
                                <i
                                    data-testid="icon-template"
                                    className="bi bi-person-circle"
                                />Sign in
                            </a>
                        </button>
                    </div>
                </div>

                {/* navbar items */}
                <div data-testid="mobile-searchbar" className="mobile-search-app">
                    <SearchBar placeholder="Search Destination..." />
                </div>

                <div data-testid="menu-icon" className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul data-testid="nav-menu" className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item" aria-label='Featured'>
                        <Link
                            to='/featured/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Featured
                        </Link>
                    </li>

                    <li className="nav-item" aria-label='My Destination'>
                        <Link
                            to='/mylist/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            My Destination:
                            <span
                                className='badge badge-light'
                                id='notification-numb'
                                data-testid="notification-numb"
                            >
                                {notification}
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item" aria-label='Contact Us'>
                        <Link
                            to='/contact/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Contact Us
                        </Link>
                    </li>

                    <div className="search-app" data-testid="searchbar-for-computer">
                        <SearchBar placeholder="Search Destination..." />
                    </div>

                    {/* users on computers */}
                    <div style={{ visibility: user ? "visible" : "hidden" }} className='current-user'>
                        <span
                            className='adventurer-name'
                            onClick={() => navigate('/profile/')}
                            data-testid="profile-account"
                        >
                            My Profile/ Account
                        </span>

                        <div className="sign-out-btn">
                            <button
                                type='button'
                                aria-label='computer sign out button'
                                className='btn btn-outline-primary btn-sm'
                                onClick={handleSignOut}
                            >
                                <i data-testid="person-icon-computer" className="bi bi-person-circle" /> Sign Out
                            </button>
                        </div>
                    </div>

                    {/* non users on computers */}
                    < div style={{ visibility: !user ? "visible" : "hidden" }} className='user-null'>
                        <span data-testid="greating-non-user">Hello: Adventurer</span>
                        <div className="login-nav-btn">
                            <button
                                type='button'
                                className='btn btn-outline-success btn-sm'
                                aria-label='computer sign in button'
                            >
                                <a href="/logout/">Log in</a>
                            </button>
                        </div>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;