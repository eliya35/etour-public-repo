import React from 'react';
import PopularSitesPageTitle from './PopularSiteTitle';
import PopularSites from './FetchPopularSites';

import Filter from '../homepage/FilterUi';

import '../Styles/featuredsites.css'

// Recive Components to be used at /featured
const PopularSitesUiPage = () => {
    return (
        <div className='featured-page'>
            <PopularSitesPageTitle />
            <Filter />
            <PopularSites />
        </div>
    );
}

export default PopularSitesUiPage;