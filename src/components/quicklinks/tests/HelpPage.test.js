import React from 'react';
import { screen, render } from '@testing-library/react';
import HelpPage from '../HelpPage';


test('renders the heading in the document', () => {
    render(<HelpPage />);
    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toBeInTheDocument();
});

test('renders the list of help links correctly', () => {
    render(<HelpPage />);
    const helpLink = screen.getAllByTestId('help-link');

    expect(helpLink.length).toEqual(6);
});

test('all the above links have headings', () => {
    render(<HelpPage />);
    const subHeader = screen.getAllByRole('heading', { level: 2 });

    expect(subHeader.length).toEqual(6);
});

test('navebar usage heading is renderd as expected', () => {
    render(<HelpPage />);
    const firstSubHeader = screen.getByRole('link', { name: 'Navbar usage heading' });

    expect(firstSubHeader.textContent).toBe('Navbar usages');
});

test('navebar usage introductory statement should be in the doc', () => {
    render(<HelpPage />);
    const introductoryStatement = screen.getByText('Navbar presents to you the following links and functionality:');

    expect(introductoryStatement).toBeInTheDocument();
});

test('a list of navbar usage functionality and navlinks are renderd', () => {
    render(<HelpPage />);
    const navbarFunc = screen.getAllByTestId('navbaritem');

    expect(navbarFunc.length).toEqual(5);
});

test('navbar usage Logo is renderd', () => {
    render(<HelpPage />);
    const logoText = screen.getByTitle('Logo');

    expect(logoText).toBeInTheDocument();
});

test('Logo usage description is renderd correctly', () => {
    render(<HelpPage />);
    const logoDescription = screen.getByTestId('logo-description');

    expect(logoDescription.textContent).toBe("Used to navigate you back to the homepage form whichever part of the you are.")
});

test('navbar usage Featured is renderd', () => {
    render(<HelpPage />);
    const featured = screen.getByTitle('Featured');

    expect(featured).toBeInTheDocument();
});

test('Featured usage description is renderd correctly', () => {
    render(<HelpPage />);
    const featuredDescription = screen.getByTestId('featured');

    expect(featuredDescription.textContent).toBe("This nav link takes you straight to featured sites where only featured sites are nested.")
});

test('navbar usage My Destinations is renderd', () => {
    render(<HelpPage />);
    const favorite = screen.getByTitle('Favorite');

    expect(favorite).toBeInTheDocument();
});

test('My Destination usage description is renderd correctly', () => {
    render(<HelpPage />);
    const favoriteDescription = screen.getByTestId('favorite');

    expect(favoriteDescription.textContent).toBe("This links you straight to your destinations which you add by clicking the add to list button.Note: The sites that you add are only specific to your own browser meaning they will only be viable to the browser you have added the destination from, additionally the sites will only be removed when you explicitly remove them or when you clear your browse data.")
});

// Donate is removed from the navbar indefinately
test('navbar usage Doante is renderd', () => {
    render(<HelpPage />);
    const donate = screen.getByTitle('Donate');

    expect(donate).toBeInTheDocument();
});

test('Donate usage description is renderd correctly', () => {
    render(<HelpPage />);
    const donateDescription = screen.getByTestId('donate');

    expect(donateDescription.textContent).toBe("This links you to the donate page where information for haw to donate and haw the donations are used maintain the application.");
});

test('navbar usage functionality Serach is renderd', () => {
    render(<HelpPage />);
    const search = screen.getByTitle('Search');

    expect(search).toBeInTheDocument();
});

test('Search usage description is renderd correctly', () => {
    render(<HelpPage />);
    const searchDescription = screen.getByTestId('search');

    expect(searchDescription.textContent).toBe("A simple search feature that helps you find your destination by typing in the stuff.If the site appears under the results click on it and watch yourself being navigate to the spot where you'll get all the information you need to plan your tour effectively. If the site your looking for dose not apper among the results then it means it hasn't benn added yet or simply dosent exist. As for the first case you can send as a suggestion Here and will get to work.");
});

test('Category usage heading is renderd', () => {
    render(<HelpPage />);
    const categories = screen.getByRole('heading', { name: 'Category usage' });

    expect(categories).toBeInTheDocument();
});

test('Category usage description is renderd correctly', () => {
    render(<HelpPage />);
    const categoryDescription = screen.getByTestId('category-detail');

    expect(categoryDescription).toBeInTheDocument();
});

test('Filter usage heading is renderd', () => {
    render(<HelpPage />);
    const filters = screen.getByRole('heading', { name: 'Filter usage' });

    expect(filters).toBeInTheDocument();
});

test('Filter usage description is renderd correctly', () => {
    render(<HelpPage />);
    const filterDescription = screen.getByTestId('filter-usage');

    expect(filterDescription).toBeInTheDocument();
});

test('Tour card usage heading is renderd', () => {
    render(<HelpPage />);
    const tourCardHeding = screen.getByRole('heading', { name: 'Tour Cards Content and usage' });

    expect(tourCardHeding).toBeInTheDocument();
});

test('Tour card introduction span is renderd correctly', () => {
    render(<HelpPage />);
    const tourCardIntro = screen.getByTestId('tour-card-info');

    expect(tourCardIntro).toBeInTheDocument();
});

test('a list of all tour card usage functionality is renderd', () => {
    render(<HelpPage />);
    const tourCardUsage = screen.getAllByTitle('tour-card-item');

    expect(tourCardUsage.length).toEqual(5);
});

test('Card image functionality is described', () => {
    render(<HelpPage />);
    const tourCardImg = screen.getByTestId('tour-card-img');

    expect(tourCardImg).toBeInTheDocument();
});

test('Featured targ is described', () => {
    render(<HelpPage />);
    const featuredTag = screen.getByTestId('featured-tag');

    expect(featuredTag).toBeInTheDocument();
});

test('Short description is described', () => {
    render(<HelpPage />);
    const shortDescription = screen.getByTestId('short-describe');

    expect(shortDescription).toBeInTheDocument();
});

test('View button introductory paragraph is renderd', () => {
    render(<HelpPage />);
    const viewBtnIntro = screen.getByTestId('view-btn-intro');

    expect(viewBtnIntro).toBeInTheDocument();
});

test('a list of description on what one should see after clicking view batton should be renderd', () => {
    render(<HelpPage />);
    const viewBtnItems = screen.getAllByTestId('view-btn-item');

    expect(viewBtnItems.length).toEqual(4);
});

test('Add to list button functionality is described', () => {
    render(<HelpPage />);
    const addToListBtn = screen.getByTestId('add-to-list');

    expect(addToListBtn).toBeInTheDocument();
});

test('User Profile and account managment heading is renders correctly', () => {
    render(<HelpPage />);
    const userProfileHeader = screen.getByRole('heading', { name: 'User Profile' });

    expect(userProfileHeader.textContent).toBe("User Profile and account management");
});

test('User Profile managment details are renderd', () => {
    render(<HelpPage />);
    const userProfileDetail = screen.getByTestId('user-profile-detail');

    expect(userProfileDetail).toBeInTheDocument();
});

test('Quick links heading is renderd correctly', () => {
    render(<HelpPage />);
    const quickLinkHeader = screen.getByRole('heading', { name: 'Quicklinks navigation' });

    expect(quickLinkHeader.textContent).toBe("Quicklinks navigation");
});

test('Quick links introduction is renderd correctly', () => {
    render(<HelpPage />);
    const quickLinkIntro = screen.getByTestId('quick-links-intro');

    expect(quickLinkIntro.textContent).toBe("Quick links quick link you to pages, Yes that's what they do.");
});

test('list of quick links is renderd', () => {
    render(<HelpPage />);
    const quickLinks = screen.getAllByTestId('quicklink');

    expect(quickLinks.length).toEqual(6);
});

test('About Us link is renderd', () => {
    render(<HelpPage />);
    const aboutUsLink = screen.getByRole('link', {name:'About'});

    expect(aboutUsLink).toBeInTheDocument();
});

test('About Us decription is renderd', () => {
    render(<HelpPage />);
    const aboutUs = screen.getByTestId('about-us');

    expect(aboutUs).toBeInTheDocument();
});

test('FAQ link is renderd', () => {
    render(<HelpPage />);
    const faqLink = screen.getByRole('link', {name:'FAQ'});

    expect(faqLink).toBeInTheDocument();
});

test('FAQ decription is renderd', () => {
    render(<HelpPage />);
    const faq = screen.getByTestId('faq');

    expect(faq).toBeInTheDocument();
});

test('Suggest New Feature link is renderd', () => {
    render(<HelpPage />);
    const newFeatureLink = screen.getByRole('link', {name:'New Feature'});

    expect(newFeatureLink).toBeInTheDocument();
});

test('Suggest New Feature decription is renderd', () => {
    render(<HelpPage />);
    const newFeature = screen.getByTestId('new-feature');

    expect(newFeature).toBeInTheDocument();
});

test('Privacy Policy link is renderd', () => {
    render(<HelpPage />);
    const privacyPolicyLink = screen.getByRole('link', { name:'Privacy Policy'});

    expect(privacyPolicyLink).toBeInTheDocument();
});

test('Privacy Policy decription is renderd', () => {
    render(<HelpPage />);
    const privacyPolicy = screen.getByTestId('privacy-policy');

    expect(privacyPolicy).toBeInTheDocument();
});

test('Terms and Conditon link is renderd', () => {
    render(<HelpPage />);
    const useCoditionLink = screen.getByRole('link', { name:'Terms and Conditions'});

    expect(useCoditionLink).toBeInTheDocument();
});

test('Terms and Conditon decription is renderd', () => {
    render(<HelpPage />);
    const useCodition = screen.getByTestId('condition-use');

    expect(useCodition).toBeInTheDocument();
});

test('Contact us link is renderd', () => {
    render(<HelpPage />);
    const contactUsLink = screen.getByRole('link', { name:'Contact Us'});

    expect(contactUsLink).toBeInTheDocument();
});

test('Contact us decription is renderd', () => {
    render(<HelpPage />);
    const contactUs = screen.getByTestId('contact-us');

    expect(contactUs).toBeInTheDocument();
});