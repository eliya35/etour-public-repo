import React from 'react';
import { screen, render } from '@testing-library/react';
import HomePageTitle from '../HomePageTitle'

test('renders All your destination in one place heading correctly', () => {
    render(<HomePageTitle />);

    const mainHeader = screen.getByRole('heading', { level: 3 });
    expect(mainHeader).toHaveTextContent('All your Destination in one place');
});

test('renders second header correctly', () => {
    render(<HomePageTitle />);

    const secondHeader = screen.getByRole('heading', { level: 6 });
    expect(secondHeader).toHaveTextContent('All you need to know about your chosen destination');
});