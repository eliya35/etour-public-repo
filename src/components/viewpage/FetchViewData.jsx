import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewPageUI from './ViewPageUi';

// Handles the viewing of spesific tour sites
function ViewPageData() {

    const [tour, setTour] = useState({});
    const params = useParams()
    const id = parseInt(params.id)


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${id}`)
        // axios.get(`https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/${id}`)
            .then(res => {
                setTour(res.data);
            })
            .catch(err => {
                console.log("An error occured while getting destination");
            })
    }, [id]);

    return (
        <div>
            <ViewPageUI
                key={tour.id}
                tour_site_id={id}
                img={tour.image_01}
                image_01={tour.image_01}
                image_02={tour.image_02}
                image_03={tour.image_03}
                image_04={tour.image_04}
                alt={tour.name}
                name={tour.name}
                longDescription={tour.long_description}
                region={tour.region}
                country={tour.country}
                location={tour.location}
                touristRate={tour.tourist_traffic_annually}

                product_01={tour.product_01}
                product_01_affiliate_link={ tour.product_01_affiliate_link}

                product_02={tour.product_02}
                product_02_affiliate_link={tour.product_02_affiliate_link}

                product_03={tour.product_03}
                product_03_affiliate_link={tour.product_03_affiliate_link}

                product_04={tour.product_04}
                product_04_affiliate_link={tour.product_04_affiliate_link}

                product_05={tour.product_05}
                product_05_affiliate_link={tour.product_05_affiliate_link}

                product_06={tour.product_06}
                product_06_affiliate_link={tour.product_06_affiliate_link}

                product_07={tour.product_07}
                product_07_affiliate_link={tour.product_07_affiliate_link}

            />
        </div>
    );
}

export default ViewPageData;