import React from 'react';
import { Link } from 'react-router-dom';


import '../Styles/faq.css'


// Handle Frequently asked questions
const FAQ = () => {
    return (
        <div className="faq">
            <Link to='/faq/'></Link>
            <h1>Frequently Askesd Question</h1>
            <br />
            <section>
                <ul>
                    {/* What is Etour */}

                    <li><h2>WHAT IS ETOUR?</h2>
                        <p>
                            Etour is an international electronic tourisim company for adventures all over
                            the gloab to use and share with family and friends. You can get more infornation
                            on Etour and its services <a href='/about/'>Click here</a>.
                        </p>
                    </li>
                    {/* Dose the company accept donations */}

                    <li><h2>DOSE THE COMPANY ACCEPT DONATIONS?</h2>
                        <p>
                            Etour dose accept and recive donations offerd in gratitude
                            you can read more on haw to donate and how the funds are used
                            at the <a href='/about/'>About</a> page on the bottom.
                        </p>
                    </li>
                    {/* Is Etour safe?*/}

                    <li><h2>IS ETOUR SAFE?</h2>
                        <p>
                            Etour takes the security of the inforamtion provided by our users very
                            seriously because is an important part in our Etour for effective
                            service rendering
                        </p>
                    </li>
                    {/*Can i try it without sining up?*/}

                    <li><h2>CAN I TRY IT WITHOUT SINING UP?</h2>
                        <p>
                            Yes! You could use Etour services without sining up; But you will not be 
                            able to access some of Etour Services without beeing logged in. Thus your
                            exprience maight be narrowed.
                        </p>
                    </li>

                </ul>
            </section>
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

export default FAQ;