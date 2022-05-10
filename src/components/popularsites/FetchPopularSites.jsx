import React, { useEffect, useState } from 'react';
import PopularSitesCardUi from './PopularSiteCardUi';
import axios from 'axios'
import Pagination from '../homepage/Pagination'
import '../Styles/cardstyle.css'


const PopularSites = () => {
    
    const [tourSites, setTourSite] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(24);

    useEffect(() => {
        axios.get('https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/')
            .then(res => {
                setTourSite(res.data);

            })
            .catch(err => {
                console.log("An error occurred while fetching destinations")
            })
    }, []);

    // Getting popular sites from all sites
    const popularDestination =
        tourSites.filter(tourSite => tourSite.tourist_traffic_annually === 'VERY HIGH')

    // Current tour destinations per page
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentPopularSites = popularDestination.slice(indexOfFirstTour, indexOfLastTour);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {
                    currentPopularSites.map((item, index) => {
                        return (
                            <div className="col-md-3">
                                <PopularSitesCardUi
                                    id={item.id}
                                    title={item.name}
                                    imgsrc={item.image}
                                    alt={item.name}
                                    shortDescription={item.short_description}
                                    price={item.price}
                                    item={item}
                                    index={index}
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