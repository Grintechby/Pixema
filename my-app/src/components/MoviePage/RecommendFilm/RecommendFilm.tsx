import React from 'react';
import './RecommendFilm.scss';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/IMovie';
import cn from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IRecommendFilm {
    item: IMovie;
    rating: number | undefined;
}

const RecommendFilm = ({ item, rating }: IRecommendFilm) => {
    const { theme } = useTypedSelector(state => state.theme);
    const { id, poster, name } = { ...item }
    return (
        <div className='recommend-film__container'>
            <Link to={`/movie/${id}`}>
                <div className="card__container_img">
                    <div className="card__container_rating">{rating}</div>
                    <img src={poster?.url} alt="" />
                </div>
            </Link>
            <div className="recommend-film__container_title">
                <Link className={cn(theme === 'light' ? 'title_light' : 'title_dark')} to={`/movie/${id}`}>{name}</Link>
            </div>
        </div>
    )
}

export default RecommendFilm;