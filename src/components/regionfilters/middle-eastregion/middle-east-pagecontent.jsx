import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import MiddleEastRegionPageTitle from './PageTitle';
import MiddleEastRegionDestinations from './fetch-middle-east-destinations';
import ErrorBoundary from '../../../ErrorBoundary';


const MiddleEastRegionPageContents = () => {
    return (
        <div>
            <MiddleEastRegionPageTitle />
            <Filter />
            <MobileFilter />
            
            <ErrorBoundary>
                <MiddleEastRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}
export default MiddleEastRegionPageContents;