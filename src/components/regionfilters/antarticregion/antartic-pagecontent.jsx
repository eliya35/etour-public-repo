import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import AntarticRegionPageTitle from './PageTitle';
import AntarticRegionDestinations from './fetch-antartic-destinations';

const AntarticRegionPageContents = () => {
    return (
        <div>
            <AntarticRegionPageTitle />
            <Filter />
            <MobileFilter />
            <AntarticRegionDestinations />
        </div>
    );
}
export default AntarticRegionPageContents;