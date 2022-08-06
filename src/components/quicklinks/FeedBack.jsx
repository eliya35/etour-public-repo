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
            <span style={{ visibility: isUsefull ? "visible" : "hidden" }}>Thank you for letting us know.</span>
            <button
                className='btn btn-success m-2'
                style={{ visibility: showButton ? "visible" : "hidden" }}
                aria-pressed='true'
                onClick={handleClick}
            >Yes
            </button>

            <button
                style={{ visibility: showButton ? "visible" : "hidden" }}
                className='btn btn-danger m-2'
                aria-pressed='false'
                onClick={handleClick}
            >No
            </button>
        </div>
    );
}

export default FeedBack; 