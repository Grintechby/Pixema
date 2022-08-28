import React, { useEffect, useState } from 'react';
import { useGetNewMoviesQuery } from '../../../api/api';
import { ICard } from '../../../types/ICard';
import { ICardList } from '../../../types/ICardsList';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import Card from '../Card/Card';
import './CardsList.scss';

interface ICardType {
  type: number;
}

const CardsList = ({ type }: ICardType) => {
  const [limit, setLimit] = useState(8);
  const { data, isFetching } = useGetNewMoviesQuery({ limit, type });
  const [count, setCount] = useState(8);

  return (
    <>
      <h1 style={{ color: '#fff' }}>
        {(type === 1 && "Фильмы") ||
          (type === 2 && "Сериалы") ||
          (type === 3 && "Мультфильмы")}
      </h1>
      <div className='list__container'>
        {data?.docs.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
      <div className="more-btn">
        <ButtonPrimary onClick={() => setLimit(limit + count)}>{isFetching ? 'Загрузка..' : 'Показать еще'}</ButtonPrimary>
      </div>
    </>

  )
}

export default CardsList;
