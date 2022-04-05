import React from 'react';


const Pagination = ({ postPerPage, totalTours, paginate }) => {
    const pageNumbers = [];

    // Increment pages depending on totalTours
    for (let i = 1; i <= Math.ceil(totalTours / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination