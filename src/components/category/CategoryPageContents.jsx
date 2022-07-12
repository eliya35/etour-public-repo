import React from 'react';
import CategoryPageTitle from './CategoryPageTitle';
import Filter from '../homepage/FilterUi';
import MobileFilter from '../homepage/MobileFilter';
import ErrorBoundary from '../../ErrorBoundary';
import FetchCategoryData from './FetchCategoryData';
import '../Styles/categorypagefilters.css';


const CategoryPageContents = () => {
    return (
        <div className='category-page-contents'>
            <CategoryPageTitle />
            <Filter />
            <MobileFilter />

            <ErrorBoundary>
                <FetchCategoryData />
            </ErrorBoundary>
        </div>
    );
}

export default CategoryPageContents;