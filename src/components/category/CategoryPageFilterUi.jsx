import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/categorypagefilters.css'

function CategoryFilter() {
    const navigate = useNavigate();

    return (
        <div className="category-filter">
            <div className="filters">
                <div className="selection">
                    <div className="selection-name ">
                        <span className="selection-name-weight">Category</span>
                    </div>
                    <ul className="unoderd-list-categories">
                        <li><a href="/category/Ancient Buildings/">Ancient Buldings</a></li>
                        <li><a href="/category/Popular Cities/">Popular Cities</a></li>
                        <li><a href="/category/Cassinos/"> Cassinos</a></li>
                        <li><a href="/category/Vacation Spots/">Vacation Spots</a></li>
                        <li><a href="/category/Hotel & Casino/">Hotel and Casino</a></li>
                        <li><a href="/category/Honeymoon spots/">Honeymoon spots</a></li>
                        <li><a href="/category/Beach Restaurant/">Beach Restaurant</a></li>
                        <li><a href="/category/Caves/">Caves</a></li>
                        <li><a href="/category/island/">Islands</a></li>
                        <li><a href="/category/Mountains/">Mountains</a></li>
                        <li><a href="/category/Desert/">Deserts</a></li>
                        <li><a href="/category/Forest Region/">Forest Regions</a></li>
                        <li><a href="/category/Foot Hikes/">Foot Hikes</a></li>
                        <li><a href="/category/Wildlife Region/">Wildlife Regions</a></li>
                        <li><a href="/category/Water Falls/">Water Falls</a></li>
                        <li><a href="/category/Recreational Grounds/">Recreational Grounds</a></li>
                        <li><a href="/category/Cultural Regions/">Cultural Regions</a></li>
                        <li><a href="/category/National Parks/">National Parks</a></li>
                    </ul>
                    <div className="selection-checkboxes">
                        <ul className="unoderd-list-verticla-chekboxes">
                            <li className="filter-box-title">Fillters</li>

                            {/* Most Visited */}
                            <li className="most-visited">
                                <input
                                    type="checkbox"
                                    onClick={() => (navigate('/featured/'))}

                                /> Most Visited
                            </li>

                            {/* Featuerd */}
                            <li className="featured">
                                <input
                                    type="checkbox"
                                    onClick={() => (navigate('/featured/'))}
                                /> Featured
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CategoryFilter;