import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../types/ICard';
import { IMovie, IMovieGenre } from '../../types/IMovie';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './Card.scss';


const Card = ({ card }: ICard) => {
    const theme = useTypedSelector(store => store.theme.theme)

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : 'black' }} id={'card_' + card.id} className="card__container">
            <div className="card__container_img">
                <div className="card__container_rating">{card.rating?.kp}</div>
                <img src={card.poster?.url} alt="" />
            </div>
            <div className="card__container_title">
                <Link to={`/movie/${card.id}`}>{card.name}</Link>
            </div>
            <ul className="card__container_description">
                {
                    card.genres?.map((genre: IMovieGenre, index) => {
                        if (index < 3) {
                            return <li key={'key_' + genre.name}>{genre.name}</li>
                        }

                    })
                }
            </ul>
        </div>
    )
}

export default Card;
