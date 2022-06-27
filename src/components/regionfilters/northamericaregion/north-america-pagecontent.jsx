import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import NorthAmericaRegionPageTitle from './PageTitle';
import NorthAmericaRegionDestinations from './fetch-north-america-destinations';
import ErrorBoundary from '../../../ErrorBoundary';


const NorthAmericaRegionPageContents = () => {
    return (
        <div>
            <NorthAmericaRegionPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <NorthAmericaRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}
export default NorthAmericaRegionPageContents;