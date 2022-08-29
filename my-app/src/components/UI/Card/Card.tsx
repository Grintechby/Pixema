import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../../types/ICard';
import { IMovieGenre } from '../../../types/IMovie';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Card.scss';


const Card = ({ card }: ICard) => {
    const {theme} = useTypedSelector(state => state.theme)

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : 'black' }} id={'card_' + card.id} className="card__container">
            <Link to={`/movie/${card.id}`}>
                <div className="card__container_img">
                    <div className="card__container_rating">{card.rating?.kp}</div>
                    <img src={card.poster?.url} alt="" />
                </div>
            </Link>
            <div className="card__container_title">
                <Link className={cn(theme === 'light' ? 'title_light': 'title_dark')} to={`/movie/${card.id}`}>{card.name}</Link>
            </div>
            <ul className="card__container_description">
                {
                    card.genres?.map((genre: IMovieGenre, index) => {
                        if (index < 2) {
                            return <li key={'key_' + genre.name}>{genre.name}</li>
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Card;
