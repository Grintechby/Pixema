import React from 'react';
import { data } from '../../data/data';
import { ICard } from '../../types/ICard';
import { ICardList } from '../../types/ICardsList';
import Card from '../Card/Card';
import './CardsList.scss';



const CardsList = ({ cards }: ICardList) => {
  return (
    <div className='list__container'>
      {cards.map(card => <Card id={card.id} img={card.img} genres={card.genres} pixemaRating={card.pixemaRating} title={card.title} />)}
    </div>
  )
}

export default CardsList;