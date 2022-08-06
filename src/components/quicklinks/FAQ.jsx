import React, { useEffect } from 'react';
import '../Styles/faq.css';
import FeedBack from './FeedBack';


const FAQ = () => {
    // set the document title.
    useEffect(() => { document.title = 'FAQ'; });

    return (
        <div className="faq">
            <h1>Frequently Asked Question</h1>
            <br />
            <section>
                <ul>
                    {/* What is Etour */}

                    <li><h2>WHAT IS ETOUR?</h2>
                        <p data-testid='answer-one'>
                            Etour is an international electronic tourism company for adventures all over the glob to use and share with family and friends. You can get more information on Etour and its services <a href='/about/'>Click here</a>.
                        </p>
                    </li>
                    {/* Dose the company accept donations */}

                    <li><h2>DOSE THE COMPANY ACCEPT DONATIONS?</h2>
                        <p data-testid='answer-two'>
                            Etour dose accept and receive donations offered in gratitude you can read more on haw to donate and how the donations are used at the <a href='/about/'>About</a> page.
                        </p>
                    </li>
                    {/* Is Etour safe?*/}

                    <li><h2>IS ETOUR SAFE?</h2>
                        <p data-testid='answer-three'>
                            Etour takes the security of the information provided by our users very seriously because is an important part in our Business effective service rendering. Etour has taken measures and investments to ensures the safety and privacy of our users.
                        </p>
                    </li>
                    {/*Can i try it without signing up?*/}

                    <li><h2>CAN I TRY IT WITHOUT SIGNING UP?</h2>
                        <p data-testid='answer-four'>
                            Yes! You could use Etour services without signing up; But you will not be able to access some of Etour Services without being logged in. Thus your experience might be narrowed.
                        </p>
                    </li>

                </ul>
            </section>
            <div className="container">
                <div className="feedback">
                    <FeedBack />
                </div>
            </div>
        </div>
    );
}

export default FAQ;