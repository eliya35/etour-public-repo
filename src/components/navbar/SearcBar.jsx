import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/searchbar.css';


const SearchBar = ({ placeholder }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [destination, setDestination] = useState("");
    const navigate = useNavigate();

    const handleFilter = (e) => {
        const searchTerm = e.target.value;
        setDestination(searchTerm);
        const newFilter = data.filter(value => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        if (searchTerm === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const removeEverything = () => {
        setFilteredData([]);
        setDestination("");
    }

    useEffect(() => {
        axios.get(
            'https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/'
        )
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                // console.log("An unkown error occurred")
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
                    {filteredData.length === 0 ?
                        <i
                            className="bi bi-search"
                        />
                        :
                        <i
                            className="bi bi-x"
                            onClick={removeEverything}
                        />}
                </div>

            </div>
            {
                filteredData.length !== 0 && (
                    <div className="search-results">
                        {
                            filteredData.slice(0, 11).map(filteredSite => {
                                return (
                                    <div
                                        className='results'
                                        key={filteredSite.id}
                                        onClick={() => {
                                            (navigate(`/view/${filteredSite.id}/`))
                                            setFilteredData([]);
                                            setDestination("");
                                        }}
                                        // onKeyUp={ }
                                        // onKeyDown={ }
                                    >{filteredSite.name}
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
        </div >
    );
};

export default SearchBar;

