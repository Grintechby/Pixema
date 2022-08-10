import React, { useState } from 'react';
import Filters from '../Filters/Filters';
import './Search.scss';

const Search = () => {
    const [openFilters, setOpenFilters] = useState(false);

    return (
        <div className='search__container'>
            <div className="search__input">
                <input type="search" name="Search" id="" placeholder='Search' />
                <button onClick={() => setOpenFilters(!openFilters)} className="filters__button"><img src="icons/filter.svg" alt="" /></button>
            </div>
            <Filters isOpen={openFilters} closeFilters={() => setOpenFilters(!openFilters)} />
        </div>
    )
}

export default Search;