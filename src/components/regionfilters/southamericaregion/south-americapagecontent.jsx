import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import SouthAmericaRegionDestinations from './fetch-south-americadestinations';
import SouthAmericaRegionPageTitle from './PageTitle';

const SouthAmericaRegionPageContents = () => {
    return (
        <div>
            <SouthAmericaRegionPageTitle />
            <Filter />
            <MobileFilter />
            <SouthAmericaRegionDestinations/>
        </div>
    );
}
export default SouthAmericaRegionPageContents;