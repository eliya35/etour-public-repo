import React from 'react';
import AntarcticRegionPageTitle from './PageTitle';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import ErrorBoundary from '../../../ErrorBoundary';
import AntarcticRegionDestinations from './fetch-antartic-destinations';

const AntarcticRegionPageContents = () => {
    return (
        <div>
            <AntarcticRegionPageTitle />
            <Filter />
            <MobileFilter />
            
            <ErrorBoundary>
                <AntarcticRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}

export default AntarcticRegionPageContents;