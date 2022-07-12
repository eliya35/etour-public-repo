import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';
import '../Styles/filters.css';

const MobileFilter = () => {

    return (
        <div className='mobile-category-filters'>
            <DropdownButton id="dropdown-basic-button" title="Category Dropdown">
                {/* <br /> */}
                <div className="mobile-filter-options">
                    <span><strong>FILTERS</strong></span>
                </div>
                <Dropdown.Item href="/featured/">Featured</Dropdown.Item>
                <Dropdown.Item href="/popular/">Most Popular</Dropdown.Item>

                <br />
                <div className="mobile-categories">
                    <span><strong>CATEGORIES</strong></span>
                </div>
                <Dropdown.Item href="/category/Ancient Buildings/">Ancient Buildings</Dropdown.Item>
                <Dropdown.Item href="/category/Beach Restaurant/">Beach Restaurant</Dropdown.Item>
                <Dropdown.Item href="/category/Bike Hikes/">Bike Hikes</Dropdown.Item>
                <Dropdown.Item href="/category/Caves/">Caves</Dropdown.Item>
                <Dropdown.Item href="/category/Cold Regions/">Cold Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Cultural Regions/">Cultural Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Desert/">Deserts</Dropdown.Item>
                <Dropdown.Item href="/category/Hotel Casino/">Family Time Spots</Dropdown.Item>
                <Dropdown.Item href="/category/Foot Hikes/">Foot Hikes</Dropdown.Item>
                <Dropdown.Item href="/category/Honeymoon spots/">Honeymoon spots</Dropdown.Item>
                <Dropdown.Item href="/category/Honeymoon spots/">Hot Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Island/">Islands</Dropdown.Item>
                <Dropdown.Item href="/category/Mountains/">Mountains</Dropdown.Item>
                <Dropdown.Item href="/category/National Parks/">National Parks</Dropdown.Item>
                <Dropdown.Item href="/category/Popular Cities/">Popular Cities</Dropdown.Item>
                <Dropdown.Item href="/category/Recreational Grounds/">Recreational</Dropdown.Item>
                <Dropdown.Item href="/category/Forest Region/">Forest Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Vacation Spots/">Vacation Spots</Dropdown.Item>
                <Dropdown.Item href="/category/Water Falls/">Water Falls</Dropdown.Item>
                <Dropdown.Item href="/category/Wildlife Region/">Wildlife Regions</Dropdown.Item>

                <br />
                <div className="mobile-region">
                    <span><strong>REGIONS</strong></span>
                </div>
                <Dropdown.Item href="/region/Asian-pacific/">ASIA</Dropdown.Item>
                <Dropdown.Item href="/region/Africa/">AFRICA</Dropdown.Item>
                <Dropdown.Item href="/region/Europe/">EUROPE</Dropdown.Item>
                <Dropdown.Item href="/region/North-america/">NORTH AMERICA</Dropdown.Item>
                <Dropdown.Item href="/region/South-america/">SOUTH AMERICA</Dropdown.Item>
                <Dropdown.Item href="/region/Australia/">AUSTRALIA</Dropdown.Item>
                {/* <Dropdown.Item href="/region/Antarctica/">Antarctica</Dropdown.Item> */}
            </DropdownButton>
        </div>
    );
}

export default MobileFilter;
