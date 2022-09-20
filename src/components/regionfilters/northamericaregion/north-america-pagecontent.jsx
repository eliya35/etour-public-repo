import React from 'react';
import NorthAmericaRegionPageTitle from './PageTitle';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import NorthAmericaRegionDestinations from './fetch-north-america-destinations';

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