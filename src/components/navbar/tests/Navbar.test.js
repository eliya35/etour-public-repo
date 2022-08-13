import React, { useState } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../../usercontext/UserProvider';
import NavBar from '../Navbar';


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

test("renders etour logo", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const etourLogo = screen.getByRole('img');
    expect(etourLogo).toBeVisible();
});

test("renders my profile link if there is user", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const myProfileLink = screen.getByTestId('my-profile');
    expect(myProfileLink).toBeInTheDocument();
});

test("renders a sign out button if there is user", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole('button', { name: "sign out button" });
    expect(singOutBtn).toBeInTheDocument();
});

test("the sign out button should have the correct name", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole('button', { name: "sign out button" });
    expect(singOutBtn.textContent).toBe(" Sign Out");
});

test("renders a user template icon on sing in button", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const userTemplateIcon = screen.getByTestId("user-template-icon");
    expect(userTemplateIcon).toBeInTheDocument();
});

test("sing out button if clicked My Profile link desapears", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const myProfileLink = screen.getByTestId('my-profile');
    const singOutBtn = screen.getByRole('button', { name: "sign out button" });

    fireEvent.click(singOutBtn);

    expect(myProfileLink).toBeInTheDocument();
});

test("hello adventurer greating should not be visibale if there is user", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const noSingInUserGreating = screen.getByTestId("no-user-greating");
    expect(noSingInUserGreating).not.toBeVisible();
});

test("sign in button should not be visibale if user is signed in", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const signInBtn = screen.getByRole('button', { name: "sign in button" });
    expect(signInBtn).not.toBeVisible();
});

test("hello adventurer greating should be visibale if there NO user", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const noSingInUserGreating = screen.getByTestId("no-user-greating");
    const singOutBtn = screen.getByRole('button', { name: "sign out button" });

    fireEvent.click(singOutBtn);
    expect(noSingInUserGreating).toBeVisible();
});

test("sign in button should be visibale if user is NOT signed in", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const Loginlink = screen.getByRole("link", { name: "Sign in" })
    expect(Loginlink).toBeInTheDocument();
});

test("sign in button should have the correct name", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const signInBtn = screen.getByRole("button", { name: "sign in button" })
    expect(signInBtn.textContent).toBe("Sign in");
});

test("sign in button should have a link elemet to login users", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const signInBtn = screen.getByRole('button', { name: "sign in button" });
    const singOutBtn = screen.getByRole('button', { name: "sign out button" });

    fireEvent.click(singOutBtn);

    expect(signInBtn).toBeVisible();
});

test("a person icon template should be renderd in the button", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const personTemplateIcon = screen.getByTestId("icon-template");

    expect(personTemplateIcon).toBeInTheDocument();
});

test("mobile search bar should be renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const mobileSearchBar = screen.getByTestId("mobile-searchbar");
    expect(mobileSearchBar).toBeInTheDocument();
});

test("menue icon is renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const mobileSearchBar = screen.getByTestId("menu-icon");
    expect(mobileSearchBar).toBeInTheDocument();
});

test("nav menu is renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const navMenu = screen.getByTestId("nav-menu");
    expect(navMenu).toBeInTheDocument();
});

test("nav item Featured link is renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const featuredNavLink = screen.getByRole("listitem", { name: "Featured" });
    expect(featuredNavLink).toBeInTheDocument();
});

test("nav item my Destination link is renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const destinationNavLink = screen.getByRole("listitem", { name: "My Destination" });
    expect(destinationNavLink).toBeInTheDocument();
});

test("notification number is renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const notificationNumb = screen.getByTestId("notification-numb");
    expect(notificationNumb).toBeInTheDocument();
});

test("nav item contact Us link is renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const contactUsNavLink = screen.getByRole("listitem", { name: "Contact Us" });
    expect(contactUsNavLink).toBeInTheDocument();
});

test("search bar for laptops and computers should be renderd", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const searchBar = screen.getByTestId("searchbar-for-computer");
    expect(searchBar).toBeInTheDocument();
});

// laptop & computers user  logic
test("my profile/account link should be renderd if user is signed in", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const myProfileAccount = screen.getByTestId("profile-account");
    expect(myProfileAccount).toBeInTheDocument();
});

test("sign out button should be renderd if user is signed in on computer", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });
    expect(singOutBtn).toBeVisible();
});

test("sign out button should have the correct name", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });
    expect(singOutBtn.textContent).toBe(" Sign Out")
});

test("person icon should be visible on sign out button", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const personIcon = screen.getByTestId("person-icon-computer");
    expect(personIcon).toBeVisible();
});

test("my profile/account link should NOT be visible if no user is signed in", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const myProfileAccount = screen.getByTestId("profile-account");
    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });

    fireEvent.click(singOutBtn);

    expect(myProfileAccount).not.toBeVisible();
});

test("hello adventurer greating should be visibale if there is NO user singend in (computers)", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const noSingInUserGreating = screen.getByTestId("greating-non-user");
    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });

    fireEvent.click(singOutBtn);

    expect(noSingInUserGreating).toBeVisible();
});

test("sign out button should be NOT be visibale if there is NO user singend in (computers)", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });

    fireEvent.click(singOutBtn);

    expect(singOutBtn).not.toBeVisible();
});

test("sign in button should be visibale if there is NO user singend in (computers)", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });
    const signInBtn = screen.getByRole("button", { name: "computer sign in button" });

    fireEvent.click(singOutBtn);

    expect(signInBtn).toBeVisible();
});

test("a link to sign in should be renderd in the button (computers)", () => {
    render(
        <BrowserRouter>
            <FakeUserProvider>
                <NavBar />
            </FakeUserProvider>
        </BrowserRouter>
    );

    const singOutBtn = screen.getByRole("button", { name: "computer sign out button" });
    const signInBtn = screen.getByRole("button", { name: "computer sign in button" });

    fireEvent.click(singOutBtn);

    expect(signInBtn).toHaveTextContent("Log in");
});