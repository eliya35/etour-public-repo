import React, { useEffect } from 'react';
import "../Styles/commingsoon.css"


const ComingSoon = () => {

    // set the page title.
    useEffect(() => { document.title = 'Comming Soon'; });

    return (
        <div className="coming-soon">
            <h1>
                Coming Soon!!
            </h1>
            <p data-testid='aplogies'>
                We apologise for any inconvenience we are working on it.
            </p>
        </div>
    );
}

export default ComingSoon;