import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__container_img">
                <div className="card__container_rating">7.6</div>
                <img src="images/poster.png" alt="" />
            </div>
            <div className="card__container_title">Wonder Woman: 1984</div>
            <div className="card__container_description">Adventure &#8226; Action &#8226; Fantasy</div>
        </div>
    )
}

export default Card;