import React from 'react';
import PopularSitesPageTitle from './PopularSiteTitle';
import PopularSites from './FetchPopularSites';
import Filter from '../homepage/FilterUi';
import MobileFilter from '../homepage/MobileFilter';
import '../Styles/featuredsites.css'
import ErrorBoundary from '../../ErrorBoundary';



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