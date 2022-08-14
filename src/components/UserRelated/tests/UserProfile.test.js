import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from '../UserProfile';
import FakeUserProvider from '../../navbar/tests/FakeUserProvider'


test("welcome title should be renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <UserProfile />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const welcomeMessage = screen.getByRole("heading", { level: 1 });
    const fakeUsername = "foo";

    expect(welcomeMessage.textContent).toBe(`Welcome ${fakeUsername}`);
});

test("renders introductory paragraph correctly", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <UserProfile />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const introductoryParagraph = screen.getByTestId("introductory-paragraph");
    expect(introductoryParagraph).toBeInTheDocument();
});

test("a link to my account is renderd in the above paragraph", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <UserProfile />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const myAccountLink = screen.getByRole("link", { name:"Clicking Here"});
    expect(myAccountLink).toBeInTheDocument();
});