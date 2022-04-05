import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from '../../authprovider/AuthProvider';
import { UserProvider } from '../../usercontext/UserProvider';

import { mount, shallow } from 'enzyme';
import UserProfile from '../UserProfile'




describe("User profile tests", () => {

    let wrapper;
    beforeEach(
        () => {
            wrapper = shallow(
                <BrowserRouter>
                    <CartProvider>
                        <AuthProvider>
                            <UserProvider>
                                <UserProfile />
                            </UserProvider>
                        </AuthProvider>
                    </CartProvider>
                </BrowserRouter>
            );
        })
    test('render the initial profile picture for users without profile img', () => {
        // expect(wrapper.find(''))
    })
})