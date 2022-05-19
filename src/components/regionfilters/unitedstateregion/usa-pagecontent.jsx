import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import UsaRegionPageTitle from './PageTitle';
import UsaRegionDestinations from './fetch-usa-destinations';

const UsaRegionPageContents = () => {
    return (
        <div>
            <UsaRegionPageTitle />
            <Filter />
            <MobileFilter />
            <UsaRegionDestinations />
        </div>
    );
}
export default UsaRegionPageContents;