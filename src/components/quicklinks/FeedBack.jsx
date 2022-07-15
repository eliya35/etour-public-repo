import React, { useState } from 'react';

const FeedBack = () => {
    const [isUsefull, setIsUsefull] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => { 
        setIsUsefull(true);
        setShowButton(false);
    }

    return (
        <div className="feedback">
            <h6>Was this information usefully?</h6>
            {isUsefull && <span>Thank you for letting us know.</span>}
            {showButton && <button className='btn btn-success m-2' onClick={handleClick}>Yes</button>  }
            {showButton && <button className='btn btn-danger m-2' onClick={handleClick}>No</button>  }
        </div>
    );
}

export default FeedBack;