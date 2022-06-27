import React from 'react';
import AfricaRegionSites from './fetch-africa-destinations';
import Filter from '../../homepage/FilterUi';
import AfricaRegionPageTitle from './PageTitle';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';

const AfricaRegionPageContents = () => {
    return (
        <div>
            <AfricaRegionPageTitle />
            <Filter />
            <MobileFilter />
            
            <ErrorBoundary>
                <AfricaRegionSites />
            </ErrorBoundary>
        </div>
    );
}
export default AfricaRegionPageContents;