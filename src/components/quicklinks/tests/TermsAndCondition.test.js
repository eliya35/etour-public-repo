import React from 'react';
import { screen, render } from '@testing-library/react';
import TermsAndCondition from '../TermsAndCondition';

test('Heading is renderd correctlly', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'Condition of Use' });
    expect(header).toBeInTheDocument();
});

test('a welcome paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const welcomeParagraph = screen.getByTestId('welcome-paragraph');
    expect(welcomeParagraph).toBeInTheDocument();
});

test('read condition of use heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'Please read these conditions carefully.' });
    expect(header).toBeInTheDocument();
});

test('read condition of use paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const conditionParagraph = screen.getByTestId('condtion-of-use');
    expect(conditionParagraph).toBeInTheDocument();
});

test('Privacy heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'PRIVACY' });
    expect(header).toBeInTheDocument();
});

test('Privacy paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const privacyParagraph = screen.getByTestId('privac-paragraph');
    expect(privacyParagraph).toBeInTheDocument();
});

test('Privacy Policy link should be renderd in the above paragraph', () => {
    render(<TermsAndCondition />);

    const privacyLink = screen.getByRole('link', { name:'Privacy Policy'});
    expect(privacyLink).toBeInTheDocument();
});

test('Electronic communication heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'ELECTRONIC COMMUNICATIONS' });
    expect(header).toBeInTheDocument();
});

test('Privacy paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const privacyParagraph = screen.getByTestId('electronic-communication');
    expect(privacyParagraph).toBeInTheDocument();
});

test('Electronic communication heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'ELECTRONIC COMMUNICATIONS' });
    expect(header).toBeInTheDocument();
});

test('Privacy paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const privacyParagraph = screen.getByTestId('electronic-communication');
    expect(privacyParagraph).toBeInTheDocument();
});

test('Copyright heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'COPYRIGHT' });
    expect(header).toBeInTheDocument();
});

test('Copyright paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const copyrightParagraph = screen.getByTestId('copyright-paragraph');
    expect(copyrightParagraph).toBeInTheDocument();
});

test('License and access heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'LICENSE AND ACCESS' });
    expect(header).toBeInTheDocument();
});

test('License and access paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const lincensParagraph = screen.getByTestId('license-access');
    expect(lincensParagraph).toBeInTheDocument();
});

test('Your account heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'YOUR ACCOUNT' });
    expect(header).toBeInTheDocument();
});

test('Your account paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const accountParagraph = screen.getByTestId('account');
    expect(accountParagraph).toBeInTheDocument();
});

test('Reviws, comments, communication, and others account heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'REVIEWS' });
    expect(header).toBeInTheDocument();
});

test('Reviews comments and other content paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const reviewsParagraph = screen.getByTestId('reviews-communications');
    expect(reviewsParagraph).toBeInTheDocument();
});

test('Sites description heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'ADVENTURE SITES DESCRIPTIONS' });
    expect(header).toBeInTheDocument();
});

test('Sites description paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const sitesDescriptionParagraph = screen.getByTestId('site-description');
    expect(sitesDescriptionParagraph).toBeInTheDocument();
});

test('Our address heading should be renderd ', () => {
    render(<TermsAndCondition />);

    const header = screen.getByRole('heading', { name: 'OUR ADDRESS' });
    expect(header).toBeInTheDocument();
});

test('Our address description paragraph should be renderd', () => {
    render(<TermsAndCondition />);

    const ourAddressInfo = screen.getByTestId('address-info');
    expect(ourAddressInfo).toBeInTheDocument();
});

test('Etour site url link should be renderd in the above paragraph', () => {
    render(<TermsAndCondition />);

    const domainLink = screen.getByRole('link', { name: 'Etour International' });
    expect(domainLink).toBeInTheDocument();
});