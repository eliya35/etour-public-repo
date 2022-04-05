import React, { useState } from 'react';
import { useCart } from 'react-use-cart'


import '../Styles/featuredsites.css'


// Responsible for displaying the cardUI at /featured
const PopularSitesCardUi = props => {
    const { addItem } = useCart();
    const [isFeatured] = useState(props.status);

    return (
        <div>
            <div className="col">
                <div className="card">
                    <div className="overflow">
                        <img src={props.imgsrc} className='card-img-top' alt={props.alt} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            {isFeatured ? <div className="status">< h6 className='badge badge-primary'>featured</h6></div> : <></>}
                            <p className="card-text">
                                {props.shortDescription}
                            </p>
                            <a href={'/view/' + props.id} className='btn btn-primary'>View</a>
                            <button className='btn btn-warning m-2'
                                onClick={() => addItem(props.item)}>
                                Add to List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PopularSitesCardUi;
