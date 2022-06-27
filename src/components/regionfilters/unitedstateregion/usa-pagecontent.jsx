import React from 'react';
import Filter from '../../homepage/FilterUi';
import MobileFilter from '../../homepage/MobileFilter';
import UsaRegionPageTitle from './PageTitle';
import UsaRegionDestinations from './fetch-usa-destinations';
import ErrorBoundary from '../../../ErrorBoundary';


const UsaRegionPageContents = () => {
    return (
        <div>
            <UsaRegionPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <UsaRegionDestinations />
            </ErrorBoundary>
        </div>
    );
}
export default UsaRegionPageContents;