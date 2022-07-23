import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/termsandcondition.css'
import FeedBack from './FeedBack';


const TermsAndCondition = () => {

    // set the page title.
    useEffect(() => { document.title = 'Terms of use'; });

    return (
        <div className="terms">
            <Link to='/terms/'></Link>
            <span>
                <h1>Condition of Use </h1>
                {/* Introductory Text */}

                <p>
                    Welcome to Etour and etour international services.
                    By using Etour Services, you agree, on behalf of yourself and all
                    members of your household and others who use any Service under your account,
                    to the following conditions.
                </p>
                <h2>Please read these conditions carefully.</h2>
                <p>
                    We offer a wide range of Etour Services, and sometimes additional terms may apply.
                    When you use this Services. You also will be subject to the guidelines, terms and
                    agreements applicable to that Etour Service.
                </p>
                {/* Privacy */}

                <h2>PRIVACY</h2>
                <p>
                    Please review our <a href='/privacy-policy'>Privacy Policy</a>, which also governs your
                    use of Etour Services, to understand our practices.
                </p>
                {/* Electronic Communication */}

                <h2>ELECTRONIC COMMUNICATIONS</h2>
                <p>
                    When you use Etour Services, or send e-mails, text messages, and other communications
                    from your desktop or mobile device to us, you may be communicating with
                    us electronically. You consent to receive communications from us electronically,
                    such as e-mails, texts, mobile push notices, or notices and messages on this site
                    or through the other Etour Services, and you can retain copies of these communications
                    for your records. You agree that all agreements, notices, disclosures, and other
                    communications that we provide to you electronically satisfy any legal requirement
                    that such communications be in writing.
                </p>
                {/* Copyright */}

                <h2>COPYRIGHT</h2>
                <p>
                    All content included in or made available through any Etour Service, such as text,
                    graphics, logos, button, images, digital downloads, data compilations,
                    and software is the property of Etour or its content suppliers and protected by
                    the international copyright laws. The compilation of all content
                    included in or made available through any Etour Service is an exclusive property
                    of Etour and protected by international copyright laws.
                </p>
                {/* License and Access */}

                <h2>LICENSE AND ACCESS</h2>
                <p>
                    No Etour Service, nor any part of any Etour Service, may be reproduced, duplicated,
                    copied, sold, resold, visited, or otherwise exploited for any commercial purpose without
                    express written consent of Etour. You may not frame or utilize framing techniques to
                    enclose any trademark, logo, or other proprietary information (including images, text,
                    page layout, or form) of Etour without express written consent. You may not use any
                    meta tags or any other "hidden text" utilizing Etour's name or trademarks without the
                    express written consent of Etour. You may not misuse the Etour Services. You may
                    use the Etour Services only as permitted by the law. The licenses granted by Etour
                    terminate if you do not comply with these Conditions of Use or any Service Terms.
                </p>
                {/* Your Account */}

                <h2>YOUR ACCOUNT</h2>
                <p>
                    You may need your own Etour account to use certain Etour Services, and
                    you may be required to be logged in to the account. You are responsible for maintaining
                    the confidentiality of your account and password and for restricting access to your
                    account, and you agree to accept responsibility for all activities that occur under
                    your account or password.
                </p>
                {/* Reviews and Comments */}

                <h2>REVIEWS, COMMENTS, COMMUNICATIONS, AND OTHER CONTENT</h2>
                <p>
                    You may post reviews, comments, and other content; or communications; and submit
                    suggestions, ideas, comments, questions, or other information, so long as the
                    content is not illegal, obscene, threatening, defamatory, invasive of privacy,
                    infringing of intellectual property rights (including publicity rights), or
                    otherwise injurious to third parties.
                    <br />
                    <br />
                    If you do post content or submit material, and unless we indicate otherwise,
                    You grant Etour and sublicense the right to use the name that you submit in
                    connection with such content, if they choose. Etour has the right
                    but not the obligation to monitor and edit or remove any activity or content.
                    We takes no responsibility and assumes no liability for any content posted
                    by you or any third party.
                </p>
                {/* Tour Site Description */}

                <h2>ADVENTURE SITES DESCRIPTIONS</h2>
                <p>
                    Etour attempts to be as accurate as possible. However, Etour does not warrant that
                    tour sites descriptions or other content of any Etour Service is accurate, complete,
                    reliable, current, or error-free.
                </p>
                {/* Our Address */}

                <h2>OUR ADDRESS</h2>
                <p>
                    Etour.Herokuapp.com;
                    <br />
                    NAIROBI;
                    <br />
                    <a href="https://www.etour.herokuapp.com">Etour International</a>
                </p>
                <br />
                <div className="container">
                    <FeedBack />
                </div>
            </span>
        </div>
    );
}

export default TermsAndCondition;