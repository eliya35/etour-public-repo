import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { UserContext } from '../usercontext/UserProvider';
import { useNavigate } from 'react-router-dom'

import '../Styles/useraccount.css'


const UserAccount = () => {
    const { user, setUser } = useContext(UserContext);
    const userId = user.id;

    
    const initialState = {
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
    };
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSubmit, setIsSubmit] = useState(true);
    const [isPosted, setIsPosted] = useState(false);


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors, isSubmit])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
        setIsDisabled(false);
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        // firs & last name validation
        if (values.firstName && values.firstName.length < 3) {
            errors.firstName = "The name is to short!"
        } else if (values.firstName.length > 50) {
            errors.firstName = "The name is to long"
        }
        if (values.lastName && values.lastName.length < 3) {
            errors.lastName = "The name is to short"
        } else if (values.lastName.length > 50) {
            errors.firstName = "The name is to long"
        }

        // email validation
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regex.test(values.email)) {
            errors.email = 'Pleas input a valid email!'
        }

        return errors;
    }

    const updateMyAccount = async () => {

        let myUserAccount = new FormData();

        if (formValues.firstName && formValues.firstName !== user.first_name) {
            myUserAccount.append("first_name", formValues.firstName)
            // console.log('first_name:', formValues.firstName)
        }
        if (formValues.lastName && formValues.lastName !== user.last_name) {
            myUserAccount.append("last_name", formValues.lastName)
            // console.log('last_name:', formValues.lastName)
        }

        if (formValues.email !== user.email && formValues.email !== "") {
            myUserAccount.append("email", formValues.email)
            // console.log("email:", formValues.email)
        }




        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        // await axios.patch(`http://127.0.0.1:8000/api/user/${userId}/`, myUserAccount)
        await axios.patch(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/${userId}/`, myUserAccount)
        
            .then(res => {
                // console.log('Updated Acc to:', res.data);
                setIsPosted(true);
            })
            .catch(err => {
                alert("An error occurred while updating your profile. Please make sure all your fields are field correctly!")
            })
        
        setIsDisabled(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const handleAccountDelete = async () => {
        if (window.confirm(`Hi there! ${user.username} This account will be deleted Permanently!! and loss all your information Permanently. To continue just clik "Ok" else the "Cancel" button.`)) {
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'

            // await axios.delete(`http://127.0.0.1:8000/api/user/${userId}/`)
            await axios.delete(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/${userId}/`)
            navigate('/')
            setUser(null);
        }

    };

    return (
        <div className="user-account-container">

            <div className="user-profile-container">
                {
                    user &&
                    <div className="only-authenticated">
                        {isPosted ? <div className="message">Profile Successfully Updated</div> : <div className='show-nothing'></div>}
                        <div className="row">
                            <div className="col-sm-3">

                                <ul className="list-group">
                                    <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                                    <li className="list-group-item text-right"><span className="pull-left"><strong>Destinations</strong></span> 0</li>
                                    <li className="list-group-item text-right"><span className="pull-left"><strong>Comments</strong></span> 13</li>
                                    <li className="list-group-item text-right"><span className="pull-left"><strong>Replies</strong></span> 37</li>
                                    {/* <li className="list-group-item text-right"><span className="pull-left"><strong>Star rated</strong></span> 78</li> */}
                                </ul>

                            </div>
                            <div className="col-sm-9">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="home">

                                        <form className="form" action="" method="post" id="registrationForm" onSubmit={handleSubmit}>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label for="first_name"><h5>First name</h5></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="firstName"
                                                        id="first_name"
                                                        placeholder="first name"
                                                        title="enter your first name if any."
                                                        value={formValues.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <p>{formErrors.firstName}</p>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label for="last_name"><h5>Last name</h5></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="lastName"
                                                        id="last_name"
                                                        placeholder="Last name"
                                                        title="enter your last name if any."
                                                        value={formValues.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <p>{formErrors.lastName}</p>
                                            </div>
                                            <div className="form-group">

                                                <div className="col-xs-6">
                                                    <label for="email"><h5>Email</h5></label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email" id="email"
                                                        placeholder="Email"
                                                        title="enter your email."
                                                        value={formValues.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <p>{formErrors.email}</p>
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
                                                    ><i
                                                        className="glyphicon glyphicon-ok-sign"
                                                    >
                                                        </i>
                                                        Save
                                                    </button>

                                                    <button
                                                        className="btn btn-warning btn-sm m-2"
                                                        type="reset"
                                                        onClick={() => setFormValues(initialState)}
                                                    ><i
                                                        className="glyphicon glyphicon-repeat"
                                                    >
                                                        </i>
                                                        Reset
                                                    </button>
                                                    <div className="delete-btn">
                                                        <button
                                                            className="btn btn-danger btn-sm m-2"
                                                            onClick={handleAccountDelete}
                                                        ><i
                                                            className="glyphicon glyphicon-repeat"
                                                        >
                                                            </i>
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
                }

                {!user && <div><h1>NOT AUTHORIZED!</h1></div>}
            </div>
        </div>
    );
};

export default UserAccount;