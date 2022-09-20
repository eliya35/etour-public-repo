import React from 'react';
import AfricaRegionSites from './fetch-africa-destinations';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import AfricaRegionPageTitle from './PageTitle';

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