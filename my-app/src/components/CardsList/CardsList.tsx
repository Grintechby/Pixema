import React, { useEffect, useState } from 'react';
import { useGetNewMoviesQuery } from '../../api/api';
import { ICard } from '../../types/ICard';
import { ICardList } from '../../types/ICardsList';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import Card from '../Card/Card';
import './CardsList.scss';

interface ICardType {
  type: number;
}

const CardsList = ({ type }: ICardType) => {
  const [limit, setLimit] = useState(10);
  const { data, isFetching } = useGetNewMoviesQuery({ limit, type });
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 1024) {
      setLimit(8);
      setCount(8);
    } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 734) {
      setLimit(9);
      setCount(9);
    } else if (document.documentElement.clientWidth < 735) {
      setLimit(10);
      setCount(10);
    }
  }, []);

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

      {/* <button className='more-btn' onClick={() => setLimit(limit + count)}>
        {isFetching ? 'Загрузка..' : 'Показать еще'}
      </button> */}
    </>

  )
}

export default CardsList;
