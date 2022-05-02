import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FeaturedTourCard from './FeaturedSiteCard';
import Pagination from '../homepage/Pagination'


// Retrieve Featured Tour Sites from the Api and display them on a Ui Card
const FeaturedSites = () => {
    const [featuredSites, setFeaturedSites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(20);


    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/api/featured/')
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/featured/'
        )
            .then(res => {
                setFeaturedSites(res.data);
            })
            .catch(err => {
                console.log("An error occurred while fetching featured sites");
            })

    }, []);

    // Current tour per page
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentFeaturedSites = featuredSites.slice(indexOfFirstTour, indexOfLastTour);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {currentFeaturedSites.map((item, index) => {
                    return (
                        <div className="col-md-3">
                            <FeaturedTourCard
                                id={item.id}
                                title={item.name}
                                imgsrc={item.image}
                                name={item.name}
                                shortDescription={item.short_description}
                                price={item.price}
                                item={item}
                                index={index}
                            />
                        </div>
                    );
                })}
                <Pagination
                    postPerPage={postPerPage}
                    totalTours={featuredSites.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );

}

export default FeaturedSites;