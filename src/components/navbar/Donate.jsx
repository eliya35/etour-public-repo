import React from 'react';
import '../Styles/donate.css'


// Handle Site Donations
const Donate = () => {
    return (
        <div className="donate">

            {/* INTRODUCTION */}
            <h2>ETOUR AND DONATIONS</h2>
            <p>
                Hello there. Welcome to Etour donations page. At this page you shall find some basic information's on Etour donations, information on why you should donate if you so desire and what this donations are used for.
            </p>
            <br />
            {/* WHY DONATE */}

            <h2>WHY DONATE?</h2>
            <p>
                Donated funds are used by Etour for optimal user experience eg. Displaying high resolution images, a more detail and accurate
                information for You and other Adventurers out there etc.
                It also assist Etour in conducting research to discover destinations that are sure to blow
                your mind.
            </p>
            {/* HOW ARE MY DONATIONS USED */}

            <h2>HOW ARE MY DONATIONS USED?</h2>
            <p>
                Donations are <strong>exclusively</strong> used to increase Your
                experience and that of other adventures using Etour Services.
                This is done by implementing new features suggested by You or other adventures around
                the glob. To suggest a feature or upgrades or some idea <a href="/suggestion/">Click here </a>
            </p>
            {/* CAN I DONATE MORE THAN ONCE */}

            <h2>CAN I DONATE MORE THAN ONCE?</h2>
            <p>
                Hell Yeah!!! You can. You could donate more than once and any amount for that matter.
                Every donations towards the betterment of Etour and its services are graciously accepted.
            </p>
            {/* WHAT CURRENCY DO I DONATE WITH*/}

            <h2>WHAT CURRENCY DO I DONATE WITH?</h2>
            <p>
                You have the freedom of donating with all sorts of currency supported by Pay pal.
                Just click on the button bellow with the label "Donate" and you can proceed on with the
                donation with a paypal account or credit card as you desire
            </p>
            <div className="paypal-usd">
                <span>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="9ZT6VT348RQWA" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_KE/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </span>
                <div className="container">
                    <div className="feedback">
                        <h6>Was this information usefully?</h6>
                        <button className='btn btn-success m-2'>Yes</button>
                        <button className='btn btn-danger m-2'>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;