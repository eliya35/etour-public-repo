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
                    <li><a href="/category/Popular Cities/">Popular Cities</a></li>
                    <li><a href="/category/Cassinos/"> Casinos</a></li>
                    <li><a href="/category/Vacation Spots/">Vacation Spots</a></li>
                    <li><a href="/category/Hotel Casino/">Hotel and Casino</a></li>
                    <li><a href="/category/Honeymoon spots/">Honeymoon spots</a></li>
                    <li><a href="/category/Beach Restaurant/">Beach Restaurant</a></li>
                    <li><a href="/category/Caves/">Caves</a></li>
                    <li><a href="/category/island/">Islands</a></li>
                    <li><a href="/category/Mountains/">Mountains</a></li>
                    <li><a href="/category/Desert/">Deserts</a></li>
                    <li><a href="/category/Forest Region/">Forest Regions</a></li>
                    <li><a href="/category/Foot Hikes/">Foot Hikes</a></li>
                    <li><a href="/category/Bike Hikes/">Bike Hikes</a></li>
                    <li><a href="/category/Wildlife Region/">Wildlife Regions</a></li>
                    <li><a href="/category/Water Falls/">Water Falls</a></li>
                    <li><a href="/category/Recreational Grounds/">Recreational</a></li>
                    <li><a href="/category/Cultural Regions/">Cultural Regions</a></li>
                    <li><a href="/category/National Parks/">National Parks</a></li>
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
                            <li><a href="/region/Africa/">Africa</a></li>
                            <li><a href="/region/Europe/">Europe</a></li>
                            <li><a href="/region/USA/">USA</a></li>
                            <li><a href="/region/North-america/">North America</a></li>
                            <li><a href="/region/South-america/">South America</a></li>
                            <li><a href="/region/Asian-pacific/">Asian Pacific</a></li>
                            <li><a href="/region/Antarticar/">Antarctica</a></li>
                            <li><a href="/region/Middle-East/">Middle East</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;