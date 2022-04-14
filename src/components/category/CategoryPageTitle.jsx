import React from 'react';
import { useParams } from 'react-router-dom';

import '../Styles/categorypagetitle.css'

const CategoryPageTitle = () => {

    const category = useParams().category

    return (
        <div className="category-page-title">
            <h2>Your browsing at: {category}</h2>
        </div>
    );
}

export default CategoryPageTitle