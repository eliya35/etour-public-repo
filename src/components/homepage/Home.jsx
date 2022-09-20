import React from 'react';
import HomePageTitle from './HomePageTitle';
import Filter from './FilterUi'
import MobileFilter from './MobileFilter';
import ErrorBoundary from '../../ErrorBoundary';
import AllSites from './FetchSites';

const Home = () => {
    return (
        <div>
            <HomePageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <AllSites />
            </ErrorBoundary>
        </div>
    )
}

export default Home;