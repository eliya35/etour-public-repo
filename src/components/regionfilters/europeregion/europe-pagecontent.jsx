import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import EuropeRegionPageTitle from './PageTitle';
import EuropeRegionDestinations from './fetch-europe-destinations';

const EuropeRegionPageContents = () => {
    return (
        <div>
            <EuropeRegionPageTitle />
            <Filter />
            <MobileFilter />
            <EuropeRegionDestinations />
        </div>
    );
}
export default EuropeRegionPageContents;