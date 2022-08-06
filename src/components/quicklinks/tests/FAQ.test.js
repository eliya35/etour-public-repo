import React from 'react';
import { screen, render } from '@testing-library/react';
import FAQ from '../FAQ';

test('renders the header correctly', () => {
    render(<FAQ />);
    const headerText = screen.getByText(/Frequently Asked Question/i);

    expect(headerText).toBeInTheDocument();
});

test('renders all the frequently asked question', () => {
    render(<FAQ />);
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toEqual(4);
});

test('renders all the expected links', () => {
    render(<FAQ />);
    const linkElements = screen.getAllByRole('link');

    expect(linkElements.length).toEqual(2);
});

test('renders first question in the document', () => {
    render(<FAQ />);
    const firstQuiz = screen.getByText(/WHAT IS ETOUR?/i);

    expect(firstQuiz).toBeInTheDocument();
});

test('renders the first responce of first question correctly', () => {
    render(<FAQ />);
    const firstResponce = screen.getByTestId('answer-one');

    expect(firstResponce.textContent).toBe("Etour is an international electronic tourism company for adventures all over the glob to use and share with family and friends. You can get more information on Etour and its services Click here.");
});

test('renders second question in the document', () => {
    render(<FAQ />);
    const secondQuiz = screen.getByText(/DOSE THE COMPANY ACCEPT DONATIONS?/i);

    expect(secondQuiz).toBeInTheDocument();
});

test('renders the second responce correctly', () => {
    render(<FAQ />);
    const secondResponce = screen.getByTestId('answer-two');

    expect(secondResponce.textContent).toBe("Etour dose accept and receive donations offered in gratitude you can read more on haw to donate and how the donations are used at the About page.");
});

test('renders third question in the document', () => {
    render(<FAQ />);
    const thirdQuiz = screen.getByText(/IS ETOUR SAFE?/i);

    expect(thirdQuiz).toBeInTheDocument();
});

test('renders the third responce correctly', () => {
    render(<FAQ />);
    const thirdResponce = screen.getByTestId('answer-three');

    expect(thirdResponce.textContent).toBe("Etour takes the security of the information provided by our users very seriously because is an important part in our Business effective service rendering. Etour has taken measures and investments to ensures the safety and privacy of our users.");
});

test('renders 4th question in the document', () => {
    render(<FAQ />);
    const forthQuiz = screen.getByText(/CAN I TRY IT WITHOUT SIGNING UP?/i);

    expect(forthQuiz).toBeInTheDocument();
});

test('renders the 4th responce correctly', () => {
    render(<FAQ />);
    const forthResponce = screen.getByTestId('answer-four');

    expect(forthResponce.textContent).toBe("Yes! You could use Etour services without signing up; But you will not be able to access some of Etour Services without being logged in. Thus your experience might be narrowed.");
});