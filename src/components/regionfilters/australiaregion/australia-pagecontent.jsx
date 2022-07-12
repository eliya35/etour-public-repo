import React from 'react';
import AustraliaRegionPageTitle from './PageTitle';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import AustraliaDestinations from './fetch-australia-destination';
import ErrorBoundary from '../../../ErrorBoundary';


const AustraliaRegionPageContents = () => {
    return (
        <div>
            <AustraliaRegionPageTitle/>
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <AustraliaDestinations />
            </ErrorBoundary>
        </div>
    );
}

export default AustraliaRegionPageContents;