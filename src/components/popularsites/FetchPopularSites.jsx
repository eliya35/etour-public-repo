import React, { useEffect, useState } from 'react';
import PopularSitesCardUi from './PopularSiteCardUi';
import axios from 'axios';
import Pagination from '../homepage/Pagination';
import '../Styles/cardstyle.css';
import loader from '../../clockwise.svg'


const PopularSites = () => {
    const [tourSites, setTourSite] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(24);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    // Filtering popular sites from all sites
    const popularDestination =
        tourSites.filter(tourSite => tourSite.tourist_traffic_annually === 'VERY HIGH');


    // Pagination Logic
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentPopularSites = popularDestination.slice(indexOfFirstTour, indexOfLastTour);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        axios.get('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/')
            .then(res => {
                setTourSite(res.data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setError(true);
            })
    }, []);

    if (isLoading) {
        return (
            <div className="allsites-loading">
                <img src={loader} className="loading-clockwise" alt="Loading..." />
            </div>
        );
    }

    if (error) {
        throw new Error('NetworkError: Please check your connnection or try again later😶.')
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {
                    currentPopularSites.map(item => {
                        return (
                            <div className="col-md-3">
                                <PopularSitesCardUi
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    imgsrc={item.image}
                                    alt={item.name}
                                    shortDescription={item.short_description}
                                    price={item.price}
                                    item={item}
                                    rate={item.numb_stars}
                                    status={item.is_featured}
                                />
                            </div>
                        );
                    })
                }
                <Pagination
                    postPerPage={postPerPage}
                    totalTours={popularDestination.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default PopularSites;