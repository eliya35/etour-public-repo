import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/privacypolicy.css'


const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <Link to='/privacy-policy'></Link>
            <h1>Etour International Privacy Policy</h1>
            <div className="intro-info">
                <p>We understand how you care on how information about you is used and shared,
                    and we appriciate your trust that we will do so with care.
                    This Privacy Policy describes how Etour collect and process your personal
                    information.
                    <br />

                    <strong>
                        By using Etour Services, you are consenting to the practices described
                        in this Privacy Notice.
                    </strong>
                </p>
            </div>
            <div className="body">
                <ul>
                    <li>What Personal information about Adventures Dose Etour Collect?</li>
                    <li>For What Purpose Dose Etour Use Your Personal Information?</li>
                    <li>Dose Etour Share Your Personal Infornation?</li>
                    <li>How Secure Is information About Me?</li>
                    <li>What Information Can I access?</li>
                    <li>Are Children Allowed to Use Etour?</li>
                    <li>Examples of information Collected?</li>
                </ul>
            </div>
            <span>
                {/* Personal Information */}

                <h2>What Personal information about Adventures Dose Etour Collect?</h2>
                <p>
                    We collect your personal information in order to provide quality and
                    first class services.

                    Here are types of personal information we collect:
                </p>
                <li><strong>Information You Give Us: </strong>
                    <p>
                        We recive and store inforamtion of all kind provided by you. This are the
                        inforamtion you provide for your account. You can choose not to provide
                        certain information, but this might limit your experience in our Service.
                    </p>
                </li>
                <li><strong>Automatic Information: </strong>
                    <p>
                        We automatically collect and store certain types of information
                        about your use of Etour Services, including information about your
                        interaction with content and services available through Etour Services.
                        We use "cookies" and other unique identifiers, and we obtain certain
                        inforamtion when your web browser or device.
                    </p>
                </li>
                <li><strong>Information From Other Source: </strong>
                    <p>
                        We might recive inforamtion about you from other sources
                        available in the internet, such us popular site.
                    </p>
                </li>
                {/* Pourpose for the information */}

                <h2>For What Purpose Dose Etour Use Your Personal inforamtion?</h2>
                <p>
                    We use personal information to operate,provide, develop, and improve
                    the services we offer to our Adventures. These purpose include:
                </p>
                <li><strong>Recommendations and personalization: </strong>
                    <p>
                        We use your personal inforamtion to recommend features,
                        and services that might be of interest to you, identify your preferences,
                        and personalize your experience with Etour Services
                    </p>
                </li>
                <li><strong>Communicate with you: </strong>
                    <p>
                        We use your personal information to communicate with you in relation to Etour Services
                        via different channels (e.g., by phone, email, chat).
                    </p>
                </li>
                <li><strong>Advertisment: </strong>
                    <p>
                        We use your personal information to display interest-based ads for features and services
                        that might be of interest to you.
                    </p>
                </li>
                <li><strong>Fraud Prevention and Credit Risks: </strong>
                    <p>
                        We use personal information to prevent and detect fraud and abuse in order to protect
                        the security of our Adventures, Etour, and others.
                    </p>
                </li>
                {/* Cookies and other identifires information */}

                <h2>What About Cookies and Other Identifiers?</h2>
                <p>
                    To enable our systems to recognize your browser or device and to provide and
                    first class Etour Services, we use cookies and other identifiers.
                </p>
                {/* Dose Etour Share Your Information */}

                <h2>Dose Etour Share Your Personal Inforation?</h2>
                <p>
                    Information about our Adventures is an important part of our business,
                    and we are not in the business of selling our customers' personal information
                    to others. We share personal information only as described below:
                </p>
                <li><strong>Business Transfers: </strong>
                    <p>
                        As we continue to develop our business, we might sell or buy other
                        businesses or services. In such transactions, Adventures information
                        generally is one of the transferred business assets but remains
                        subject to the promises made in any pre-existing Privacy
                        Notice (unless, of course, the customer consents otherwise).
                        Also, in the unlikely event that Etour or substantially
                        all of its assets are acquired, Adventures information will of course
                        be one of the transferred assets.
                    </p>
                </li>
                {/* How Secure is my infomation */}

                <h2>How Secure Is Information About Me?</h2>
                <p>We design our systems with your security and privacy in mind.</p>
                <li>
                    We work to protect the security of your personal information during transmission
                    by using encryption protocols and software.
                </li>
                <li>
                    We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling
                    credit card data.
                </li>
                <li>
                    It is important for you to protect against unauthorized access to your password
                    and to your computers, devices, and applications. We recommend using a unique
                    password for your Etour account that is not used for other online accounts.
                    Be sure to sign off when finished using a shared computer.
                </li>
                <li>
                    We maintain physical, electronic, and procedural safeguards in connection with the
                    collection, storage, and disclosure of customer personal information. Our security
                    procedures mean that we may ask to verify your identity before we disclose personal
                    information to you.
                </li>
                {/* What Inforamtion Can I access */}

                <h2>What Information Can I Access?</h2>
                <p>
                    You can access your information, including your name, payment options, profile
                    information, household settings, and in the "My Profile" section of the website.
                </p>
                {/* Are Children allowed to use Tour */}

                <h2>Are Children Allowed to Use Etour Services?</h2>
                <p>
                    If you are under 18, you may use Etour Services only with the involvement of a parent or
                    guardian. We do not knowingly collect personal information from children under
                    the age of 13 without the consent of the child's parent or guardian.
                </p>
                {/* Examples of information collected */}

                <h2>Examples of information Collected?</h2>
                <p><strong>Information You Give Us When You Use Etour Services</strong></p>
                <li>identifying information such as your name, address, and phone numbers;</li>
                <li>your age</li>
                <li>payment information;</li>
                <li>your IP address;</li>
                <li>personal description and photograph in Your Profile;</li>
                <li>content of reviews and emails to us;</li>
                <li>email addresses of your friends and other people;</li>
                <br />
                {/* Automatic Information */}
                <p><strong>Automatic Information</strong></p>
                <li>phone numbers used to call our customer service number;</li>
                <li>the location of your device or computer;</li>
                <li>login, email address, and password;</li>
                <li>device metrics such as when a device is in use, application usage, connectivity data, and any errors or event failures;</li>
                <li>the internet protocol (IP) address used to connect your computer to the internet;</li>
            </span>
            <br />
            <div className="container">
                <div className="feadback">
                    <h6>Was this inforamtion usefull?</h6>
                    <button className='btn btn-success m-2'>Yes</button>
                    <button className='btn btn-danger m-2'>No</button>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;