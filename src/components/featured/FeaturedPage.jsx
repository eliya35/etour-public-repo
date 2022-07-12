import React from 'react';
import FeaturedPageTitle from './FeaturedPageTitle';
import Filter from '../homepage/FilterUi'
import MobileFilter from '../homepage/MobileFilter';
import ErrorBoundary from '../../ErrorBoundary';
import FeaturedSites from './FetchFeaturedSites';
import '../Styles/featuredsites.css';


const FeaturedPage = () => {
    return (
        <div className='featured-page'>
            <FeaturedPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <FeaturedSites />
            </ErrorBoundary>
        </div>
    );
}

export default FeaturedPage;