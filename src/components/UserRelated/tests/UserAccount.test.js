import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserAccount from '../UserAccount';
import FakeUserProvider from '../../navbar/tests/FakeUserProvider';


const UserAccountComponet =
    <BrowserRouter>
        <FakeUserProvider>
            <UserAccount />
        </FakeUserProvider>
    </BrowserRouter>

test("first name lable should be renderd", () => {
    render(UserAccountComponet);

    const firstNameLabel = screen.getByRole("heading", { name: "First name" });
    expect(firstNameLabel).toBeInTheDocument();
});

test("first name input node should be renderd", () => {
    render(UserAccountComponet);

    const firstNameInputNode = screen.getByTitle("enter your first name.");
    expect(firstNameInputNode).toBeInTheDocument();
});

test("first name input node should be empty", () => {
    render(UserAccountComponet);

    const firstNameInputNode = screen.getByTitle("enter your first name.");
    expect(firstNameInputNode.value).toBe("");
});

test("first name input node should have a value when a name is added", () => {
    render(UserAccountComponet);

    const firstNameInputNode = screen.getByTitle("enter your first name.");
    const fakeFirstName = "Smith";

    fireEvent.change(firstNameInputNode, { target: { value: fakeFirstName } });

    expect(firstNameInputNode.value).toBe(fakeFirstName);
});

test("first name error paragraph is renderd blank", () => {
    render(UserAccountComponet);

    const firstNameErrorNode = screen.getByTestId("first-name-error")

    expect(firstNameErrorNode.textContent).toBe("");
});

test("first name error paragraph fires if too short a name is inserted", () => {
    render(UserAccountComponet);

    const firstNameErrorNode = screen.getByTestId("first-name-error");
    const firstNameInputNode = screen.getByTitle("enter your first name.");
    const saveBtn = screen.getByRole("button", { name: "Save" });
    const fakeFirstName = "Sm";

    fireEvent.change(firstNameInputNode, { target: { value: fakeFirstName } });
    fireEvent.click(saveBtn);

    expect(firstNameErrorNode.textContent).toBe("The name is to short!");
});

test("first name error paragraph fires if too long a name is inserted", () => {
    render(UserAccountComponet);

    const firstNameErrorNode = screen.getByTestId("first-name-error");
    const firstNameInputNode = screen.getByTitle("enter your first name.");
    const saveBtn = screen.getByRole("button", { name: "Save" });
    const fakeFirstName = "Smhhhhhhhshshshfgtodhhhddgggggggggggggggggggggggggjjjjjjjjjjjjjjjjj";

    fireEvent.change(firstNameInputNode, { target: { value: fakeFirstName } });
    fireEvent.click(saveBtn);

    expect(firstNameErrorNode.textContent).toBe("The name is to long!");
});

test("last name lable should be renderd", () => {
    render(UserAccountComponet);

    const lastNameLabel = screen.getByRole("heading", { name: "Last name" });
    expect(lastNameLabel).toBeInTheDocument();
});

test("last name input node should be renderd", () => {
    render(UserAccountComponet);

    const lastNameInputNode = screen.getByTitle("enter your last name if any.");
    expect(lastNameInputNode).toBeInTheDocument();
});

test("last name input node should be empty", () => {
    render(UserAccountComponet);

    const lastNameInputNode = screen.getByTitle("enter your last name if any.");
    expect(lastNameInputNode.value).toBe("");
});

test("last name input node should have a value when a name is added", () => {
    render(UserAccountComponet);

    const lastNameInputNode = screen.getByTitle("enter your last name if any.");
    const fakeLastName = "Jhon";

    fireEvent.change(lastNameInputNode, { target: { value: fakeLastName } });

    expect(lastNameInputNode.value).toBe(fakeLastName);
});

test("last name error paragraph is renderd blank", () => {
    render(UserAccountComponet);

    const lastNameErrorNode = screen.getByTestId("last-name-error");

    expect(lastNameErrorNode.textContent).toBe("");
});

test("last name error paragraph fires if too short a name is inserted", () => {
    render(UserAccountComponet);

    const lastNameErrorNode = screen.getByTestId("last-name-error");
    const lastNameInputNode = screen.getByTitle("enter your last name if any.");
    const saveBtn = screen.getByRole("button", { name: "Save" });
    const fakeFirstName = "Jh";

    fireEvent.change(lastNameInputNode, { target: { value: fakeFirstName } });
    fireEvent.click(saveBtn);

    expect(lastNameErrorNode.textContent).toBe("The name is to short!");
});

test("last name error paragraph fires if too long a name is inserted", () => {
    render(UserAccountComponet);

    const lastNameErrorNode = screen.getByTestId("last-name-error");
    const lastNameInputNode = screen.getByTitle("enter your last name if any.");
    const saveBtn = screen.getByRole("button", { name: "Save" });
    const fakeLastName = "SmhhhhhhhshshshfgtodhhhddXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXjjjjjjjjjjjjjjjjj";

    fireEvent.change(lastNameInputNode, { target: { value: fakeLastName } });
    fireEvent.click(saveBtn);

    expect(lastNameErrorNode.textContent).toBe("The name is to long!");
});

test("email name lable should be renderd", () => {
    render(UserAccountComponet);

    const lastNameLabel = screen.getByRole("heading", { name: "Email" });
    expect(lastNameLabel).toBeInTheDocument();
});

test("email name input node should be renderd", () => {
    render(UserAccountComponet);

    const emailInputNode = screen.getByTitle("enter your email.");
    expect(emailInputNode).toBeInTheDocument();
});

test("email name input node should be empty", () => {
    render(UserAccountComponet);

    const emailInputNode = screen.getByTitle("enter your email.");
    expect(emailInputNode.value).toBe("");
});

test("email input node should have a value when email is added", () => {
    render(UserAccountComponet);

    const emailInputNode = screen.getByTitle("enter your email.");
    const fakeEmail = "JhonSmith@gmail.com";

    fireEvent.change(emailInputNode, { target: { value: fakeEmail } });

    expect(emailInputNode.value).toBe(fakeEmail);
});

test("email error paragraph is renderd blank", () => {
    render(UserAccountComponet);

    const emailErrorNode = screen.getByTestId("email-error");

    expect(emailErrorNode.textContent).toBe("");
});

// test("email error paragraph fires if no email is provided", () => {
//     render(UserAccountComponet);

//     const emailInputNode = screen.getByTitle("enter your email.");
//     const emailErrorNode = screen.getByTestId("email-error");
//     const saveBtn = screen.getByRole("button", { name: "Save" });
//     const blankEmail = "";

//     fireEvent.change(emailInputNode, { target: { value: blankEmail } });
//     fireEvent.click(saveBtn);

//     expect(emailErrorNode.textContent).toBe("Email is required!");
// });

test("email error paragraph fires if an invalid email inserted", () => {
    render(UserAccountComponet);

    const emailErrorNode = screen.getByTestId("email-error");
    const emailInputNode = screen.getByTitle("enter your email.");
    const saveBtn = screen.getByRole("button", { name: "Save" });
    const invalidEmail = "jh@123";

    fireEvent.change(emailInputNode, { target: { value: invalidEmail } });
    fireEvent.click(saveBtn);

    expect(emailErrorNode.textContent).toBe("Pleas input a valid email!");
});

test("a link to change username should be renderd ", () => {
    render(UserAccountComponet);

    const changeUsernameLink = screen.getByRole("link", { name: "Change Your Username" });

    expect(changeUsernameLink).toBeInTheDocument()
});

test("a link to change password should be renderd ", () => {
    render(UserAccountComponet);

    const changePasswordLink = screen.getByRole("link", { name: "Change Password" });

    expect(changePasswordLink).toBeInTheDocument();
});

test("save buttun should be renderd", () => {
    render(UserAccountComponet);

    const saveButton = screen.getByRole("button", { name: "Save" });

    expect(saveButton).toBeInTheDocument();
});

test("save buttun should be visible", () => {
    render(UserAccountComponet);

    const saveButton = screen.getByRole("button", { name: "Save" });

    expect(saveButton).toBeVisible();
});

test("save buttun should be disabled by default", () => {
    render(UserAccountComponet);

    const saveButton = screen.getByRole("button", { name: "Save" });

    expect(saveButton).toBeDisabled();
});

test("rest buttun should be renderd", () => {
    render(UserAccountComponet);

    const resetButton = screen.getByRole("button", { name: "Reset" });

    expect(resetButton).toBeInTheDocument();
});

test("rest buttun should be visible", () => {
    render(UserAccountComponet);

    const resetButton = screen.getByRole("button", { name: "Reset" });

    expect(resetButton).toBeVisible();
});

test("rest buttun should NOT be disabled", () => {
    render(UserAccountComponet);

    const resetButton = screen.getByRole("button", { name: "Reset" });

    expect(resetButton).not.toBeDisabled();
});

test("delete buttun should be renderd", () => {
    render(UserAccountComponet);

    const deleteButton = screen.getByRole("button", { name: "Delete Account" });

    expect(deleteButton).toBeInTheDocument();
});

test("delete button should be visible", () => {
    render(UserAccountComponet);

    const deleteButton = screen.getByRole("button", { name: "Delete Account" });


    expect(deleteButton).toBeVisible();
});

test("delete account button should NOT be disabled", () => {
    render(UserAccountComponet);

    const deleteButton = screen.getByRole("button", { name: "Delete Account" });
    expect(deleteButton).not.toBeDisabled();
});