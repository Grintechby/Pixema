import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../../../types/IMovie';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import './SearchItem.scss';


interface ISearchItem {
    item: IMovie;
}

const SearchItem = ({ item }: ISearchItem) => {
    const {theme} = useTypedSelector(state => state.theme);
    const { name, id, poster, year, alternativeName, rating } = item;
    return (
        <Link to={`/movie/${id}`} className={classNames(theme === 'light' ? 'search-item__container search-light': 'search-item__container')}>
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