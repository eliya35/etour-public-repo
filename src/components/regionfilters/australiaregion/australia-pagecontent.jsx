import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import AustraliaRegionPageTitle from './PageTitle';
import AustraliaDestinations from './fetch-australia-destination';


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