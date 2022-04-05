import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FeaturedTourCard from './FeaturedCardUi';
import Pagination from '../homepage/Pagination'


// Retrive Featured Tour Sites from the Api and dispaly them on a Ui Card
const FeaturedSites = () => {
    const [featuredSites, setFeaturedSites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(20);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/featured/')
            .then(res => {
                setFeaturedSites(res.data);
            })
            .catch(err => {
                console.log(err);
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
                                alt={item.name}
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