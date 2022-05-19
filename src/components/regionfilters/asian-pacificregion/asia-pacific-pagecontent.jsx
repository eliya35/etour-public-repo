import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import AsianPacificRegionPageTitle from './PageTitle';
import AsianPacificRegionDestinations from './fetch-asia-pacific-destinations';

const AsianPacifcRegionPageContents = () => {
    return (
        <div>
            <AsianPacificRegionPageTitle />
            <Filter />
            <MobileFilter />
            <AsianPacificRegionDestinations />
        </div>
    );
}
export default AsianPacifcRegionPageContents;