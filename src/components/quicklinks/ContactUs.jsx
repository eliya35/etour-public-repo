import React, { useEffect, useState } from 'react';
import { useCountry } from './CustomHook';
import axios from 'axios';
import '../Styles/contactus.css';


const ContactUs = () => {
    const initialState = { firstName: "", lastName: "", email: "", content: "" };
    const [formValues, setFormValues] = useState(initialState);
    const [country, setCountry] = useState(null);
    const [formErrors, setFormErrors] = useState(initialState);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
    const avilableCountries = useCountry();
    const isFormSubmitted = Object.keys(formErrors).length === 0 && isSubmit; //true && false => true;

    const blankFirstName = formValues.firstName === "";
    const blankLastName = formValues.lastName === "";
    const blankEmail = formValues.email === "";
    const blankMessage = formValues.content === "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    // set the page title.
    useEffect(() => { document.title = 'Contact us'; });

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors, isSubmit]);


    const validate = (values) => {
        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!values.firstName) {
            errors.firstName = 'First name is required!';
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required!';
        }
        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!regex.test(values.email)) {
            errors.email = 'Pleas input a valid email!';
        }
        if (!values.content) {
            errors.content = 'Please type some message!';
        } else if (values.content.length < 3) {
            errors.content = "Please input a valid message!";

        }
        return errors;
    }

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value
        if (selectedCountry !== '') {
            setCountry(previousValue => selectedCountry);
        } else {
            setCountry(previousValue => null);
        }
    }

    const sendMessage = async () => {
        let data = {
            country: country,
            first_name: formValues.firstName,
            last_name: formValues.lastName,
            email: formValues.email,
            message: formValues.content,
            created_at: new Date().toISOString()
        };

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        await axios.post('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/contactUs/', data)
            .then(() => setIsSentSuccessfully(true))
            .catch(() => {
                alert('Oops! something went wrong while sending your message. Make sure you have logged in and the form is field correctly or try again after a few minutes.')
            });

        setIsSentSuccessfully(false);
    }

    if (isSentSuccessfully) {
        alert("Your message has been sent successfully. Thank you for contacting Etour we will get back to you shortly.");
    }

    return (
        <div className="contact-us">
            <form onSubmit={handleSubmit}>
                <h1 title='contactUs'>Contact Us</h1>
                <p data-testid='introduction'>
                    Hello there, You are at Etour contact page. Here you can reach us under the address bellow or alternatively send as a messages on the form bellow. Please remember to leave accurate information to enable  us to reach back and server you in time.
                </p>
                {/* Our Address */}

                <h3>OUR ADDRESS</h3>
                <p data-testid='dispaly-address'>
                    Etour.Herokuapp.com;
                    <br />
                    Whatsapp @ 0113382969
                    <br />
                    NAIROBI;
                    <br />
                    <a href="https://www.etour.herokuapp.com">Etour international</a>
                </p>
                <br />
                <h3>SEND US A MESSAGE</h3>
                <div className="fields">
                    <div className="form-contents">

                        {/* Country infomation */}
                        <div className="region">
                            <span label='country'>Country:</span>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={handleCountryChange}
                            >
                                {avilableCountries.map((option, index) => (
                                    <option key={index} value={option.value} data-testid="option">
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* first & last name information */}
                        <div className="names">
                            <div className="col-md-4">
                                <label aria-label='Firstname' className="form-label">First name:</label>
                                <input
                                    placeholder='your first name here...'
                                    type="text"
                                    name='firstName'
                                    className='form-control'
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <p data-testid='error-first-name'>{formErrors.firstName}</p>
                            
                            <div className="col-md-4">
                                <label aria-label='Last name' className="form-label">Last name:</label>
                                <input
                                    type="text"
                                    name='lastName'
                                    placeholder='last name here...'
                                    className='form-control'
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <p data-testid='error-last-name'>{formErrors.lastName}</p>

                        {/* email address information */}
                        <div className="mb-3">
                            <label aria-label='Email address' className="form-label">Email address:</label>
                            <input
                                className="form-control"
                                type="email"
                                name='email'
                                placeholder="name@example.com"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p data-testid='error-email'>{formErrors.email}</p>

                        {/* text message input node */}
                        <div className="mb-3">
                            <label aria-label='Send a message' className="form-label">Send a Message bellow:</label>
                            <textarea
                                className="form-control"
                                placeholder='type something here...'
                                name='content'
                                rows="3"
                                value={formValues.content}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                        <p data-testid='text-error'>{formErrors.content}</p>

                        <div className="col-12">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                onClick={sendMessage}
                                disabled={isFormSubmitted || blankFirstName || blankLastName || blankEmail || blankMessage}
                            >Submit form
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;