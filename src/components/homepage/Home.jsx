import React from 'react';
import HomePageTitle from './HomePageTitle';
import Filter from './FilterUi'
import AllSites from './FetchSites';
import MobileFilter from './MobileFilter';


const Home = () =>{
    return(
        <div>
            <HomePageTitle/>
            <Filter />
            <MobileFilter />
            <AllSites />
        </div>
    )
}

export default Home;