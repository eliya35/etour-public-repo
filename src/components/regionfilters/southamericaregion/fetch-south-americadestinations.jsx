import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TourCard from '../../homepage/DisplaySites';
import Pagination from '../../homepage/Pagination';


const SouthAmericaRegionDestinations = () => {
    const [tours, setTours] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(24);

    useEffect(
        () => {
            axios.get(
                'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/'
            )
                .then(res => {
                    setTours(res.data);

                })
                .catch(err => {
                    // console.log("An error occurred");
                })
        }, []
    );

    // Filter Tours
    const southAmericaRegionTours = tours.filter(tour => tour.region === 'SOUTH AMERICA')

    // Current destinations per page
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentTours = southAmericaRegionTours.slice(indexOfFirstTour, indexOfLastTour);



    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {currentTours.map((item, index) => {
                    return (
                        <div className="col-md-3">
                            <TourCard
                                id={item.id}
                                title={item.name}
                                imgsrc={item.image}
                                name={item.name}
                                shortDescription={item.short_description}
                                price={item.price}
                                item={item}
                                index={index}
                                status={item.is_featured}
                            />
                        </div>
                    );
                })}
                <Pagination
                    postPerPage={postPerPage}
                    totalTours={tours.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default SouthAmericaRegionDestinations;