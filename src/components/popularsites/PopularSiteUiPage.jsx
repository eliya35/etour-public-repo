import React from 'react';
import PopularSitesPageTitle from './PopularSiteTitle';
import Filter from '../homepage/FilterUi';
import MobileFilter from '../homepage/MobileFilter';
import ErrorBoundary from '../../ErrorBoundary';
import PopularSites from './FetchPopularSites';
import '../Styles/featuredsites.css'

const PopularSitesUiPage = () => {
    return (
        <div className='featured-page'>
            <PopularSitesPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <PopularSites />
            </ErrorBoundary>
        </div>
    );
}

export default PopularSitesUiPage;