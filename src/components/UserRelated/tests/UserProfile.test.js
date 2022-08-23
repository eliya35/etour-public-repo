import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from '../UserProfile';
import FakeUserProvider from '../../navbar/tests/FakeUserProvider';


const UserProfileComponet =
    <BrowserRouter>
        <FakeUserProvider>
            <UserProfile />
        </FakeUserProvider>
    </BrowserRouter>

test("welcome title should be renderd", () => {
    render(UserProfileComponet);
    const welcomeMessage = screen.getByRole("heading", { level: 1 });
    const fakeUsername = "foo";

    expect(welcomeMessage.textContent).toBe(`Welcome ${fakeUsername}`);
});

test("renders introductory paragraph correctly", () => {
    render(UserProfileComponet);

    const introductoryParagraph = screen.getByTestId("introductory-paragraph");
    expect(introductoryParagraph).toBeInTheDocument();
});

test("a link to my account is renderd in the above paragraph", () => {
    render(UserProfileComponet);

    const myAccountLink = screen.getByRole("link", { name: "Clicking Here" });
    expect(myAccountLink).toBeInTheDocument();
});

// profile image

test("mobile label is renderd for mobile input node", () => {
    render(UserProfileComponet);

    const mobileLabel = screen.getByRole("heading", { name: "Mobile" });
    expect(mobileLabel).toBeInTheDocument();
});

test("mobile input node is renderd", () => {
    render(UserProfileComponet);

    const mobileInput = screen.getByTitle("enter your mobile number if any.");
    expect(mobileInput).toBeInTheDocument();
});

test("mobile input node is renderd empty", () => {
    render(UserProfileComponet);

    const mobileInput = screen.getByTitle("enter your mobile number if any.");
    expect(mobileInput.value).toBe("");
});

test("mobile input node changes as per user input", () => {
    render(UserProfileComponet);

    const mobileInput = screen.getByTitle("enter your mobile number if any.");
    const fakeMobileInput = "+2542110090804";

    fireEvent.change(mobileInput, { target: { value: fakeMobileInput } });
    expect(mobileInput.value).toBe(fakeMobileInput);
});

test("mobile input error is renderd", () => {
    render(UserProfileComponet);

    const mobileInputError = screen.getByTestId("mobile-input-error");

    expect(mobileInputError).toBeInTheDocument();
});

test("mobile input error message is blank if there are no erros", () => {
    render(UserProfileComponet);

    const mobileInputError = screen.getByTestId("mobile-input-error");

    expect(mobileInputError.textContent).toBe("");
});

test("mobile input error message is fired corretly if unusually long number is enterd", () => {
    render(UserProfileComponet);

    const mobileInput = screen.getByTitle("enter your mobile number if any.");
    const mobileInputError = screen.getByTestId("mobile-input-error");
    const saveBtn = screen.getByRole("button", { name: "save button" });
    const fakeMobileInput = "+2542110090804000000000000";

    fireEvent.change(mobileInput, { target: { value: fakeMobileInput } });
    fireEvent.click(saveBtn);

    expect(mobileInputError.textContent).toBe("Your mobile number is too long!");
});

test("location label is renderd for location input node", () => {
    render(UserProfileComponet);

    const mobileLabel = screen.getByRole("heading", { name: "Location" });
    expect(mobileLabel).toBeInTheDocument();
});

test("location input node is renderd", () => {
    render(UserProfileComponet);

    const locationInput = screen.getByTitle("enter a location");
    expect(locationInput).toBeInTheDocument();
});

test("location input node is renderd empty", () => {
    render(UserProfileComponet);

    const locationInput = screen.getByTitle("enter a location");
    expect(locationInput.value).toBe("");
});

test("location input node changes as per user input", () => {
    render(UserProfileComponet);

    const locationInput = screen.getByTitle("enter a location");
    const fakeLocationInput = "Utopia";

    fireEvent.change(locationInput, { target: { value: fakeLocationInput } });
    expect(locationInput.value).toBe(fakeLocationInput);
});

test("location input error is renderd", () => {
    render(UserProfileComponet);

    const locationInputError = screen.getByTestId("location-input-error");

    expect(locationInputError).toBeInTheDocument();
});

test("location input error message is blank if there are no erros", () => {
    render(UserProfileComponet);

    const locationInputError = screen.getByTestId("location-input-error");

    expect(locationInputError.textContent).toBe("");
});

test("location input error message is fired corretly if unusually long location is enterd", () => {
    render(UserProfileComponet);

    const locationInput = screen.getByTitle("enter a location");
    const locationInputError = screen.getByTestId("location-input-error");

    const saveBtn = screen.getByRole("button", { name: "save button" });
    const fakeLocationInput = "amahahajakakazonianoufffffffkkkisfkkkjiaeethhsbddloadfhbfjd";

    fireEvent.change(locationInput, { target: { value: fakeLocationInput } });
    fireEvent.click(saveBtn);

    expect(locationInputError.textContent).toBe("Please input a valid location!");
});

test("bio label is renderd for bio input node", () => {
    render(UserProfileComponet);

    const bioLabel = screen.getByRole("heading", { name: "Bio" });
    expect(bioLabel).toBeInTheDocument();
});

test("bio input node is renderd", () => {
    render(UserProfileComponet);

    const bioInput = screen.getByTitle("Enter a bio if any, should be less than 200 words");
    expect(bioInput).toBeInTheDocument();
});

test("bio input node is renderd empty", () => {
    render(UserProfileComponet);

    const bioInput = screen.getByTitle("Enter a bio if any, should be less than 200 words");
    expect(bioInput.value).toBe("");
});

test("bio input node changes as per user input", () => {
    render(UserProfileComponet);

    const bioInput = screen.getByTitle("Enter a bio if any, should be less than 200 words");
    const fakeBioInput = "I love Etour";

    fireEvent.change(bioInput, { target: { value: fakeBioInput } });
    expect(bioInput.value).toBe(fakeBioInput);
});

test("bio input error is renderd", () => {
    render(UserProfileComponet);

    const bioInputError = screen.getByTestId("bio-input-error");

    expect(bioInputError).toBeInTheDocument();
});

test("bio input error message is blank if there are no erros", () => {
    render(UserProfileComponet);

    const bioInputError = screen.getByTestId("bio-input-error");

    expect(bioInputError.textContent).toBe("");
});

test("bio input error message is fired corretly if unusually long bio is enterd", () => {
    render(UserProfileComponet);

    const bioInput = screen.getByTitle("Enter a bio if any, should be less than 200 words");
    const bioInputError = screen.getByTestId("bio-input-error");

    const saveBtn = screen.getByRole("button", { name: "save button" });
    const fakebioInput = "very long meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesageggggggggggggggggggggggggggggggggggggggggggg";

    fireEvent.change(bioInput, { target: { value: fakebioInput } });
    fireEvent.click(saveBtn);

    expect(bioInputError.textContent).toBe("Your bio is to long try making it less than 200 characters!");
});

test("save button is renderd in the document", () => {
    render(UserProfileComponet);

    const saveBtn = screen.getByRole("button", { name: "save button" });
    expect(saveBtn).toBeInTheDocument();
});

test("save button is renderd with the correct name", () => {
    render(UserProfileComponet);

    const saveBtn = screen.getByRole("button", { name: "save button" });
    expect(saveBtn.textContent).toBe("Save")
});

test("save button is visibale to the user", () => {
    render(UserProfileComponet);

    const saveBtn = screen.getByRole("button", { name: "save button" });
    expect(saveBtn).toBeVisible();
});

test("save button is disabled by default", () => {
    render(UserProfileComponet);

    const saveBtn = screen.getByRole("button", { name: "save button" });
    expect(saveBtn).toBeDisabled();
});

test("reset button is renderd in the document", () => {
    render(UserProfileComponet);

    const resetBtn = screen.getByRole("button", { name: "reset button" });
    expect(resetBtn).toBeInTheDocument();
});

test("reset button is renderd with the correct name", () => {
    render(UserProfileComponet);

    const resetBtn = screen.getByRole("button", { name: "reset button" });
    expect(resetBtn.textContent).toBe("Reset")
});

test("reset button is visibale to the user", () => {
    render(UserProfileComponet);

    const resetBtn = screen.getByRole("button", { name: "reset button" });
    expect(resetBtn).toBeVisible();
});