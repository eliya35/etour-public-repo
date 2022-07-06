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
                    <samp><strong>FILTERS</strong></samp>
                </div>
                <Dropdown.Item href="/featured/">Featured</Dropdown.Item>
                <Dropdown.Item href="/popular/">Most Popular</Dropdown.Item>

                <br />
                <div className="mobile-categories">
                    <samp><strong>CATEGORIES</strong></samp>
                </div>
                <Dropdown.Item href="/category/Ancient Buildings/">Ancient Buldings</Dropdown.Item>
                <Dropdown.Item href="/category/Beach Restaurant/">Beach Restaurant</Dropdown.Item>
                <Dropdown.Item href="/category/Bike Hikes/">Bike Hikes</Dropdown.Item>
                <Dropdown.Item href="/category/Caves/">Caves</Dropdown.Item>
                <Dropdown.Item href="/category/Cassinos/">Cold Regions</Dropdown.Item>
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
                    <samp><strong>REGIONS</strong></samp>
                </div>
                <Dropdown.Item href="/region/Africa/">Africa</Dropdown.Item>
                <Dropdown.Item href="/region/Europe/">Europe</Dropdown.Item>
                <Dropdown.Item href="/region/USA/">USA</Dropdown.Item>
                <Dropdown.Item href="/region/North-america/">North America</Dropdown.Item>
                <Dropdown.Item href="/region/South-america/">South America</Dropdown.Item>
                <Dropdown.Item href="/region/Asian-pacific/">Asian Pacific</Dropdown.Item>
                <Dropdown.Item href="/region/Antarticar/">Antarticar</Dropdown.Item>
                <Dropdown.Item href="/region/Middle-East/">Middle-East</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default MobileFilter;
