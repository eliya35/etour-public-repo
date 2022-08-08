import React, { useEffect } from 'react';
import '../Styles/privacypolicy.css';
import FeedBack from './FeedBack';


const PrivacyPolicy = () => {

    // set the page title.
    useEffect(() => { document.title = 'Privacy policy'; });

    return (
        <div className="privacy-policy">
            <h1>Etour International Privacy Policy</h1>
            <div className="intro-info">
                <p data-testid='introduction'>
                    We understand how you care on how information about you is used and shared, and we appreciate your trust that we will do so with care. This Privacy Policy describes how Etour collect and process your personal information.
                    <br />

                    <strong>
                        By using Etour Services, you are consenting to the practices described in this Privacy Notice.
                    </strong>
                </p>
            </div>
            <div className="body">
                <ul>
                    <li data-testid='privacy-link'><a href='#personaldetails'>What Personal information about Adventures Dose Etour Collect?</a></li>
                    <li data-testid='privacy-link'><a href='#useofpersonalinfo'>For What Purpose Dose Etour Use Your Personal Information?</a></li>
                    <li data-testid='privacy-link'><a href='#sharepersonalInfo'>Dose Etour Share Your Personal Information?</a></li>
                    <li data-testid='privacy-link'><a href='#personalinfosecure'>How Secure Is information About Me?</a></li>
                    <li data-testid='privacy-link'><a href='#canaccess'>What Information Can I access?</a></li>
                    <li data-testid='privacy-link'><a href='#childrenallowed'>Are Children Allowed to Use Etour?</a></li>
                    <li data-testid='privacy-link'><a href='#infocollected'>Examples of information Collected?</a></li>
                </ul>
            </div>
            <span>
                {/* Personal Information */}

                <h2 id='personaldetails' aria-label='Persoanl details title'><a href='#personaldetails'>What Personal information about Adventures Dose Etour Collect?</a></h2>
                <p data-testid='etour-collects'>
                    We collect your personal information in order to provide quality and first class services. Here are types of personal information we collect:
                </p>
                <li><strong title='Information You Give Us'>Information You Give Us: </strong>
                    <p data-testid='information-you-give'>
                        We receive and store information of all kind provided by you. This are the information you provide for your account. You can choose not to provide certain information, but this might limit your experience in our Service.
                    </p>
                </li>
                <li><strong title='Automatic Info'>Automatic Information: </strong>
                    <p data-testid='auto-info'>
                        We automatically collect and store certain types of information about your use of Etour Services, including information about your interaction with content and services available through Etour Services. We use "cookies" and other unique identifiers, and we obtain certain information when your web browser or device.
                    </p>
                </li>
                <li><strong title='Other source Info'>Information From Other Source: </strong>
                    <p data-testid='other-source-info'>
                        We might receive information about you from other sources available in the internet, such us popular site.
                    </p>
                </li>
                {/* Purpose for the information */}

                <h2 id='useofpersonalinfo' aria-label='Purpose for collect'><a href='#useofpersonalinfo'>For What Purpose Dose Etour Use Your Personal information?</a></h2>
                <p data-testid='brief-intro'>
                    We use personal information to operate,provide, develop, and improve the services we offer to our Adventures. These purpose include:
                </p>
                <li><strong title='Recomendation'>Recommendations and personalization: </strong>
                    <p data-testid='recomendation-details'>
                        We use your personal information to recommend features, and services that might be of interest to you, identify your preferences, and personalize your experience with Etour Services
                    </p>
                </li>
                <li><strong title='For Communication'>Communicate with you: </strong>
                    <p data-testid='communication-purposes'>
                        We use your personal information to communicate with you in relation to Etour Services via different channels (e.g., by phone, email, chat).
                    </p>
                </li>
                <li><strong title='Advertisement'>Advertisement: </strong>
                    <p data-testid='advatisment'>
                        We use your personal information to display interest-based ads for features and services that might be of interest to you.
                    </p>
                </li>
                <li><strong title='Frud Prevention'>Fraud Prevention and Credit Risks: </strong>
                    <p data-testid='frud-prevention'>
                        We use personal information to prevent and detect fraud and abuse in order to protect the security of our Adventures, Etour, and others.
                    </p>
                </li>
                {/* Cookies and other identifies information */}

                <h2 aria-label='cookies identifiers'>What About Cookies and Other Identifiers?</h2>
                <p data-testid='cookies-description'>
                    To enable our systems to recognize your browser or device and to provide first class Etour Services, we use cookies and other identifiers.
                </p>
                {/* Dose Etour Share Your Information */}

                <h2 id='sharepersonalInfo' aria-label='Share information'><a href='#sharepersonalInfo'>Dose Etour Share Your Personal Information?</a></h2>
                <p data-testid='share-details'>
                    Information about our Adventures is an important part of our business, and we are not in the business of selling our customers' personal information to others. We share personal information only as described below:
                </p>
                <li><strong title='Business Transfers'>Business Transfers: </strong>
                    <p data-testid='business-transfer'>
                        As we continue to develop our business, we might sell or buy other businesses or services. In such transactions, Adventures information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Notice (unless, of course, the customer consents otherwise). Also, in the unlikely event that Etour or substantially all of its assets are acquired, Adventures information will of course be one of the transferred assets.
                    </p>
                </li>
                {/* How Secure is my information */}

                <h2 id='personalinfosecure' aria-label='my details security'><a href='#personalinfosecure'>How Secure Is information About Me?</a></h2>
                <p data-testid='security-introduction'>We design our systems with your security and privacy in mind.</p>
                <li aria-label='Encription protocol'>
                    We work to protect the security of your personal information during transmission by using encryption protocols and software.
                </li>
                <li aria-label='Payment card protection'>
                    We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling credit card data.
                </li>
                <li aria-label='Self protection'>
                    It is important for you to protect against unauthorized access to your password and to your computers, devices, and applications. We recommend using a unique password for your Etour account that is not used for other online accounts. Be sure to sign off when finished using a shared computer.
                </li>
                <li aria-label='Varification infomation'>
                    We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of customer personal information. Our security procedures mean that we may ask to verify your identity before we disclose personal information to you.
                </li>
                {/* What Information Can I access */}

                <h2 id='canaccess' aria-label='Information You access'><a href='#canaccess'>What Information Can I access?</a></h2>
                <p data-testid='can-accsess'>
                    You can access your information, including your name, payment options, profile information, household settings, and in the "My Profile" section of the website.
                </p>
                {/* Are Children allowed to use Tour */}

                <h2 id='childrenallowed' aria-label='Children Allowed to Use Etour'><a href='#childrenallowed'>Are Children Allowed to Use Etour?</a></h2>
                <p data-testid='children-accsess'>
                    If you are under 18, you may use Etour Services only with the involvement of a parent or guardian. We do not knowingly collect personal information from children under the age of 13 without the consent of the child's parent or guardian.
                </p>
                {/* Examples of information collected */}

                <h2 id='infocollected' aria-label='Information We Collected'><a href='#infocollected'>Examples of information Collected?</a></h2>
                <p data-testid='information-given'><strong>Information You Give Us When You Use Etour Services</strong></p>
                <li aria-label='identity infomation'>identifying information such as your name, address, and phone numbers;</li>
                <li aria-label='age'>your age</li>
                <li aria-label='payment info'>payment information;</li>
                <li aria-label='IP address'>your IP address;</li>
                <li aria-label='profile info'>personal description and photograph in Your Profile;</li>
                <li aria-label='reviews and email'>content of reviews and emails to us;</li>
                <li aria-label='friends email'>email addresses of your friends and other people;</li>
                <br />
                {/* Automatic Information */}
                <p data-testid='auto-info-collection'><strong>Automatic Information</strong></p>
                <li aria-label='contact info'>phone numbers used to call our customer service number;</li>
                <li aria-label='location info'>the location of your device or computer;</li>
                <li aria-label='login info'>login, email address, and password;</li>
                <li aria-label='device metrics'>device metrics such as when a device is in use, application usage, connectivity data, and any errors or event failures;</li>
                <li aria-label='connection IP address'>the internet protocol (IP) address used to connect your computer to the internet;</li>
            </span>
            <br />
            <div className="container">
                <FeedBack />
            </div>
        </div>
    );
}

export default PrivacyPolicy;