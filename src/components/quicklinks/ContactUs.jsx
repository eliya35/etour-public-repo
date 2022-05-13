import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/contactus.css'


const ContactUs = () => {

    const countries = {
        egypt: 'EGYPT',
        morocco: 'MOROCCO',
        southAfrica: 'SOUTH AFRICA',
        tunisia: 'TUNISIA',
        algeria: 'ALGERIA',
        zimbabwe: 'ZIMBABWE',
        mozambique: 'MOZAMBIQUE',
        ivoryCost: 'IVORY COST',
        kenya: 'KENYA',
        botswana: 'BOTSWANA',
        usa: 'USA',
        mexico: 'MEXICO',
        canada: 'CANADA',
        argentina: 'ARGENTINA',
        dominicanRepublic: 'DOMINICAN REPUBLIC',
        brazil: 'BRAZIL',
        chile: 'CHILE',
        peru: 'PERU',
        cuba: 'CUBA',
        colombia: 'COLOMBIA',
        china: 'CHINA',
        thailand: 'THAILAND',
        japan: 'JAPAN',
        malaysia: 'MALAYSIA',
        hongKong: 'HONG KONG',
        macau: 'MACAU',
        vietnam: 'VIETNAM',
        southKorea: 'SOUTH KOREA',
        indonesia: 'INDONESIA',
        france: 'FRANCE',
        spain: 'SPAIN',
        italy: 'ITALY',
        turkey: 'TURKEY',
        germany: 'GERMANY',
        uk: 'UNITED KINGDOM',
        australia: 'AUSTRALIA',
        greece: 'GREECE',
        portugol: 'PORTUGOL',
        russia: 'RUSSIA',
        unitedArabEmirates: 'UNITED ARAB EMIRATES',
        saudiArabia: 'SAUDI ARABIA',
        lebanon: 'LEBANON',
        israel: 'ISRAEL',
        jordan: 'JORDAN',
        qatar: 'QATAR',
        iran: 'IRAN',
        bahrain: 'BAHRAIN',
        iraq: 'IRAQ',
    }
    const initialState = { firstName: null, lastName: null, email: null, content: null };
    const [formValues, setFormValues] = useState(initialState);
    const [country] = useState(countries)
    const [region, setRegion] = useState(null)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const isFormSubmitted = Object.keys(formErrors).length === 0 && isSubmit;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors, isSubmit])


    const validate = (values) => {
        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!values.firstName) {
            errors.firstName = 'First name is required!'
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required!'
        }
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regex.test(values.email)) {
            errors.email = 'Pleas input a valid email!'
        }
        if (!values.content) {
            errors.content = 'Please type some message!'
        } else if (values.content.length < 3) {
            errors.content = "Please input a valid message!"

        }
        return errors;
    }

    const countyChanged = (e) => {
        const place = e.target.value
        if (place !== 'Open this select menu') {
            setRegion(previousValue => place);
        } else {
            setRegion(previousValue => null);
        }
    }

    const sendMessage = () => {
        let data = {
            country: region,
            first_name: formValues.firstName,
            last_name: formValues.lastName,
            email: formValues.email,
            message: formValues.content,
            created_at: new Date().toISOString()
        };

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.post('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/contactUs/', data)
            .then(alert("Your message has been sent successfully"))
            .catch(err => {
                alert('Oops! something went wrong while sending your message. Make sure you have logged in and the form is field correctly or try again after a few minutes.')
            })
    }

    return (
        <div className="contact-us">
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <p>
                    Hello there, You are at Etour contact page. Here you can reach us under the address bellow
                    or alternatively send as a messages on the form bellow. Please remember to leave accurate information
                    to enable  us to reach back and server you in time.
                </p>
                {/* Our Address */}

                <h3>OUR ADDRESS</h3>
                <p>
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
                        {/* REGION INFO */}
                        <div className="region">
                            <span>Country:</span>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={countyChanged}

                            >
                                <option>Open this select menu</option>
                                <option value={country.egypt}>EGYPT</option>
                                <option value={country.morocco}>MOROCCO</option>
                                <option value={country.southAfrica}>SOUTH AFRICA</option>
                                <option value={country.tunisia}>TUNISIA</option>
                                <option value={country.algeria}>ALGERIA</option>
                                <option value={country.zimbabwe}>ZIMBABWE</option>
                                <option value={country.mozambique}>MOZAMBIQUE</option>
                                <option value={country.ivoryCost}>IVORY COST</option>
                                <option value={country.kenya}>KENYA</option>
                                <option value={country.botswana}>BOTSWANA</option>
                                <option value={country.usa}>USA</option>
                                <option value={country.mexico}>MEXICO</option>
                                <option value={country.canada}>CANADA</option>
                                <option value={country.argentina}>ARGENTINA</option>
                                <option value={country.dominicanRepublic}>DOMINICAN REPUBLIC</option>
                                <option value={country.brazil}>BRAZIL</option>
                                <option value={country.chile}>CHILE</option>
                                <option value={country.peru}>PERU</option>
                                <option value={country.cuba}>CUBA</option>
                                <option value={country.colombia}>COLOMBIA</option>
                                <option value={country.thailand}>THAILAND</option>
                                <option value={country.malaysia}>MALAYSIA</option>
                                <option value={country.hongKong}>HONG KONG</option>
                                <option value={country.macau}>MACAU</option>
                                <option value={country.vietnam}>VIETNAM</option>
                                <option value={country.southKorea}>SOUTH KOREA</option>
                                <option value={country.indonesia}>INDONESIA</option>
                                <option value={country.france}>FRANCE</option>
                                <option value={country.spain}>SPAIN</option>
                                <option value={country.italy}>ITALY</option>
                                <option value={country.turkey}>TURKEY</option>
                                <option value={country.germany}>GERMANY</option>
                                <option value={country.uk}>UNITED KINGDOM</option>
                                <option value={country.australia}>AUSTRALIA</option>
                                <option value={country.greece}>GREECE</option>
                                <option value={country.portugol}>PORTUGOL</option>
                                <option value={country.russia}>RUSSIA</option>
                                <option value={country.unitedArabEmirates}>UNITED ARAB EMIRATES</option>
                                <option value={country.saudiArabia}>SAUDI ARABIA</option>
                                <option value={country.lebanon}>LEBANON</option>
                                <option value={country.israel}>ISRAEL</option>
                                <option value={country.jordan}>JORDAN</option>
                                <option value={country.qatar}>QATAR</option>
                                <option value={country.iran}>IRAN</option>
                                <option value={country.bahrain}>BAHRAIN</option>
                                <option value={country.iraq}>IRAQ</option>
                            </select>
                        </div>
                        {/* FIRST & LAST NAME */}

                        <div className="names">
                            <div className="col-md-4">
                                <label for="validationDefault01" className="form-label">First name:</label>
                                <input
                                    type="text"
                                    name='firstName'
                                    className='form-control'
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.firstName}</p>
                            <div className="col-md-4">
                                <label
                                    for="validationDefault02"
                                    className="form-label"
                                >Last name:
                                </label>
                                <input
                                    type="text"
                                    name='lastName'
                                    className='form-control'
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.lastName}</p>
                        </div>
                        {/* EMAIL ADDRESS */}

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                            <input
                                className="form-control"
                                type="email"
                                name='email'
                                placeholder="name@example.com"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.email}</p>

                        {/* MESSAGE US */}

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Send a Message bellow:</label>
                            <textarea
                                className="form-control"
                                name='content'
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={formValues.content}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                        <p>{formErrors.content}</p>
                        {/* SUBMIT BUTTON */}

                        <div class="col-12">
                            <button
                                class="btn btn-primary"
                                type="submit"
                                onClick={sendMessage}
                                disabled={isFormSubmitted}
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