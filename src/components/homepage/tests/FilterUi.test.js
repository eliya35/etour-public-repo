import React from 'react';
import { screen, render } from '@testing-library/react';
import Filter from '../FilterUi';
import { BrowserRouter } from "react-router-dom";

test('Category span is renderd in the document', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const category = screen.getByText('Category');
    expect(category).toBeInTheDocument();
});

test('renders Ancient Buldings link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const ancientBuldingLink = screen.getByRole('link', { name: "Ancient Buildings" });
    expect(ancientBuldingLink).toBeInTheDocument();
});

test('renders Beach Restaurant link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const beachRestaurantLink = screen.getByRole('link', { name: "Beach Restaurant" });
    expect(beachRestaurantLink).toBeInTheDocument();
});

test('renders Bike Hikes link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const BikeHikesLink = screen.getByRole('link', { name: "Bike Hikes" });
    expect(BikeHikesLink).toBeInTheDocument();
});

test('renders Caves link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const cavesLink = screen.getByRole('link', { name: "Caves" });
    expect(cavesLink).toBeInTheDocument();
});

test('renders Cold Regions link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const coldRegionLink = screen.getByRole('link', { name: "Cold Regions" });
    expect(coldRegionLink).toBeInTheDocument();
});

test('renders Cultural Regions link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const culturalRegionLink = screen.getByRole('link', { name: "Cultural Regions" });
    expect(culturalRegionLink).toBeInTheDocument();
});

test('renders Deserts link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const desertsLink = screen.getByRole('link', { name: "Deserts" });
    expect(desertsLink).toBeInTheDocument();
});

test('renders Family Time Spots link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const famTimeLink = screen.getByRole('link', { name: "Family Time Spots" });
    expect(famTimeLink).toBeInTheDocument();
});

test('renders Foot Hikes link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const footHikesLink = screen.getByRole('link', { name: "Foot Hikes" });
    expect(footHikesLink).toBeInTheDocument();
});

test('renders Honeymoon spots link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const honyemoonLink = screen.getByRole('link', { name: "Honeymoon spots" });
    expect(honyemoonLink).toBeInTheDocument();
});

test('renders Hot Regions link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const hotRegionLink = screen.getByRole('link', { name: "Hot Regions" });
    expect(hotRegionLink).toBeInTheDocument();
});

test('renders Islands link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const islandLink = screen.getByRole('link', { name: "Islands" });
    expect(islandLink).toBeInTheDocument();
});

test('renders Mountains link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const mountainsLink = screen.getByRole('link', { name: "Mountains" });
    expect(mountainsLink).toBeInTheDocument();
});

test('renders National Parks link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const natinalParkLink = screen.getByRole('link', { name: "National Parks" });
    expect(natinalParkLink).toBeInTheDocument();
});

test('renders Popular Cities link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const PopularCitiesLink = screen.getByRole('link', { name: "Popular Cities" });
    expect(PopularCitiesLink).toBeInTheDocument();
});

test('renders Recreational link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const recreationalLink = screen.getByRole('link', { name: "Recreational" });
    expect(recreationalLink).toBeInTheDocument();
});


test('renders Forest Regions link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const ForestRegionsLink = screen.getByRole('link', { name: "Forest Regions" });
    expect(ForestRegionsLink).toBeInTheDocument();
});

test('renders Vacation Spots link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const VacationSpotsLink = screen.getByRole('link', { name: "Vacation Spots" });
    expect(VacationSpotsLink).toBeInTheDocument();
});

test('renders Water Falls link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const WaterFallsLink = screen.getByRole('link', { name: "Water Falls" });
    expect(WaterFallsLink).toBeInTheDocument();
});

test('renders Wildlife Regions link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const WildlifeRegionsLink = screen.getByRole('link', { name: "Wildlife Regions" });
    expect(WildlifeRegionsLink).toBeInTheDocument();
});

test('renders Filters title ', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const filtersTitle = screen.getByTitle('Filters');
    expect(filtersTitle).toBeInTheDocument();
});

test('renders Most Popular filter checkbox', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const mostPopularCheckBox = screen.getByRole('checkbox', {name:'most popular'});
    expect(mostPopularCheckBox).toBeInTheDocument();
});

test('renders featured filter checkbox', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const featuredCheckBox = screen.getByRole('checkbox', { name: 'featured' });
    expect(featuredCheckBox).toBeInTheDocument();
});

test('renders Regions title ', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const regionsTitle = screen.getByRole('heading', { level: 6 });
    expect(regionsTitle).toBeInTheDocument();
});

test('renders ASIA region link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const asiaRegionLink = screen.getByRole('link', { name: "ASIA" });
    expect(asiaRegionLink).toBeInTheDocument();
});

test('renders AFRICA region link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const africaRegionLink = screen.getByRole('link', { name: "AFRICA" });
    expect(africaRegionLink).toBeInTheDocument();
});

test('renders EUROPE link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const europeLink = screen.getByRole('link', { name: "EUROPE" });
    expect(europeLink).toBeInTheDocument();
});

test('renders NORTH AMERICA link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const northAmericaLink = screen.getByRole('link', { name: "NORTH AMERICA" });
    expect(northAmericaLink).toBeInTheDocument();
});

test('renders SOUTH AMERICA link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const southAmericaLink = screen.getByRole('link', { name: "SOUTH AMERICA" });
    expect(southAmericaLink).toBeInTheDocument();
});

test('renders AUSTRALIA link', () => {
    render(
        <BrowserRouter>
            <Filter />
        </BrowserRouter>
    );

    const australiaLink = screen.getByRole('link', { name: "AUSTRALIA" });
    expect(australiaLink).toBeInTheDocument();
});