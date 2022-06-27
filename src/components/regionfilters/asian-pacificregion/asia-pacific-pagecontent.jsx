import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import AsianPacificRegionPageTitle from './PageTitle';
import AsianPacificRegionDestinations from './fetch-asia-pacific-destinations';
import ErrorBoundary from '../../../ErrorBoundary';


const AsianPacifcRegionPageContents = () => {
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
export default AsianPacifcRegionPageContents;