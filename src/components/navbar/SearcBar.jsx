import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../Styles/searchbar.css'


// Handles Serching
const SearchBar = ({ placeholder }) => {
    const [data, setData] = useState([])
    const [filterdData, setFilterdData] = useState([])
    const [destination, setDestination] = useState("")
    const navigate = useNavigate();

    const handleFilter = (e) => {
        const searchTerm = e.target.value;
        setDestination(searchTerm);
        const newFilter = data.filter(value => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        if (searchTerm === "") {
            setFilterdData([])
        } else {
            setFilterdData(newFilter)
        }

    }

    const removeEverthing = () => {
        setFilterdData([]);
        setDestination("");
    }

    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/api/')
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/'
        )
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log("An error occurred while fetching destinations")
            })
    })

    return (
        <div className='search'>
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={destination}
                    onChange={handleFilter}
                />

                <div className="search-icon">
                    {filterdData.length === 0 ?
                        <i
                            className="bi bi-search"
                        />
                        :
                        <i
                            className="bi bi-x"
                            onClick={removeEverthing}
                        />}
                </div>

            </div>
            {filterdData.length !== 0 && (<div className="search-results">
                {filterdData.slice(0, 15).map(filterdSite => {
                    return (
                        <div
                            className='results'
                            key={filterdSite.id}
                            onClick={() => {
                                (navigate(`/view/${filterdSite.id}/`))
                                setFilterdData([]);
                                setDestination("");
                            }}
                        >{filterdSite.name}
                        </div>
                    );
                })}
            </div>
            )}
        </div >
    );
};

export default SearchBar;

