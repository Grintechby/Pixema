import React, { useState } from 'react';
import { useGetNewMoviesQuery } from '../../api/api';
import { ICard } from '../../types/ICard';
import { ICardList } from '../../types/ICardsList';
import Card from '../Card/Card';
import './CardsList.scss';

interface ICardType {
  type: number;
}

const CardsList = ({ type }: ICardType) => {
  const [limit, setLimit] = useState(10);
  const { data, isFetching } = useGetNewMoviesQuery({ limit, type });
  const [count, setCount] = useState(10);
  return (
    <>
      <div className='list__container'>
        {data?.docs.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
      <button onClick={() => setLimit(limit + count)}>
        {isFetching ? 'Loading' : 'More'}
      </button>
    </>

  )
}

export default CardsList;


// cards.map(card => <Card id={card.id} img={card.img} genres={card.genres} pixemaRating={card.pixemaRating} title={card.title} />)
