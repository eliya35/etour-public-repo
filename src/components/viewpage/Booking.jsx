import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import '../Styles/booking.css'


const Booking = (props) => {
    const { addItem } = useCart();
    const [IsDisabled] = useState(true);

    return (
        <div className='booking'>
            <button disabled={IsDisabled} className='btn btn-primary m-2'>Book Now</button>
            <button className='btn btn-warning' onClick={() => addItem(props.tour)}>Add to list</button>
            <h6>We are working on bookings!</h6>
        </div>
    );
}

export default Booking;