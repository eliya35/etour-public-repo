import React, { useEffect } from 'react';
import Booking from './Booking';
import DestinationProducts from './DestinationProducts';
import DisplayImage from './DispalyImage';
import LocationInfo from './LocationInfo';
import '../Styles/viewpage.css';

// import { UserContext } from '../usercontext/UserProvider';
// import CommentApp from '../comments/ReturnComments';
// const { user } = useContext(UserContext);

const ViewPageUI = (props) => {

    const pageTitle = props.name === undefined ? 'etour international' : props.name;
    useEffect(() => { document.title = `${pageTitle}`; }, []);

    return (
        <div className="viewpage">
            <div className="container">
                <div>
                    <DisplayImage
                        name={props.name}
                        img={props.image_01}
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
                    <LocationInfo
                        region={props.region}
                        country={props.country}
                        location={props.location}
                        touristRate={props.touristRate}
                    />
                </div>

                <div>
                    <DestinationProducts
                        name={props.name}
                        product_01={props.product_01}
                        product_02={props.product_02}
                        product_03={props.product_03}
                        product_04={props.product_04}
                        product_05={props.product_05}
                        product_06={props.product_06}
                        product_07={props.product_07}
                    />
                </div>

                <div>
                    <Booking tour={props.tour} />
                </div>

                {
                    /* Disable comments indefinite
                    {user &&
                        <div className="rendered-comments">
                            <CommentApp tour_site_id={props.tour_site_id} />
                        </div>
                    } */
                }
            </div>
        </div>
    );
}

export default ViewPageUI;