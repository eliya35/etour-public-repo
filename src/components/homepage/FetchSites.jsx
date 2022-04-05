import React, { useEffect, useState } from 'react';
import TourCard from './DisplaySites'
import axios from 'axios'
import Pagination from './Pagination';


import '../Styles/cardstyle.css'

// Retrive Tour Sites from the Api and dispaly them on a Ui Card
const AllSites = () => {
    const [tours, setTours] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(20);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                setTours(res.data);

            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // Current tour per page
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

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
                                alt={item.name}
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

export default AllSites;