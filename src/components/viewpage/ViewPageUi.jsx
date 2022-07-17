import React, { useState } from 'react';
import CommentApp from '../comments/ReturnComments';
import '../Styles/viewpage.css';
import DestinationProducts from './DestinationProducts';
import DisplayImage from './DispalyImage';
import LocationInfo from './LocationInfo';


const ViewPageUI = (props) => {

    return (
        <div className="viewpage">
            <div className="container">
                <div>
                    {/* Dispaly Image */}
                    <DisplayImage
                        name={props.name}
                        img={ props.image_01}
                        image_01={props.image_01}
                        image_02={props.image_02}
                        image_03={props.image_03}
                        image_04={props.image_04}
                    />
                </div>

                <div className="content">
                    <h2>{props.name}</h2>
                    <p>{props.longDescription}</p>
                </div>

                <div>
                    {/* Location Component */}
                    <LocationInfo
                        region={props.region}
                        country={props.country}
                        location={props.location}
                        touristRate={props.touristRate}
                    />
                </div>

                <div>
                    {/* Booking Component */}
                </div>

                <div>
                    {/* Destination Products */}
                    <DestinationProducts
                        products_01={props.product_01}
                        products_02={props.product_02}
                        products_03={props.product_03}
                        products_04={props.product_04}
                        products_05={props.product_05}
                        products_06={props.product_06}
                        products_07={props.product_07}
                    />
                </div>

                {/* Disabled commenting indefinitely */}
                {/* <div className="rendered-comments">
                    <CommentApp tour_site_id={props.tour_site_id} />
                </div> */}

            </div>
        </div>
    );
}

export default ViewPageUI;