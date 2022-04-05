import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryCard from './CategoryPageCard';
import Pagination from '../homepage/Pagination'

const FetchCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const[loading, setLoading] = useState(true)
    const [postPerPage] = useState(20);
    const category = useParams().category

    useEffect(() => {
        if (category) {
            axios.get(`http://127.0.0.1:8000/api/category/${category}/`)
                .then(res => {
                    setCategoryData(res.data)
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                })
        }
    }, [category]);

    // Current tour per page
    const indexOfLastTour = currentPage * postPerPage;
    const indexOfFirstTour = indexOfLastTour - postPerPage;
    const currentCategorySite = categoryData.slice(indexOfFirstTour, indexOfLastTour);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) { 
        return <span>Loading...</span>
        
    }

    
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {currentCategorySite.map(item => {
                        return (
                            <div className="col-md-3">
                                <CategoryCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    imgsrc={item.image}
                                    alt={item.name}
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
