import React from 'react';
import AfricaRegionSites from './fetch-africa-destinations';
import Filter from '../../homepage/FilterUi';
import AfricaRegionPageTitle from './PageTitle';
import MobileFilter from '../../homepage/MobileFilter';

const AfricaRegionPageContents = () => { 
    return (
        <div>
            <AfricaRegionPageTitle />
            <Filter />
            <MobileFilter />
            <AfricaRegionSites />
        </div>
    );
}
export default AfricaRegionPageContents;