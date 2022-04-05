import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import axios from 'axios'


import '../Styles/rating.css'

/*
    I want to return ReactStar componet for every tour site. 

    I want a function that will calclate and return a value for each tour site every time a rating is adede
    or removed.

    A function that handles sending of ratings to an API everytime a new rating is added

    A function to update a rating when current rating chages

    Users added rating are whole numbers then affeter calcaltion can be decimals
*/


const Rating = ({ newRating }) => {

    const starChanged = () => {
        alert('Award Rating')
    }
    

    return (
        <div className="rating">
            <ReactStars
                count={5}
                size={30}
                value={newRating}
                activeColor="#ffd700"
                onChange={starChanged}
            />
        </div>
    );
}

export default Rating;