import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../usercontext/UserProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/useraccount.css';


const UserAccount = () => {
    const { user, setUser } = useContext(UserContext);
    const previousState = {
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
    };
    const initialState = { username: "", firstName: "", lastName: "", email: "" };
    const [formValues, setFormValues] = useState(initialState);
    const [previousValues] = useState(previousState);
    const [formErrors, setFormErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSubmit, setIsSubmit] = useState(true);
    const [isPosted, setIsPosted] = useState(false);
    const userId = user.id;
    const navigate = useNavigate();

    // set the document title
    useEffect(() => { document.title = 'My Account'; });

    const handleFormValueChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
        setIsDisabled(false);
    }

    const validateFormValue = (values) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const errors = {}

        if (values.firstName && values.firstName.length < 3) {
            errors.firstName = "The name is to short!"
        } else if (values.firstName.length > 50) {
            errors.firstName = "The name is to long!"
        }
        if (values.lastName && values.lastName.length < 3) {
            errors.lastName = "The name is to short!"
        } else if (values.lastName.length > 50) {
            errors.lastName = "The name is to long!"
        }
        if (values.email === "") {
            errors.email = 'Email is required!'
        } else if (!regex.test(values.email)) {
            errors.email = 'Pleas input a valid email!'
        }
        return errors;
    }

    // updating only alterd values
    const cleandFormValuesData = () => {
        let cleanFormValueData = new FormData();

        if (formValues.firstName && formValues.firstName !== previousValues.firstName) {
            cleanFormValueData.append("first_name", formValues.firstName)
        }
        if (formValues.lastName && formValues.lastName !== previousValues.lastName) {
            cleanFormValueData.append("last_name", formValues.lastName)
        }
        if (formValues.email !== user.email && formValues.email !== "") {
            cleanFormValueData.append("email", formValues.email)
        }
        return cleanFormValueData
    }

    const updateMyAccount = async () => {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        await axios.patch(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/${userId}/`, cleandFormValuesData())
            .then(() => {
                setIsPosted(true);
            })
            .catch(() => {
                alert("An error occurred while updating your profile. Please make sure all your fields are field correctly!")
            })
        setIsDisabled(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateFormValue(formValues));
        setIsSubmit(true);
    }

    const handleAccountDelete = async () => {
        if (window.confirm(`Hi there! ${user.username} This account will be deleted Permanently!! and loss all your information Permanently. To continue just clik "Ok" else the "Cancel" button.`)) {
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'

            await axios.delete(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/${userId}/`)
            navigate('/')
            setUser(null);
        }
    };


    return (
        <div className="user-account-container">
            <div className="user-profile-container">
                <div style={{ visibility: user ? "visible" : "hidden" }} className="only-authenticated">
                    {isPosted ? <div className="message">Profile Successfully Updated</div> : <div className='show-nothing'></div>}
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">

                                    <form className="form" method="post" id="registrationForm" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <div className="col-xs-6">
                                                <label htmlFor="first_name"><h5>First name</h5></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstName"
                                                    id="first_name"
                                                    placeholder={previousValues.firstName}
                                                    title="enter your first name."
                                                    value={formValues.firstName}
                                                    onChange={handleFormValueChange}
                                                />
                                            </div>
                                            <p data-testid="first-name-error">{formErrors.firstName}</p>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-xs-6">
                                                <label htmlFor="last_name"><h5>Last name</h5></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="lastName"
                                                    id="last_name"
                                                    placeholder={previousValues.lastName}
                                                    title="enter your last name if any."
                                                    value={formValues.lastName}
                                                    onChange={handleFormValueChange}
                                                />
                                            </div>
                                            <p data-testid="last-name-error">{formErrors.lastName}</p>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-xs-6">
                                                <label htmlFor="email"><h5>Email</h5></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email" id="email"
                                                    placeholder={previousValues.email}
                                                    title="enter your email."
                                                    value={formValues.email}
                                                    onChange={handleFormValueChange}
                                                />
                                            </div>
                                            <p data-testid="email-error">{formErrors.email}</p>
                                        </div>

                                        <div className="username">
                                            <span><a href="/my-account/change-username/">Change Your Username</a></span>
                                        </div>

                                        <div className="password">
                                            <span><a href="/my-account/change-password/">Change Password</a></span>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <br />
                                                <button
                                                    className="btn btn-sm btn-success"
                                                    type="submit"
                                                    onClick={updateMyAccount}
                                                    disabled={isDisabled}
                                                >
                                                    <i className="glyphicon glyphicon-ok-sign" />
                                                    Save
                                                </button>

                                                <button
                                                    className="btn btn-warning btn-sm m-2"
                                                    type="reset"
                                                    onClick={() => setFormValues(initialState)}
                                                >
                                                    <i className="glyphicon glyphicon-repeat" />
                                                    Reset
                                                </button>

                                                <div className="delete-btn">
                                                    <button
                                                        className="btn btn-danger btn-sm m-2"
                                                        onClick={handleAccountDelete}
                                                    >
                                                        <i className="glyphicon glyphicon-repeat" />
                                                        Delete Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!user && <div><h1>NOT AUTHORIZED!</h1></div>}
            </div>
        </div>
    );
};

export default UserAccount;