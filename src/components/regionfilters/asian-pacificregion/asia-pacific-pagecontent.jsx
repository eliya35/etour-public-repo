import React from 'react';
import AsianPacificRegionPageTitle from './PageTitle';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import AsianPacificRegionDestinations from './fetch-asia-pacific-destinations';

const AsianPacificRegionPageContents = () => {
    return (
        <div>
            <AsianPacificRegionPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <AsianPacificRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}

export default AsianPacificRegionPageContents;