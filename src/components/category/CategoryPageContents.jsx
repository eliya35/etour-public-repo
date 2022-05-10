import React from 'react';
import CategoryPageTitle from './CategoryPageTitle';
import FetchCategoryData from './FetchCategoryData';
import Filter from '../homepage/FilterUi';
import MobileFilter from '../homepage/MobileFilter';
import '../Styles/categorypagefilters.css'


const CategoryPageContents = () => {
    return (
        <div className='category-page-contents'>
            <CategoryPageTitle />
            <Filter />
            <MobileFilter />
            <FetchCategoryData />
        </div>
    );
}

export default CategoryPageContents;
