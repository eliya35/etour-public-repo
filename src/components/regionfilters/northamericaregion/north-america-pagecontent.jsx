import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import NorthAmericaRegionPageTitle from './PageTitle';
import NorthAmericaRegionDestinations from './fetch-north-america-destinations';

const NorthAmericaRegionPageContents = () => {
    return (
        <div>
            <NorthAmericaRegionPageTitle />
            <Filter />
            <MobileFilter />
            <NorthAmericaRegionDestinations />
        </div>
    );
}
export default NorthAmericaRegionPageContents;