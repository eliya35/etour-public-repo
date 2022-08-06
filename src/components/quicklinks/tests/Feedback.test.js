import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import FeedBack from '../FeedBack';


test('renders the header in the document', () => {
    render(<FeedBack />);
    const headerText = screen.getByRole('heading', { level: 6 });

    expect(headerText).toBeInTheDocument();
});

test('thank you message should not be visibale if either button is not clicked', () => {
    render(<FeedBack />);
    const thankYouMessage = screen.getByText(/Thank you for letting us know./i);

    expect(thankYouMessage).not.toBeVisible();
});

test('YES and NO button are renderd in the document', () => {
    render(<FeedBack />);
    const responceButtons = screen.getAllByRole('button');

    expect(responceButtons.length).toEqual(2);
});

test('when YES button is clicked renders a thank you message', () => {
    render(<FeedBack />);
    const yesButton = screen.getByRole('button', { pressed: true });

    const thankYouMessage = screen.getByText(/Thank you for letting us know./i);

    fireEvent.click(yesButton);

    expect(thankYouMessage).toBeVisible();

});

test('YES button should disappear when its clicked', () => {
    render(<FeedBack />);
    const yesButton = screen.getByRole('button', { pressed: true });

    fireEvent.click(yesButton);

    expect(yesButton).not.toBeVisible();
});

test('when NO button is clicked renders a thank you message also', () => {
    render(<FeedBack />);
    const noButton = screen.getByRole('button', { pressed: false });

    const thankYouMessage = screen.getByText(/Thank you for letting us know./i);

    fireEvent.click(noButton);

    expect(thankYouMessage).toBeVisible();

});

test("'NO' button should disappear when its clicked", () => {
    render(<FeedBack />);
    const noButton = screen.getByRole('button', { pressed: false });

    fireEvent.click(noButton);

    expect(noButton).not.toBeVisible();
});