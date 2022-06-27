import React from 'react';
import Filter from '../homepage/FilterUi'
import FeaturedSites from './FetchFeaturedSites';
import FeaturedPageTitle from './FeaturedPageTitle';
import MobileFilter from '../homepage/MobileFilter';
import ErrorBoundary from '../../ErrorBoundary';
import '../Styles/featuredsites.css'


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