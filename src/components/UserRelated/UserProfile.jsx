import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../usercontext/UserProvider';
import axios from 'axios';


import '../Styles/userprofile.css'


const UserProfile = () => {

    const { user } = useContext(UserContext);
    const user_id = user.id;
    const initialState = { avatar: "", mobile: "", location: "", bio: "" };
    const [previousValue, setPreviousValue] = useState({});
    const [formVlaues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [profileImg, setProfileImg] = useState("avatarts/avatar_2x.png");
    const [upLoadImage, setUploadImage] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isDiabled, setIsDisabled] = useState(true);
    const [isPosted, setIsPosted] = useState(false);


    const handleProfileChange = (e) => {
        const image = e.target.files[0];
        setUploadImage(image);

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                previousValue.avatar = reader.result;
                setProfileImg(previousImg => reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setIsDisabled(false)
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formVlaues, [name]: value });
        setIsSubmit(true);
        setIsDisabled(false)
    }


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
        // axios.get(`http://127.0.0.1:8000/api/user/profile/${user_id}/`)
        axios.get(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/${user_id}/`)
            .then(res => {
                setPreviousValue(res.data)
            })
            .catch(err => { 
                console.log('An error occured while fetching data')
            })
    }, [user_id, formErrors, isSubmit])


    const validate = (values) => {
        const erros = {}

        if (values.mobile.length > 15) {
            erros.mobile = 'Your mobile number is too long!'
        }

        if (values.location.length > 50) {
            erros.location = 'Please input a valid location!'
        }
        if (values.location && values.length < 3) {
            erros.location = 'Please input a valid location!'
        }

        if (values.bio.length > 200) {
            erros.bio = 'Your bio is to long try making it less than 200 characters!'
        }

        return erros;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formVlaues));
    }


    const handleNewProfileSave = async () => {

        let formData = new FormData();
        formData.append("user", user.id)
        formData.append("avatar", upLoadImage)
        formData.append("location", formVlaues.location)
        formData.append("mobile", formVlaues.mobile)
        formData.append("bio", formVlaues.bio)
        

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        // await axios.post('http://127.0.0.1:8000/api/user/profile/', formData)
        await axios.post('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/', formData)
            .then(res => {
                setIsPosted(true);
                setIsDisabled(true);
            })
            .catch(err => {
                alert('An Error Occured!! Please make sure you have provided all the fields incuding a profile picture.')
            })
    }


    const updateExsitingProfile = async () => {

        let updatedData = new FormData();

        // Update the profile if is updated else live it to its previous value
        if (upLoadImage !== null) {
            updatedData.append("avatar", upLoadImage)
            // console.log('updated profile', upLoadImage)
        }
        if (formVlaues.mobile !== "") {
            updatedData.append("mobile", formVlaues.mobile)
            // console.log("mobile", formVlaues.mobile)
        }
        if (formVlaues.location !== "") {
            updatedData.append("location", formVlaues.location)
            // console.log("location", formVlaues.location)
        }
        if (formVlaues.bio !== "") {
            updatedData.append("bio", formVlaues.bio)
            // console.log("bio", formVlaues.bio)
        }

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        // await axios.patch(`http://127.0.0.1:8000/api/user/profile/${user_id}/`, updatedData)
        await axios.patch(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/user/profile/${user_id}/`, updatedData)
            .then(res => {
                // console.log("Updated Data", res.data)
                setIsPosted(true);
            })
            .catch(err => {
                alert('An error has occured while trying to update your profile. Please try agin later.')
            })
        

        setIsDisabled(true);
    }


    return (
        <div class="user-profile-container">
            {
                user &&

                <div className="only-authenticated">
                    <div className='profile-page'><h1>Profile Page</h1></div>
                    <div className="success-message">
                        {isPosted ? <div className="message">Profile Successfully Updated</div> : <div className='show-nothing'></div>}
                    </div>
                    <div
                        className="welcome-p"
                    ><p>
                            Hello & welcome {user.username}. You can edit more account infomation by
                            <a href='/profile/my-account/'> Cliking Here</a>. Put all your required info at
                            the form below:
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">

                            <div class="text-center">
                                {
                                    previousValue.avatar !== undefined ?
                                        <img
                                            src={previousValue.avatar}
                                            class="avatar img-circle img-thumbnail"
                                            alt="avatar"
                                        /> : <img
                                            src={profileImg}
                                            class="avatar img-circle img-thumbnail"
                                            alt="avatar"
                                        />
                                }
                                <h6>Upload a different photo...</h6>
                                <input
                                    type="file"
                                    class="text-center center-block file-upload"
                                    accept='/image/*'
                                    name='avatar'
                                    onChange={handleProfileChange}
                                />
                                <p>{formErrors.avatar}</p>
                            </div>

                        </div>
                        <div class="col-sm-9">
                            <div class="tab-content">
                                <div class="tab-pane active" id="home">

                                    <form class="form" action="##" method="post" id="registrationForm" onSubmit={handleSubmit}>

                                        <div class="form-group">
                                            <div class="col-xs-6">
                                                <label for="mobile"><h5>Mobile</h5></label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="mobile"
                                                    id="mobile"
                                                    placeholder={previousValue.mobile}
                                                    title="enter your mobile number if any."
                                                    value={formVlaues.mobile}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <p>{formErrors.mobile}</p>
                                        </div>

                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="location"><h5>Location</h5></label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name='location'
                                                    id="location"
                                                    placeholder={previousValue.location}
                                                    title="enter a location"
                                                    value={formVlaues.location}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <p>{formErrors.location}</p>
                                        </div>

                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="exampleFormControlTextarea1" className="form-label">Bio</label>
                                                <textarea
                                                    className="form-control"
                                                    name='bio'
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    title='Enter a bio if any, should be less than 200 words'
                                                    placeholder={previousValue.bio}
                                                    value={formVlaues.bio}
                                                    onChange={handleChange}
                                                >
                                                </textarea>
                                            </div>
                                            <p>{formErrors.bio}</p>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-xs-12">
                                                <br />
                                                {previousValue.user === undefined ?
                                                    <button
                                                        class="btn btn-lg btn-success"
                                                        type="submit"
                                                        disabled={isDiabled}
                                                        onClick={handleNewProfileSave}
                                                    ><i
                                                        class="glyphicon glyphicon-ok-sign"
                                                    >
                                                        </i>
                                                        Save
                                                    </button>
                                                    : <div className='update button'>
                                                        <button
                                                            className='btn btn-primary btn-lg'
                                                            onClick={updateExsitingProfile}
                                                            disabled={isDiabled}
                                                        >Update Profile
                                                        </button>
                                                    </div>
                                                }
                                                <button
                                                    class="btn btn-warning btn-lg m-2"
                                                    type="reset"
                                                    onClick={() => setFormValues(initialState)}
                                                ><i
                                                    class="glyphicon glyphicon-repeat"
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
            }

            {!user && <div><h1>NOT AUTHORIZED!</h1></div>}
        </div>
    );
};

export default UserProfile;