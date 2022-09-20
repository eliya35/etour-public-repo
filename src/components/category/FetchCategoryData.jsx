import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import loader from '../../clockwise.svg';
import TourCard from '../homepage/DisplaySites';
import Pagination from '../homepage/Pagination';

const FetchCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(24);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const category = useParams().category;

    useEffect(() => { document.title = 'Category Sites'; });

    useEffect(() => {
        if (category) {
            fetchCategorySites(category);
        }
    }, [category]);

    const fetchCategorySites = async (category) => {
        await axios.get(
            `https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/category/${category}/`
        )
            .then(res => {
                setCategoryData(res.data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setError(true);
            });
    }

    if (isLoading) {
        return (
            <div className="allsites-loading">
                <img src={loader} className="loading-clockwise" alt="Loading..." />
            </div>
        );
    }

    if (error) {
        throw new Error('NetworkError: Please check your connection or try again later😶.')
    }

    // Pagination Logic
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentCategorySite = categoryData.slice(indexOfFirstTour, indexOfLastTour);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {currentCategorySite.map(item => {
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
                        totalTours={categoryData.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>
    );
}

export default FetchCategoryData;