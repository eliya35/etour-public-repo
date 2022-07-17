import React, { useState } from 'react';
import '../Styles/viewpage.css';


const DisplayImage = (props) => {
    const [displayImage, setDisplayImage] = useState(props.img);

    return (
        <>
            <div className="imgBx">
                <img src={displayImage} id='initial-img' alt={props.name} />
            </div>
            <div className="other-img">
                <div className="row">
                    <div className="col-md-3">
                        <div className="col">
                            <ul>
                                <li
                                    onClick={() => setDisplayImage(previousImg => props.image_01)}
                                >
                                    <img src={props.image_01} className="side-img" alt={props.name} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="col">
                            <ul>
                                <li
                                    onClick={() => setDisplayImage(previousImg => props.image_02)}
                                >
                                    <img src={props.image_02} className="side-img" alt={props.name} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="col">
                            <ul>
                                <li
                                    onClick={() => setDisplayImage(previousImg => props.image_03)}
                                >
                                    <img src={props.image_03} className="side-img" alt={props.name} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="col">
                            <ul>
                                <li
                                    onClick={() => setDisplayImage(previousImg => props.image_04)}
                                >
                                    <img src={props.image_04} className="side-img" alt={props.name} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayImage;