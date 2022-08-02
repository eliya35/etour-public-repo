import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import ContactUs from '../ContactUs';


test('renders contact us page title', () => {
    render(<ContactUs />);
    const pageTitle = screen.getByTitle('contactUs');
    expect(pageTitle.textContent).toBe("Contact Us");
});

test('renders contact us introduction correctly', () => {
    render(<ContactUs />);
    const introductionInfo = screen.getByTestId('introduction');
    expect(introductionInfo.textContent).toBe("Hello there, You are at Etour contact page. Here you can reach us under the address bellow or alternatively send as a messages on the form bellow. Please remember to leave accurate information to enable  us to reach back and server you in time.")
});

test('renders our address', () => {
    render(<ContactUs />);
    const ourAdress = screen.getByText(/OUR ADDRESS/i);
    expect(ourAdress).toBeInTheDocument()
});

test('renders our address correctly', () => {
    render(<ContactUs />);
    const ourAdressInfo = screen.getByRole('dispalyAddress');
    expect(ourAdressInfo.textContent).toBe("Etour.Herokuapp.com;Whatsapp @ 0113382969NAIROBI;Etour international");
});

test('renders a send us a message header', () => {
    render(<ContactUs />);
    const sendUsMessageHedder = screen.getByText(/SEND US A MESSAGE/i);
    expect(sendUsMessageHedder).toBeInTheDocument()
});

test('renders country span on document', () => {
    render(<ContactUs />);
    const countrySpan = screen.getByText(/Country:/i);
    expect(countrySpan).toBeInTheDocument()
});

test('renders select input element', () => {
    render(<ContactUs />);
    const selectInput = screen.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();
});

test('select input elment should render with the correct text', () => {
    render(<ContactUs />);
    const selectInput = screen.getByRole('combobox');
    expect(selectInput.value).toBe("Open this select menu");
});

test('renders all countries option for select element', () => {
    render(<ContactUs />);
    const selectOptions = screen.getAllByRole('option');
    expect(selectOptions.length).toEqual(47);
});

test('renderd options change as per users choosing', () => {
    render(<ContactUs />);
    const countryOption = screen.getByTestId('option');

    const fakeCountry = 'BRAZI';
    fireEvent.change(countryOption, { target: { value: fakeCountry } });

    expect(countryOption.value).toBe(fakeCountry);
});

test('renders first name label correctly', () => {
    render(<ContactUs />);
    const firstNameLabel = screen.getByRole('firstNameLabel');
    expect(firstNameLabel.textContent).toBe("First name:")
});

test('renders first name input element', () => {
    render(<ContactUs />);
    const firstNameInput = screen.getByPlaceholderText('your first name here...');
    expect(firstNameInput).toBeInTheDocument();
});

test('the first name input element should be empty', () => {
    render(<ContactUs />);
    const firstNameInput = screen.getByPlaceholderText('your first name here...');
    expect(firstNameInput.value).toBe("");
});

test('first name input should not be empty when we type a name', () => {
    render(<ContactUs />);
    const firstNameInput = screen.getByPlaceholderText('your first name here...');
    const fakeUserName = 'Jhon';

    fireEvent.change(firstNameInput, { target: { value: fakeUserName } });
    expect(firstNameInput.value).toBe(fakeUserName);
});

test('first name error message is not visible without error', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorFirstName');

    expect(error.textContent).toBe("");
});

test('first name error message is visible if error occurs', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorFirstName');
    const submitBtn = screen.getByRole('button');

    const firstNameInput = screen.getByPlaceholderText('your first name here...');
    const blankName = '';

    fireEvent.change(firstNameInput, { target: { value: blankName } });
    fireEvent.submit(submitBtn);

    expect(error.textContent).toBe("First name is required!");
});

test('renders last name input element', () => {
    render(<ContactUs />);
    const lastNameInput = screen.getByPlaceholderText('last name here...');
    expect(lastNameInput).toBeInTheDocument();
});

test('the last name input element should be empty', () => {
    render(<ContactUs />);
    const lastNameInput = screen.getByPlaceholderText('last name here...');
    expect(lastNameInput.value).toBe("");
});

test('last name input should not be empty when we type a name', () => {
    render(<ContactUs />);
    const lastNameInput = screen.getByPlaceholderText('last name here...');
    const fakeUserName = 'Smith';

    fireEvent.change(lastNameInput, { target: { value: fakeUserName } });
    expect(lastNameInput.value).toBe(fakeUserName);
});

test('last name error message is not visible without error', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorLastName');

    expect(error.textContent).toBe("");
});

test('last name error message is visible if error occurs', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorLastName');
    const submitBtn = screen.getByRole('button');

    const lastNameInput = screen.getByPlaceholderText('last name here...');
    const blankName = '';

    fireEvent.change(lastNameInput, { target: { value: blankName } });
    fireEvent.submit(submitBtn);

    expect(error.textContent).toBe("Last name is required!");
});

test('renders email address input element', () => {
    render(<ContactUs />);
    const emailAdressInput = screen.getByPlaceholderText('name@example.com');
    expect(emailAdressInput).toBeInTheDocument();
});

test('the email address input element should be empty', () => {
    render(<ContactUs />);
    const emailAdressInput = screen.getByPlaceholderText('name@example.com');
    expect(emailAdressInput.value).toBe("");
});

test('email address input should not be empty when we add email address', () => {
    render(<ContactUs />);
    const emailAdressInput = screen.getByPlaceholderText('name@example.com');
    const fakeEmailAddress = 'foo@google.com';

    fireEvent.change(emailAdressInput, { target: { value: fakeEmailAddress } });
    expect(emailAdressInput.value).toBe(fakeEmailAddress);
});

test('email address error message is not visible without error', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorEmail');

    expect(error.textContent).toBe("");
});

test('an error is thrown if email address is not provided in submision', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorEmail');
    const submitBtn = screen.getByRole('button');

    const emailAdressInput = screen.getByPlaceholderText('name@example.com');
    const blanEmail = '';

    fireEvent.change(emailAdressInput, { target: { value: blanEmail } });
    fireEvent.submit(submitBtn);

    expect(error.textContent).toBe("Email is required!");
});

test('email address input element dose not accept invalid emails', () => {
    render(<ContactUs />);
    const error = screen.getByRole('errorEmail');
    const submitBtn = screen.getByRole('button');

    const emailAdressInput = screen.getByPlaceholderText('name@example.com');
    const invalidEmail = 'baz123@q';

    fireEvent.change(emailAdressInput, { target: { value: invalidEmail } });
    fireEvent.submit(submitBtn);

    expect(error.textContent).toBe("Pleas input a valid email!");
});

test('textarea label is renderd', () => {
    render(<ContactUs />);
    const texareaLabel = screen.getByRole('txtlabel');
    expect(texareaLabel).toBeInTheDocument();
});

test('renders the textarea for typing a message', () => {
    render(<ContactUs />);
    const textMessageInput = screen.getByRole('textmessage');
    expect(textMessageInput).toBeInTheDocument();
});

test('the textarea input element should be empty', () => {
    render(<ContactUs />);
    const textMessageInput = screen.getByRole('textmessage');
    expect(textMessageInput.value).toBe("");
});

test('textarea input should not be empty when we add text', () => {
    render(<ContactUs />);
    const textMessageInput = screen.getByRole('textmessage');
    const someFakeText = 'I love code';

    fireEvent.change(textMessageInput, { target: { value: someFakeText } });
    expect(textMessageInput.value).toBe(someFakeText);
});

test('textarea input error message is not visible without error', () => {
    render(<ContactUs />);
    const error = screen.getByRole('textError');

    expect(error.textContent).toBe("");
});

test('an error is thrown if a message is not provided in submision', () => {
    render(<ContactUs />);
    const error = screen.getByRole('textError');
    const submitBtn = screen.getByRole('button');

    const textMessageInput = screen.getByRole('textmessage');
    const blankMessage = '';

    fireEvent.change(textMessageInput, { target: { value: blankMessage } });
    fireEvent.submit(submitBtn);

    expect(error.textContent).toBe("Please type some message!");
});

test('textarea input element dose not accept less than 3 character message', () => {
    render(<ContactUs />);
    const error = screen.getByRole('textError');
    const submitBtn = screen.getByRole('button');

    const textMessageInput = screen.getByRole('textmessage');
    const invalidMessage = 'ba';

    fireEvent.change(textMessageInput, { target: { value: invalidMessage } });
    fireEvent.submit(submitBtn);

    expect(error.textContent).toBe("Please input a valid message!");
});

test('submit button should be visibale', () => {
    render(<ContactUs />);
    const submitBtn = screen.getByRole('button');

    expect(submitBtn).toBeVisible();
});

test('submit button should be disabaled', () => {
    render(<ContactUs />);
    const submitBtn = screen.getByRole('button');

    expect(submitBtn).toBeDisabled();
});

test('submit button should be enabled if all inputs are filled', () => {
    render(<ContactUs />);
    const submitBtn = screen.getByRole('button');

    const firstNameInput = screen.getByPlaceholderText('your first name here...');
    const fakeFirstName = 'Jhon';

    const lastNameInput = screen.getByPlaceholderText('last name here...');
    const fakeLastName = 'Smith';

    const emailAdressInput = screen.getByPlaceholderText('name@example.com');
    const fakeEmailAddress = 'foo@google.com';

    const textMessageInput = screen.getByRole('textmessage');
    const someFakeText = 'I love code';

    fireEvent.change(firstNameInput, { target: { value: fakeFirstName } });
    fireEvent.change(lastNameInput, { target: { value: fakeLastName } });
    fireEvent.change(emailAdressInput, { target: { value: fakeEmailAddress } });
    fireEvent.change(textMessageInput, { target: { value: someFakeText } });

    expect(submitBtn).not.toBeDisabled();
});