import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className='search__container'>
            <div className="search__input">
                <input type="search" name="Search" id="" placeholder='Search' />
                <button className="filters__button"><img src="icons/filter.svg" alt="" /></button>
            </div>

        </div>
    )
}

export default Search;