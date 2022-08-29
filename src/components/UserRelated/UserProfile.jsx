import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../usercontext/UserProvider';
import axios from 'axios';
import '../Styles/userprofile.css';


const UserProfile = () => {
    const initialState = { profile_avatar: "", mobile: "", location: "", bio: "" };
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [previousValue, setPreviousValue] = useState({});
    const [profileImg, setProfileImg] = useState("https://etour-first-backet.s3.amazonaws.com/avatars/avatar_2x.png");
    const [upLoadImage, setUploadImage] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const { user } = useContext(UserContext);
    const user_id = user.id;


    // set the document title
    useEffect(() => { document.title = 'My Profile'; });

    // fetch the current  users profile
    const fetchUsersProfile = async (userId) => {
        await axios.get(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/${userId}/`)
            .then(res => { setPreviousValue(res.data) })
            .catch(() => { });
    }

    // call fetchUserProfile only when a users id changes
    useEffect(() => { fetchUsersProfile(user_id) }, [user_id]);


    // if a users profile was not found
    const handleNewProfileSave = async () => {
        let formData = new FormData();
        formData.append("user", user.id);
        formData.append("profile_avatar", upLoadImage);
        formData.append("location", formValues.location);
        formData.append("mobile", formValues.mobile);
        formData.append("bio", formValues.bio);

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        await axios.post('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/', formData)
            .then(() => {
                setIsDisabled(true);
                alert("profile saved successfully")
            })
            .catch(() => {
                alert('An Error Occurred!! Please make sure you have provided all the fields including a profile picture.')
            })
    }

    const validateFormValues = values => {
        const errors = {}

        if (values.mobile.length > 15) {
            errors.mobile = 'Your mobile number is too long!'
        }

        if (values.location.length > 50) {
            errors.location = 'Please input a valid location!'
        }
        if (values.location && values.length < 3) {
            errors.location = 'Please input a valid location!'
        }

        if (values.bio.length > 200) {
            errors.bio = 'Your bio is to long try making it less than 200 characters!'
        }
        return errors;
    }

    // if a user profile was found
    const updateExistingProfile = async () => {
        let updatedData = new FormData();

        // Update the profile if is updated else live it to its previous value
        if (upLoadImage !== null) {
            updatedData.append("profile_avatar", upLoadImage)
        }
        if (formValues.mobile !== "") {
            updatedData.append("mobile", formValues.mobile)
        }
        if (formValues.location !== "") {
            updatedData.append("location", formValues.location)
        }
        if (formValues.bio !== "") {
            updatedData.append("bio", formValues.bio)
        }

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        await axios.patch(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/${user_id}/`, updatedData)
            .then(() => {
                alert("Profile updated successfully")
            })
            .catch(() => {
                alert('An error has occurred while trying to update your profile. Please try aging later.')
            })
        setIsDisabled(true);
    }

    const handleProfileChange = (e) => {
        const image = e.target.files[0];
        setUploadImage(image);

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                previousValue.profile_avatar = reader.result;
                setProfileImg(previousImg => reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setIsDisabled(false)
    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        //using the name attribute to accest the value of the formfield and passing it a value from e.target.value
        setFormValues({ ...formValues, [name]: value });
        setIsSubmit(true);
        setIsDisabled(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateFormValues(formValues));
    }

    return (
        <div className="user-profile-container">
            <div style={{ visibility: user ? "visible" : "hidden" }} className="only-authenticated">

                <div className='profile-page'><h1>Welcome {user.username}</h1></div>

                <div className="welcome-p">
                    <p data-testid="introductory-paragraph">
                        You can edit more account information by
                        <a href='/profile/my-account/'> Clicking Here</a>. Put all your required info at
                        the form below:
                    </p>
                </div>

                <div className="row">
                    <div className="col-sm-3">

                        <div className="text-center">
                            {
                                previousValue.profile_avatar !== undefined ?
                                    <img
                                        src={previousValue.profile_avatar}
                                        className="avatar img-circle img-thumbnail"
                                        alt="avatar"
                                    /> : <img
                                        src={profileImg}
                                        className="avatar img-circle img-thumbnail"
                                        alt="avatar"
                                    />
                            }
                            <h6>Upload a different photo...</h6>
                            <input
                                type="file"
                                data-testid='profile upload'
                                className="text-center center-block file-upload"
                                accept='/image/*'
                                name='avatar'
                                onChange={handleProfileChange}
                            />
                            <p>{formErrors.profile_avatar}</p>
                        </div>

                    </div>
                    <div className="col-sm-9">
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">

                                <form className="form" method="post" id="registrationForm" onSubmit={handleSubmit}>

                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="mobileInput"><h5>Mobile</h5></label>
                                            <input
                                                id="mobileInput"
                                                type="text"
                                                className="form-control"
                                                name="mobile"
                                                placeholder={previousValue.mobile}
                                                title="enter your mobile number if any."
                                                value={formValues.mobile}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p data-testid="mobile-input-error">{formErrors.mobile}</p>
                                    </div>

                                    <div className="form-group">

                                        <div className="col-xs-6">
                                            <label htmlFor="locationInput"><h5>Location</h5></label>
                                            <input
                                                id="locationInput"
                                                type="text"
                                                className="form-control"
                                                name='location'
                                                placeholder={previousValue.location}
                                                title="enter a location"
                                                value={formValues.location}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p data-testid="location-input-error">{formErrors.location}</p>
                                    </div>

                                    <div className="form-group">

                                        <div className="col-xs-6">
                                            <label htmlFor="bioInput" className="form-label"><h5>Bio</h5></label>
                                            <textarea
                                                id="bioInput"
                                                className="form-control"
                                                name='bio'
                                                rows="3"
                                                title='Enter a bio if any, should be less than 200 words'
                                                placeholder={previousValue.bio}
                                                value={formValues.bio}
                                                onChange={handleChange}
                                            >
                                            </textarea>
                                        </div>
                                        <p data-testid="bio-input-error">{formErrors.bio}</p>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <br />
                                            {previousValue.user === undefined ?
                                                <button
                                                    className="btn btn-lg btn-success"
                                                    aria-label='save button'
                                                    type="submit"
                                                    disabled={isDisabled}
                                                    onClick={handleNewProfileSave}
                                                >
                                                    Save
                                                </button>
                                                : <div className='update button'>
                                                    <button
                                                        className='btn btn-primary btn-lg'
                                                        onClick={updateExistingProfile}
                                                        disabled={isDisabled}
                                                    >
                                                        Update Profile
                                                    </button>
                                                </div>
                                            }
                                            <button
                                                className="btn btn-warning btn-lg m-2"
                                                type="reset"
                                                aria-label='reset button'
                                                onClick={() => setFormValues(initialState)}
                                            ><i
                                                className="glyphicon glyphicon-repeat"
                                            ></i>
                                                Reset
                                            </button>
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
    );
};

export default UserProfile;