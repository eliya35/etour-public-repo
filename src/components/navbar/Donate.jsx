import React from 'react';


import '../Styles/donate.css'


// Handle Site Donations
const Donate = () => {
    return (
        <div className="donate">
            <h1>Etour Donation</h1>
            <br />
            {/* WHY DONATE */}

            <h2>WHY DONATE?</h2>
            <p>
                Since Etour.com is a growing company sufficient funds are a necesity to ensure
                a smooth user experience(eg. Displaying high resolution images and a more detail & acurrate
                information for You & other Adventurers)
            </p>
            {/* HOW ARE MY DONATIONS USED */}

            <h2>HOW ARE MY DONATIONS USED?</h2>
            <p>
                Donations recived by Etour.com are <strong>exclusively</strong> used to increase Your
                experience and that of other adventures using Etour Services to a whole new Leval.
                This is done by implimenting new features suggested by You and other tourist around
                the gloab. (To suggest new features or upgrades <a href="/suggestion/">Click here </a>)
            </p>
            {/* CAN I DONATE MORE THAN ONCE */}

            <h2>CAN I DONATE MORE THAN ONCE?</h2>
            <p>
                Hell Yhea!!! You can. You could doante more than once and any amount for that matter.
                Every donations towards the betterment of Etour and its services are graciously accepted.
            </p>
            {/* WHAT CURRENCY DO I DONATE WITH*/}

            <h2>WHAT CURRENCY DO I DONATE WITH?</h2>
            <p>
                Currently Etour.com accepts USD($) or Pounds(₤)
            </p>
            <div className="paypal-usd">
                <span>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="9ZT6VT348RQWA" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_KE/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                    <br />
                </span>
                <div className="container">
                    <div className="feadback">
                        <h6>Was this inforamtion usefull?</h6>
                        <button className='btn btn-success m-2'>Yes</button>
                        <button className='btn btn-danger m-2'>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;