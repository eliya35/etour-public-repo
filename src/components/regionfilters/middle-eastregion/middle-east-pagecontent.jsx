import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import MiddleEastRegionPageTitle from './PageTitle';
import MiddleEastRegionDestinations from './fetch-middle-east-destinations';

const MiddleEastRegionPageContents = () => {
    return (
        <div>
            <MiddleEastRegionPageTitle />
            <Filter />
            <MobileFilter />
            <MiddleEastRegionDestinations />
        </div>
    );
}
export default MiddleEastRegionPageContents;