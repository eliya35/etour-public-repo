import React from 'react';
import NavBar from '../Navbar';
import { mount, shallow } from 'enzyme'
import { CartProvider } from "react-use-cart";
import { AuthProvider } from '../../authprovider/AuthProvider';
import { UserProvider } from '../../usercontext/UserProvider';
import { BrowserRouter } from "react-router-dom";

describe('NavBar tests', () => {
    test('renders without crashing', () => {
        const wrapper = mount(
            <BrowserRouter>
                <UserProvider>
                    <NavBar />
                </UserProvider>
            </BrowserRouter>
        )
        expect(wrapper.find('span').text()).toBe('Loading...')

    })
})