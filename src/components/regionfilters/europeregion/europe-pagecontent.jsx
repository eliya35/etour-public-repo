import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import EuropeRegionPageTitle from './PageTitle';
import EuropeRegionDestinations from './fetch-europe-destinations';
import ErrorBoundary from '../../../ErrorBoundary';


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