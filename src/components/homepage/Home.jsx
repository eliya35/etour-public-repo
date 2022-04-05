import React from 'react';
import {Link} from 'react-router-dom'
import HomePageTitle from './HomePageTitle';
import Filter from './FilterUi'
import AllSites from './FetchSites';


// Recive Components to be used at / 
const Home = () =>{
    return(
        <div>
            <Link to='/'></Link>
            <HomePageTitle/>
            <Filter />
            <AllSites />
        </div>
    )
}

export default Home;