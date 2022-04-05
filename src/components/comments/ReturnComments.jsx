import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Comments from './Comments'
import { UserProvider } from '../usercontext/UserProvider';


const CommentsApp = (props) => {
    return (
        <UserProvider>
            <Comments tour_site_id={props.tour_site_id} />
        </UserProvider>
    );
}

export default CommentsApp;