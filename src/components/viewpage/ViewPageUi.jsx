import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentApp from '../comments/ReturnComments'


import '../Styles/viewpage.css'


// Handles the /view/id contents
const ViewPageUI = (props) => {

    const [dispalyImage, setDisplayImage] = useState(props.img)

    return (
        <div className="viewpage">
            <div className="container">
                <div className="imgBx">
                    <img src={dispalyImage} id='initial-img' alt={props.name} />
                </div>
                <div className="other-img">
                    <ul>
                        <li
                            onClick={() => setDisplayImage(props.image_01)}
                        >
                            <img src={props.image_01} className="side-img" alt={props.name} />
                        </li>
                        <li
                            onClick={() => setDisplayImage(props.image_02)}
                        >
                            <img src={props.image_02} className="side-img" alt={props.name} />
                        </li>
                        <li
                            onClick={() => setDisplayImage(props.image_03)}
                        >
                            <img src={props.image_03} className="side-img" alt={props.name} />
                        </li>
                        <li
                            onClick={() => setDisplayImage(props.image_04)}
                        >
                            <img src={props.image_04} className="side-img" alt={props.name} />
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <p>{props.longDescription}</p>
                </div>
                <div className="location-info">
                    <h5>Location information </h5>
                    <h6>Region: {props.region} </h6>
                    <h6>Country: {props.country}</h6>
                    <h6>Location: {props.location}</h6>
                    <h6>Tourist traffic annualy: {props.touristRate}</h6>
                </div>

                <div className="recommended-products">
                    <h3>Some Recommended Products for {props.name} </h3>
                    <ul>
                        <li>
                            <h6>{props.product_01} : <a href={props.product_01_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                        <li>
                            <h6>{props.product_02} : <a href={props.product_02_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                        <li>
                            <h6>{props.product_03} : <a href={props.product_03_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                        <li>
                            <h6>{props.product_04} : <a href={props.product_04_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                        <li>
                            <h6>{props.product_05} : <a href={props.product_05_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                        <li>
                            <h6>{props.product_06} : <a href={props.product_06_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                        <li>
                            <h6>{props.product_07} : <a href={props.product_07_affiliate_link}>Get At Amazon</a></h6>
                        </li>
                    </ul>
                </div>
                <div className="renderd-comments">
                    <CommentApp tour_site_id={props.tour_site_id} />
                </div>
            </div>
        </div>
    );
}

export default ViewPageUI;