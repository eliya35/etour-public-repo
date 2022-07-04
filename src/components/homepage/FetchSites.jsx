import React, { useEffect, useState, useContext } from 'react';
import TourCard from './DisplaySites';
import axios from 'axios';
import Pagination from './Pagination';
import '../Styles/cardstyle.css';
import loader from '../../clockwise.svg'
import { ApiContext } from '../../ApiUrl';

const AllSites = () => {
    const [tours, setTours] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(24);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const { baseURL } = useContext(ApiContext)

    // Pagination Logic
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log('baseURL', baseURL);

    useEffect(
        () => {
            axios.get(`${baseURL}`)
                .then(res => {
                    setTours(res.data);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                    setError(true);
                })
        }, []
    );

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
                {currentTours.map(item => {
                    return (
                        <div className="col-md-3">
                            <TourCard
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                imgsrc={item.image}
                                name={item.name}
                                shortDescription={item.short_description}
                                price={item.price}
                                item={item}
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

export default AllSites;