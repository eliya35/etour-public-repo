import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import '../Styles/cardstyle.css';


const TourCard = React.memo(function TourCard(props) {
    const { addItem } = useCart();
    const [isFeatured] = useState(props.status);

    return (
        <div>
            <div className="col">
                <div className="card">
                    <div className="overflow">
                        <img src={props.imgsrc} className='card-img-top' alt={props.name} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <h6 style={{ visibility: isFeatured ? "visible" : "hidden" }} className='badge badge-primary' aria-label='Featured'>featured</h6>
                            <p className="card-text" data-testid='short-paragraph'>
                                {props.shortDescription}
                            </p>
                            <a href={'/view/' + props.id} className='btn btn-primary' id='view-btn'>View</a>
                            <button
                                className='btn btn-warning m-2'
                                id='add-item-btn'
                                onClick={() => addItem(props.item)}>
                                Add to List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

})

export default TourCard;