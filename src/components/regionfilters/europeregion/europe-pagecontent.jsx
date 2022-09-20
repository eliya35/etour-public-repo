import React from 'react';
import EuropeRegionPageTitle from './PageTitle';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import EuropeRegionDestinations from './fetch-europe-destinations';

const EuropeRegionPageContents = () => {
    return (
        <div>
            <EuropeRegionPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <EuropeRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}

export default EuropeRegionPageContents;