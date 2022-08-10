import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../types/ICard';
import './Card.scss';


const Card = ({id, img, genres, pixemaRating, title}:ICard) => {
    return (
        <div id={'card_' + {id}} className="card__container">
            <div className="card__container_img">
                <div className="card__container_rating">{pixemaRating}</div>
                <img src={img} alt="" />
            </div>
            <div className="card__container_title"><Link to={'/movies/movie_' + id}>{title}</Link></div>
            <ul className="card__container_description">
                {genres.map(genre => <li>{genre}</li>)}
            </ul>
        </div>
    )
}

export default Card;
