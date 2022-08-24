import React, { useState } from 'react';
import './RecommendBox.scss';
import { ICard } from '../../../types/ICard';
import { ICardList } from '../../../types/ICardsList';
import Card from '../../UI/Card/Card';
import { useGetNewMoviesQuery } from '../../../api/api';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/IMovie';
import RecommendFilm from '../RecommendFilm/RecommendFilm';



export interface IRecommendBox {
    movies: IMovie[] | undefined;
    rating: number | undefined;
}


const RecommendBox = ({ movies, rating }: IRecommendBox) => {
    const theme = useTypedSelector(store => store.theme.theme)

    return (
        <div className='recommend-box__container'>
            {movies?.map((movie, index) => {
                if (index < 3) {
                    return (
                        <RecommendFilm key={`sim_${movie.id}`} item={movie} rating={rating} />
                    )
                }
            })}
        </div>
    )
}

export default RecommendBox;