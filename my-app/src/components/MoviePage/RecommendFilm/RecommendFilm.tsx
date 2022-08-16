import React from 'react';
import './RecommendFilm.scss';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/IMovie';

interface IRecommendFilm {
    item: IMovie;
    rating: number | undefined;
}

const RecommendFilm = ({ item, rating }: IRecommendFilm) => {
    const {id, poster, name} = {...item}
    return (
        <div className='recommend-film__container'>
            <div className="card__container_img">
                <div className="card__container_rating">{rating}</div>
                <img src={poster?.url} alt="" />
            </div>
            
            <div className="recommend-film__container_title">
                <Link to={`/movie/${id}`}>{name}</Link>
            </div>
        </div>
    )
}

export default RecommendFilm;