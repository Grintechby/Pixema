import React from 'react';
import './RecommendBox.scss';
import { ICard } from '../../../types/ICard';
import { ICardList } from '../../../types/ICardsList';
import Card from '../../Card/Card';


export interface IRecommendBox {
    cardsList: ICard[];
    currentId?: number;
}


const RecommendBox = ({ cardsList, currentId }: IRecommendBox) => {

    let recommends: ICard[] = [];

    const filterFunction = () => {
        cardsList.map((card) => {
            if (card.id !== currentId) {
                if (recommends.length < 3) {
                    recommends.push(card)
                }
            }
            return recommends;
        })
    }
    filterFunction()
    console.log(recommends);


    return (
        <div className="recommend-box">
            {recommends.map(card => <Card id={card.id} img={card.img} genres={card.genres} pixemaRating={card.pixemaRating} title={card.title} />)}
        </div>
    )
}

export default RecommendBox;