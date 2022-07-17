import React from 'react';
import '../Styles/viewpage.css';


const LocationInfo = (props) => {
    return ( 
        <>
            <div className="location-info">
                <h5>Location information </h5>
                <h6>Region: {props.region} </h6>
                <h6>Country: {props.country}</h6>
                <h6>Location: {props.location}</h6>
                <h6>Tourist traffic annually: {props.touristRate}</h6>
            </div>
        </>
     );
}
 
export default LocationInfo;