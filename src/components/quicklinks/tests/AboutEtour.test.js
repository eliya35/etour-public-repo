import React from 'react';
import { screen, render } from '@testing-library/react';
import AboutEtour from '../AboutEour'

test('renders a title', () => {
    render(<AboutEtour />);
    const title = screen.getByTestId('title');
    expect(title.textContent).toBe('About Etour International');
});

test('renders introduction paragraph correctly', () => {
    render(<AboutEtour />);
    const introduction = screen.getByTestId('introduction')
    expect(introduction.textContent).toBe("Etour is an international tourism application for everyone around the glob. Think about Etour as the All in one location; Etour allows adventures all over the world to meet in one place, interact, review places they have visited or traveled and even plan there next adventure Right Here Right Now!")
});

test('renders how dose it work header in document', () => {
    render(<AboutEtour />);
    const hawItWorksHeder = screen.getByText(/HOW DOSE IT WORK/);
    expect(hawItWorksHeder).toBeInTheDocument();
});

test('renders haw etour works introductio paragraph correctly', () => {
    render(<AboutEtour />);
    const introduction02 = screen.getByTestId('introduction02')
    expect(introduction02.textContent).toBe("Etour is build with various features and services that are easy to use and interact with. Some of this features allow you to sort through various tourist attraction sites all over the word at a mouse click or a touch of a screen. Some of this common features include;")
});

test('renders a list of features', () => {
    render(<AboutEtour />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems.length).toEqual(5)
});

test('renders category sorting title in document', () => {
    render(<AboutEtour />);
    const categorySortTitle = screen.getByRole('categorySortTitle');
    expect(categorySortTitle).toBeInTheDocument();
});

test('renders category sorting paragraph contents correctly', () => {
    render(<AboutEtour />);
    const categorySortParagraph = screen.getByTestId('categoryInfo');
    expect(categorySortParagraph.textContent).toBe("Category Sorting allows you to navigate to different tourist sites categories and find a tour or an adventure that meets your fancy, whether its Popular Cites, Caves, Mountains, Ancient Ruins, Casinos, Forests you name it.")
});

test('renders search functionality title in document', () => {
    render(<AboutEtour />);
    const searchFuncTitle = screen.getByRole('searchFuncTitle');
    expect(searchFuncTitle).toBeInTheDocument();
});

test('renders search functionality paragraph contents correctly', () => {
    render(<AboutEtour />);
    const suchFuncParagraph = screen.getByTestId('searchFunc');
    expect(suchFuncParagraph.textContent).toBe("Search Functionality allows you as an adventure to search for tourist sites all over the world and quickly gain all the information you will need about the site of you choosing on the spot!")
});

test('renders reviews comments title in document', () => {
    render(<AboutEtour />);
    const reviewsTitle = screen.getByRole('reviewsTitle');
    expect(reviewsTitle).toBeInTheDocument();
});

test('renders reviews contents correctly', () => {
    render(<AboutEtour />);
    const reviewsParagraph = screen.getByTestId('reviews');
    expect(reviewsParagraph.textContent).toBe("Reviews allow Etour adventure to write reviews on sites he/she has visited and some of the cool things they did there, sharing his experience with the world allowing other adventures to know what to expect should they choose to visit the site.")
});

test('renders add to list feature title in document', () => {
    render(<AboutEtour />);
    const favoriteTitle = screen.getByRole('favoriteTitle');
    expect(favoriteTitle).toBeInTheDocument();
});

test('renders add to list paragraph contnents correctly', () => {
    render(<AboutEtour />);
    const listParagraph = screen.getByTestId('favorite');
    expect(listParagraph.textContent).toBe("Add to list feature allows Adventures to add as many sites as they want to his/her My Destinations page. At this page they can, remove or view each destination and use it plan his/her adventure.")
});

test('renders mylist link element', () => {
    render(<AboutEtour />);
    const linkElement = screen.getByTestId('mylist')
    expect(linkElement).toBeInTheDocument();
});

test('renders detail page title in document', () => {
    render(<AboutEtour />);
    const detailPageTitle = screen.getByRole('detailPageTitle');
    expect(detailPageTitle).toBeInTheDocument();
});

test('renders detail page contents correctly', () => {
    render(<AboutEtour />);
    const detailParagraph = screen.getByTestId('details');
    expect(detailParagraph.textContent).toBe("When you view a tour site you are directed to a detail page where you get more detail concerning the site of interest. Information such as Description, Location and reviews and other information can be found there.")
});

test('renders a haw do i get started header', () => {
    render(<AboutEtour />);
    const getStarted = screen.getByText(/How do i get started?/i);
    expect(getStarted).toBeInTheDocument()
});

test('renders get started introduction correctly', () => {
    render(<AboutEtour />);
    const getStartedIntro = screen.getByTestId('getStarted');
    expect(getStartedIntro.textContent).toBe("Getting started is as easy as 1,2,3 all you need is a working email address a device that can access the internet and good internet connection. Sing up for a free account and your ready to start your adventures.")
});

test('renders a registration page link', () => {
    render(<AboutEtour />);
    const registrationLink = screen.getByRole('regLink');
    expect(registrationLink).toBeInTheDocument()
});

test('renders a haw to help etour improve header', () => {
    render(<AboutEtour />);
    const helpImprove = screen.getByText(/HOW CAN I HELP IMPROVE ETOUR AND ITS SERVICES?/i);
    expect(helpImprove).toBeInTheDocument()
});

test('renders the help improve etour paragraph contents correctly', () => {
    render(<AboutEtour />);
    const helpImprove = screen.getByTestId('helpImproveEtour');
    expect(helpImprove.textContent).toBe("By suggesting new features or upgrades (suggestion box Click here). Etour also accepts donations graciously More on donation Click here giving Etour the ability to grow and serve you much better.")
});

test('renders a registration page link', () => {
    render(<AboutEtour />);
    const suggestionLink = screen.getByRole('suggestionLink');
    expect(suggestionLink).toBeInTheDocument()
});

test('renders a registration page link', () => {
    render(<AboutEtour />);
    const donateLink = screen.getByRole('donateLink');
    expect(donateLink).toBeInTheDocument()
});