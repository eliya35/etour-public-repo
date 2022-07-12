import React from 'react';
import SouthAmericaRegionPageTitle from './PageTitle';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import SouthAmericaRegionDestinations from './fetch-south-americadestinations';


const SouthAmericaRegionPageContents = () => {
    return (
        <div>
            <SouthAmericaRegionPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <SouthAmericaRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}

export default SouthAmericaRegionPageContents;