import React from 'react';
import Filter from '../homepage/FilterUi'
import FeaturedSites from './FetchFeaturedSites';
import FeaturedPageTitle from './FeaturedPageTitle';

import '../Styles/featuredsites.css'


// Recive Components to be used at /featured
const FeaturedPage = () => {
    return (
        <div className='featured-page'>
            <FeaturedPageTitle />
            <Filter />
            <FeaturedSites />
        </div>
    );
}

export default FeaturedPage;