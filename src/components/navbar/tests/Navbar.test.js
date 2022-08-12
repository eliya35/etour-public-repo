import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { NotificationProvider } from '../../mydestinations/Cart';
import { UserProvider } from '../../usercontext/UserProvider';
import NavBar from '../Navbar';


test("renders etour logo", () => {
    render(
        <BrowserRouter>
            <CartProvider>
                <UserProvider>
                    <NotificationProvider>
                        <NavBar />
                    </NotificationProvider>
                </UserProvider>
            </CartProvider>
        </BrowserRouter>
    );

    const etourLogo = screen.getByRole('img');
    expect(etourLogo).toBeVisible();
});