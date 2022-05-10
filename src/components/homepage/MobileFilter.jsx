import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';
import '../Styles/filters.css';

const MobileFilter = () => {

    return (
        <div className='mobile-category-filters'>
            <DropdownButton id="dropdown-basic-button" title="Category Dropdown">
                <Dropdown.Item href="/featured/">Featured</Dropdown.Item>
                <Dropdown.Item href="/popular/">Most Popular</Dropdown.Item>
                <Dropdown.Item href="/category/Ancient Buildings/">Ancient Buldings</Dropdown.Item>
                <Dropdown.Item href="/category/National Parks/">National Parks</Dropdown.Item>
                <Dropdown.Item href="/category/Mountains/">Mountains</Dropdown.Item>
                <Dropdown.Item href="/category/Water Falls/">Water Falls</Dropdown.Item>
                <Dropdown.Item href="/category/Popular Cities/">Popular Cities</Dropdown.Item>
                <Dropdown.Item href="/category/Vacation Spots/">Vacation Spots</Dropdown.Item>
                <Dropdown.Item href="/category/Cassinos/">Cassinos</Dropdown.Item>
                <Dropdown.Item href="/category/Honeymoon spots/">Honeymoon spots</Dropdown.Item>
                <Dropdown.Item href="/category/Desert/">Deserts</Dropdown.Item>
                <Dropdown.Item href="/category/Forest Region/">Forest Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Wildlife Region/">Wildlife Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Recreational Grounds/">Recreational</Dropdown.Item>
                <Dropdown.Item href="/category/Caves/">Caves</Dropdown.Item>
                <Dropdown.Item href="/category/Cultural Regions/">Cultural Regions</Dropdown.Item>
                <Dropdown.Item href="/category/Foot Hikes/">Foot Hikes</Dropdown.Item>
                <Dropdown.Item href="/category/island/">Islands</Dropdown.Item>
                <Dropdown.Item href="/category/Hotel Casino/">Hotel and Casino</Dropdown.Item>
                <Dropdown.Item href="/category/Beach Restaurant/">Beach Restaurant</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default MobileFilter;
