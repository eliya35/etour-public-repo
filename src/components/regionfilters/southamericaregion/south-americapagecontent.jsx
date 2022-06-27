import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import SouthAmericaRegionDestinations from './fetch-south-americadestinations';
import SouthAmericaRegionPageTitle from './PageTitle';
import ErrorBoundary from '../../../ErrorBoundary';


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