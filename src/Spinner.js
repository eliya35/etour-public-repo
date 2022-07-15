import React from 'react';
import loader from './clockwise.svg'


const Spinner = () => {
    return (
        <div className="allsites-loading">
            <img src={loader} className="loading-clockwise" alt="Loading..." />
        </div>
    );
}

export default Spinner;