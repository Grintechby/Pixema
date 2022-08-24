import React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../../../types/IMovie';
import './SearchItem.scss';


interface ISearchItem {
    item: IMovie;
}

const SearchItem = ({ item }: ISearchItem) => {
    const { name, id, poster, year, alternativeName, rating } = item;
    return (
        <Link to={`/movie/${id}`} className='search-item__container'>
            <div className='search-item__info'>
                <img src={poster?.url} alt="" />
                <div className="info__description">
                    <div className="description_title">{name ? name : alternativeName}</div>
                    <div className="description_year">{year}</div>
                </div>
            </div>
            <div className="search-item__rating">{rating?.kp}</div>
        </Link>
    )
}

export default SearchItem;