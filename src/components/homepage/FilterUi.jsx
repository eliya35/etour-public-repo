import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/filters.css'


function Filter() {
    const navigate = useNavigate();

    return (
        <div className="filters">
            <div className="selection">
                <div className="selection-name ">
                    <span className="selection-name-weight">Category</span>
                </div>
                <ul className="unoderd-list-categories">
                    <li><a href="/category/Ancient Buildings/">Ancient Buildings</a></li>
                    <li><a href="/category/Beach Restaurant/">Beach Restaurant</a></li>
                    <li><a href="/category/Bike Hikes/">Bike Hikes</a></li>
                    <li><a href="/category/Caves/">Caves</a></li>
                    <li><a href="/category/Cold Regions/">Cold Regions</a></li>
                    <li><a href="/category/Cultural Regions/">Cultural Regions</a></li>
                    <li><a href="/category/Desert/">Deserts</a></li>
                    <li><a href="/category/Family Time Spots/">Family Time Spots</a></li>
                    <li><a href="/category/Foot Hikes/">Foot Hikes</a></li>
                    <li><a href="/category/Honeymoon spots/">Honeymoon spots</a></li>
                    <li><a href="/category/Hot Regions/">Hot Regions</a></li>
                    <li><a href="/category/Island/">Islands</a></li>
                    <li><a href="/category/Mountains/">Mountains</a></li>
                    <li><a href="/category/National Parks/">National Parks</a></li>
                    <li><a href="/category/Popular Cities/">Popular Cities</a></li>
                    <li><a href="/category/Recreational Grounds/">Recreational</a></li>
                    <li><a href="/category/Forest Region/">Forest Regions</a></li>
                    <li><a href="/category/Vacation Spots/">Vacation Spots</a></li>
                    <li><a href="/category/Water Falls/">Water Falls</a></li>
                    <li><a href="/category/Wildlife Region/">Wildlife Regions</a></li>
                </ul>
                <div className="selection-checkboxes">
                    <ul className="unoderd-list-verticla-chekboxes">
                        <li className="filter-box-title">Filters</li>

                        {/* Most Visited */}
                        <li className="most-visited">
                            <input
                                type="checkbox"
                                onClick={() => (navigate('/popular/'))}

                            /> Most Popular
                        </li>

                        {/* Featured */}
                        <li className="featured">
                            <input
                                type="checkbox"
                                onClick={() => (navigate('/featured/'))}
                            /> Featured
                        </li>
                    </ul>
                </div>
                <div className="region-filters">
                    <div className="region-section">
                        <h6><strong>Regions</strong></h6>
                    </div>
                    <div className="region-options">
                        <ul>
                            <li><a href="/region/Asian-pacific/">ASIA</a></li>
                            <li><a href="/region/Africa/">AFRICA</a></li>
                            <li><a href="/region/Europe/">EUROPE</a></li>
                            <li><a href="/region/North-america/">NORTH AMERICA</a></li>
                            <li><a href="/region/South-america/">SOUTH AMERICA</a></li>
                            <li><a href="/region/Australia/">AUSTRALIA</a></li>
                            
                            {/* NO DESTINATIONS HERE
                            <li><a href="/region/Antarctica/">Antarctica</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;