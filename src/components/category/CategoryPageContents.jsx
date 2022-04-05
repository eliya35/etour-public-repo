import React from 'react';
import CategoryPageTitle from './CategoryPageTitle';
import CategoryFilter from './CategoryPageFilterUi';
import FetchCategoryData from './FetchCategoryData';

import '../Styles/categorypagefilters.css'



const CategoryPageContents = () => {
    return (
        <div className='category-page-contents'>
            <CategoryPageTitle />
            <CategoryFilter />
            <FetchCategoryData />
        </div>
    );
}

export default CategoryPageContents;
