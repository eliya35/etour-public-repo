import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/searchbar.css';


const SearchBar = ({ placeholder }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isTextInput, setIsTextInput] = useState(false);
    const [destination, setDestination] = useState("");
    const navigate = useNavigate();

    const handleFilter = (e) => {
        const searchTerm = e.target.value;
        setDestination(searchTerm);
        const newFilter = data.filter(value => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        if (searchTerm === "") {
            setFilteredData([]);
            setIsTextInput(false);
        } else {
            setFilteredData(newFilter);
            setIsTextInput(true);
        }
    }

    const clearInputNode = () => {
        setFilteredData([]);
        setDestination("");
        setIsTextInput(false);
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
            });
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
                    <i
                        style={{ visibility: isTextInput ? "hidden" : "visible" }}
                        className="bi bi-search"
                        data-testid="search-icon"
                    />

                    <i
                        style={{ marginTop: "-2em", visibility: isTextInput ? "visible" : "hidden" }}
                        className="bi bi-x"
                        data-testid="cancel-icon"
                        onClick={clearInputNode}
                    />
                </div>
            </div>
            
            <div className="search-results" data-testid="search-results" style={{ visibility: isTextInput ? "visible" : "hidden" }}>
                {
                    filteredData.slice(0, 11).map(filteredSite => {
                        return (
                            <div
                                key={filteredSite.id}
                                className='results'
                                onClick={() => {
                                    (navigate(`/view/${filteredSite.id}/`))
                                    setFilteredData([]);
                                    setDestination("");
                                    setIsTextInput(false);
                                }}
                            >{filteredSite.name}
                            </div>
                        );
                    })
                }
            </div>
        </div >
    );
};

export default SearchBar;