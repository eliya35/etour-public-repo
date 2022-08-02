import React from 'react';
import { screen, render } from '@testing-library/react';
import ComingSoon from '../ComingSoon';

test('renders the header coming soon in the document', () => {
    render(<ComingSoon />);
    const comingSoonMessage = screen.getByText(/Coming Soon!!/i);
    expect(comingSoonMessage).toBeInTheDocument();
});

test('renders an apology message', () => {
    render(<ComingSoon />);
    const apologyMessage = screen.getByTestId('aplogies');
    expect(apologyMessage.textContent).toBe("We apologise for any inconvenience we are working on it.");
});