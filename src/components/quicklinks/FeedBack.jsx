import React, { useState } from 'react';

const FeedBack = () => {
    const [isUsefull, setIsUsefull] = useState(false);

    return (
        <div className="feedback">
            <h6>Was this information usefully?</h6>
            {isUsefull && <span>Thank you for your feedback😊.</span>}
            <button className='btn btn-success m-2' onClick={()=> setIsUsefull(true)}>Yes</button>
            <button className='btn btn-danger m-2'>No</button>
        </div>
    );
}

export default FeedBack;