import React from 'react';
import { screen, render } from '@testing-library/react';
import TourCard from '../DisplaySites';

test('renders an image for destination on the card', () => {
    render(<TourCard />);

    const tourImg = screen.getByRole('img');
    expect(tourImg).toBeVisible();
});

test('renders the name of the site on the card', () => {
    render(<TourCard />);

    const siteName = screen.getByRole('heading', { level: 5 });
    expect(siteName).toBeInTheDocument();
});

test('renders a short description paragraph', () => {
    render(<TourCard />);

    const shortParagraph = screen.getByTestId('short-paragraph');
    expect(shortParagraph).toBeInTheDocument();
});

test('renders the view button that links to a viewpage', () => {
    render(<TourCard />);

    const btnLink = screen.getByRole('link');
    expect(btnLink).toBeVisible();
});

test('renders the add to list button', () => {
    render(<TourCard />);

    const addToListBtn = screen.getByRole('button');
    expect(addToListBtn).toBeVisible();
});

test('name of site is renderd correctly on the card', () => {
    render(<TourCard title="Grand Canyon" />);

    const siteName = screen.getByRole('heading', { level: 5 });
    expect(siteName.textContent).toBe("Grand Canyon");
});

test('is featured tag is renderd when status is true', () => {
    render(<TourCard status={true} />);

    const featuredTag = screen.getByRole('heading', { level: 6 });
    expect(featuredTag).toBeVisible();
});

test('the short description paragraph is renderd correctly', () => {
    render(<TourCard shortDescription="Grand canyon is a fine place" />);

    const shortParagraph = screen.getByTestId('short-paragraph');
    expect(shortParagraph.textContent).toBe("Grand canyon is a fine place");
});

test('view button that links to a viewpage is enabled', () => {
    render(<TourCard />);

    const btnLink = screen.getByRole('link');
    expect(btnLink).toBeEnabled();
});

test('add to list button should be enabled', () => {
    render(<TourCard />);

    const addToListBtn = screen.getByRole('button');
    expect(addToListBtn).toBeEnabled();
});

test('add to list button name is renderd correctly', () => {
    render(<TourCard />);

    const addToListBtn = screen.getByRole('button');
    expect(addToListBtn).toHaveTextContent('Add to List');
});