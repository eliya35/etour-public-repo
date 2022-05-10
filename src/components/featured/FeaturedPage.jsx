import React from 'react';
import Filter from '../homepage/FilterUi'
import FeaturedSites from './FetchFeaturedSites';
import FeaturedPageTitle from './FeaturedPageTitle';
import MobileFilter from '../homepage/MobileFilter';
import '../Styles/featuredsites.css'


const FeaturedPage = () => {
    return (
        <div className='featured-page'>
            <FeaturedPageTitle />
            <Filter />
            <MobileFilter />
            <FeaturedSites />
        </div>
    );
}

export default FeaturedPage;