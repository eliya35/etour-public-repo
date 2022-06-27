import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import AntarticRegionPageTitle from './PageTitle';
import AntarticRegionDestinations from './fetch-antartic-destinations';
import ErrorBoundary from '../../../ErrorBoundary';


const AntarticRegionPageContents = () => {
    return (
        <div>
            <AntarticRegionPageTitle />
            <Filter />
            <MobileFilter />
            
            <ErrorBoundary>
                <AntarticRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}
export default AntarticRegionPageContents;