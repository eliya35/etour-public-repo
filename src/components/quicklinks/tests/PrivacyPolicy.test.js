import React from 'react';
import { screen, render } from '@testing-library/react';
import PrivacyPolicy from '../PrivacyPolicy';

test('page title is renderd correctly', () => {
    render(<PrivacyPolicy />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toBe("Etour International Privacy Policy");
});

test('introduction paragraph is renderd', () => {
    render(<PrivacyPolicy />);

    const intro = screen.getByTestId('introduction');
    expect(intro).toBeInTheDocument();
});

test('a list of links should be renderd', () => {
    render(<PrivacyPolicy />);

    const privacyPolicyLinks = screen.getAllByTestId('privacy-link');
    expect(privacyPolicyLinks.length).toEqual(7);
});

test('personal details Etour collects tilte should be renderd', () => {
    render(<PrivacyPolicy />);

    const personalDetailTitle = screen.getByRole('heading', { name: 'Persoanl details title' });
    expect(personalDetailTitle).toBeInTheDocument();
});

test('what personal details are collected should be renderd', () => {
    render(<PrivacyPolicy />);

    const whyCollectDetails = screen.getByTestId('etour-collects');
    expect(whyCollectDetails).toBeInTheDocument();
});

test('types of information we collect. Info you give should be renderd', () => {
    render(<PrivacyPolicy />);

    const infoYouGive = screen.getByTitle('Information You Give Us');
    expect(infoYouGive).toBeInTheDocument();
});

test('Info you give us description should be renderd', () => {
    render(<PrivacyPolicy />);

    const infoYouGiveDescription = screen.getByTestId('information-you-give');
    expect(infoYouGiveDescription).toBeInTheDocument();
});

test('types of information we collect. Automatic info should be renderd', () => {
    render(<PrivacyPolicy />);

    const autoInfo = screen.getByTitle('Automatic Info');
    expect(autoInfo).toBeInTheDocument();
});

test('Automatic Info description should be renderd', () => {
    render(<PrivacyPolicy />);

    const autoInfoDescription = screen.getByTestId('auto-info');
    expect(autoInfoDescription).toBeInTheDocument();
});

test('types of information we collect. Info from other source should be renderd', () => {
    render(<PrivacyPolicy />);

    const infofromOther = screen.getByTitle('Other source Info');
    expect(infofromOther).toBeInTheDocument();
});

test('Info from other sources description should be renderd', () => {
    render(<PrivacyPolicy />);

    const otherSourceInfoDescription = screen.getByTestId('other-source-info');
    expect(otherSourceInfoDescription).toBeInTheDocument();
});

test('what pourpose etour collects personal detail Heading should be renderd ', () => {
    render(<PrivacyPolicy />);

    const whyCollectHeading = screen.getByRole('heading',{name:'Purpose for collect'} );
    expect(whyCollectHeading).toBeInTheDocument();
});

test('what pourpose etour collects personal detail intro should be renderd ', () => {
    render(<PrivacyPolicy />);

    const briefIntroduction = screen.getByTestId('brief-intro');
    expect(briefIntroduction).toBeInTheDocument();
});

test('Recommendations and personalization heading is renderd ', () => {
    render(<PrivacyPolicy />);

    const recomendationHeading = screen.getByTitle('Recomendation');
    expect(recomendationHeading).toBeInTheDocument();
});

test('Recommendations and personalization description is renderd ', () => {
    render(<PrivacyPolicy />);

    const recomendationDescription = screen.getByTestId('recomendation-details');
    expect(recomendationDescription).toBeInTheDocument();
});

test('Communicate with you heading is renderd ', () => {
    render(<PrivacyPolicy />);

    const forCommunicationHeading = screen.getByTitle('For Communication');
    expect(forCommunicationHeading).toBeInTheDocument();
});

test('Communication Purposes description is renderd ', () => {
    render(<PrivacyPolicy />);

    const forCommunicatioDescription = screen.getByTestId('communication-purposes');
    expect(forCommunicatioDescription).toBeInTheDocument();
});

test('Advertisement heading is renderd ', () => {
    render(<PrivacyPolicy />);

    const advatismentHeading = screen.getByTitle('Advertisement');
    expect(advatismentHeading).toBeInTheDocument();
});

test('Advertisement description is renderd ', () => {
    render(<PrivacyPolicy />);

    const forAdvertismentDescription = screen.getByTestId('advatisment');
    expect(forAdvertismentDescription).toBeInTheDocument();
});

test('Fraud Prevention and Credit Risks heading is renderd ', () => {
    render(<PrivacyPolicy />);

    const forProtectionHeading = screen.getByTitle('Frud Prevention');
    expect(forProtectionHeading).toBeInTheDocument();
});

test('Fraud Prevention and Credit Risks description is renderd ', () => {
    render(<PrivacyPolicy />);

    const frudProtectionDescription = screen.getByTestId('frud-prevention');
    expect(frudProtectionDescription).toBeInTheDocument();
});

test('What About Cookies and Other Identifiers heading ', () => {
    render(<PrivacyPolicy />);

    const heading = screen.getByRole('heading', {name:'cookies identifiers'});
    expect(heading).toBeInTheDocument();
});

test('What About Cookies and Other Identifiers description ', () => {
    render(<PrivacyPolicy />);

    const description = screen.getByTestId('cookies-description');
    expect(description).toBeInTheDocument();
});

test('Dose Etour Share Your Personal Information heading is renderd ', () => {
    render(<PrivacyPolicy />);

    const heading = screen.getByRole('heading', {name:'Share information'});
    expect(heading).toBeInTheDocument();
});

test('Dose Etour Share Your Personal Information description is renderd ', () => {
    render(<PrivacyPolicy />);

    const description = screen.getByTestId('share-details');
    expect(description).toBeInTheDocument();
});

test('Sharing info under Business transfer heading should be renderd', () => {
    render(<PrivacyPolicy />);
    
    const businessTransferHeading = screen.getByTitle('Business Transfers');
    expect(businessTransferHeading).toBeInTheDocument();
});

test('Sharing info under Business transfer description should be renderd', () => {
    render(<PrivacyPolicy />);
    
    const businessTransferDescription = screen.getByTestId('business-transfer');
    expect(businessTransferDescription).toBeInTheDocument();
});

test('Information security heading should be renderd', () => {
    render(<PrivacyPolicy />);
    
    const infoSecurityHeading = screen.getByRole('heading', {name:'my details security'});
    expect(infoSecurityHeading).toBeInTheDocument();
});

test('Information security introduction should be renderd', () => {
    render(<PrivacyPolicy />);
    
    const infoSecuriyIntro = screen.getByTestId('security-introduction');
    expect(infoSecuriyIntro).toBeInTheDocument();
});

test('protection through encription protocal should be renderd', () => {
    render(<PrivacyPolicy />);

    const encriptionProtocal = screen.getByRole('listitem', { name: 'Encription protocol' });
    expect(encriptionProtocal).toBeInTheDocument();
});

test('card payment protection should be renderd', () => {
    render(<PrivacyPolicy />);

    const cardProtrction = screen.getByRole('listitem', { name: 'Payment card protection' });
    expect(cardProtrction).toBeInTheDocument();
});

test('self protection should be renderd', () => {
    render(<PrivacyPolicy />);

    const selfProtrction = screen.getByRole('listitem', { name: 'Self protection' });
    expect(selfProtrction).toBeInTheDocument();
});

test('varification procesess information should be renderd', () => {
    render(<PrivacyPolicy />);

    const varificationInformation = screen.getByRole('listitem', { name: 'Varification infomation' });
    expect(varificationInformation).toBeInTheDocument();
});


test('Infomation one can access heading should be renderd', () => {
    render(<PrivacyPolicy />);

    const canAccsessHeading = screen.getByRole('heading', { name: 'Information You access' });
    expect(canAccsessHeading).toBeInTheDocument();
});

test('Infomation one can access paragraph should be renderd', () => {
    render(<PrivacyPolicy />);

    const canAccsessParagraph = screen.getByTestId('can-accsess');
    expect(canAccsessParagraph).toBeInTheDocument();
});

test('Can children use Etour heading should be renderd', () => {
    render(<PrivacyPolicy />);

    const canUseEtourHeading = screen.getByRole('heading', { name: 'Children Allowed to Use Etour' });
    expect(canUseEtourHeading).toBeInTheDocument();
});

test('Can children use Etour paragraph should be renderd', () => {
    render(<PrivacyPolicy />);

    const canUseParagraph = screen.getByTestId('children-accsess');
    expect(canUseParagraph).toBeInTheDocument();
});

test('Examples of information etour collects heading should be renderd', () => {
    render(<PrivacyPolicy />);

    const heading = screen.getByRole('heading', { name: 'Information We Collected' });
    expect(heading).toBeInTheDocument();
});

test('information etour collects paragraph should be renderd', () => {
    render(<PrivacyPolicy />);

    const weCollectParagraph = screen.getByTestId('information-given');
    expect(weCollectParagraph).toBeInTheDocument();
});

test('Identification information should be renderd', () => {
    render(<PrivacyPolicy />);

    const identityInfo = screen.getByRole('listitem', { name: 'identity infomation' });
    expect(identityInfo).toBeInTheDocument();
});

test('Age information should be renderd', () => {
    render(<PrivacyPolicy />);

    const ageInfo = screen.getByRole('listitem', { name: 'age' });
    expect(ageInfo).toBeInTheDocument();
});

test('Payment information should be renderd', () => {
    render(<PrivacyPolicy />);

    const paymentInfo = screen.getByRole('listitem', { name: 'payment info' });
    expect(paymentInfo).toBeInTheDocument();
});

test('IP address information should be renderd', () => {
    render(<PrivacyPolicy />);

    const ipAdressInfo = screen.getByRole('listitem', { name: 'IP address' });
    expect(ipAdressInfo).toBeInTheDocument();
});

test('personal description information should be renderd', () => {
    render(<PrivacyPolicy />);

    const personalDescriptionInfo = screen.getByRole('listitem', { name: 'profile info' });
    expect(personalDescriptionInfo).toBeInTheDocument();
});

test('reviews and emails information should be renderd', () => {
    render(<PrivacyPolicy />);

    const reviewsEmailsInfo = screen.getByRole('listitem', { name: 'reviews and email' });
    expect(reviewsEmailsInfo).toBeInTheDocument();
});

test('reviews and emails information should be renderd', () => {
    render(<PrivacyPolicy />);

    const reviewsEmailsInfo = screen.getByRole('listitem', { name: 'friends email' });
    expect(reviewsEmailsInfo).toBeInTheDocument();
});

test('Automatic Information collected statement should be renderd', () => {
    render(<PrivacyPolicy />);

    const automaticInfo = screen.getByTestId('auto-info-collection');
    expect(automaticInfo).toBeInTheDocument();
});

test('phone numbers used to call our customer service number should be renderd', () => {
    render(<PrivacyPolicy />);

    const contactInfo = screen.getByRole('listitem', { name: 'contact info' });
    expect(contactInfo).toBeInTheDocument();
});

test('the location of your device or computer should be renderd', () => {
    render(<PrivacyPolicy />);

    const deviceLocation = screen.getByRole('listitem', { name: 'location info' });
    expect(deviceLocation).toBeInTheDocument();
});

test('login, email address, and password information should be renderd', () => {
    render(<PrivacyPolicy />);

    const loginInfo = screen.getByRole('listitem', { name: 'login info' });
    expect(loginInfo).toBeInTheDocument();
});

test('device metrics information should be renderd', () => {
    render(<PrivacyPolicy />);

    const deviceMetricsInfo = screen.getByRole('listitem', { name: 'device metrics' });
    expect(deviceMetricsInfo).toBeInTheDocument();
});

test('IP address used to connect your computer to the internet; information should be renderd', () => {
    render(<PrivacyPolicy />);

    const addressInformation = screen.getByRole('listitem', { name: 'connection IP address' });
    expect(addressInformation).toBeInTheDocument();
});