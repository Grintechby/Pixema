import React from 'react';
import { data } from '../../data/data';
import { ICardList } from '../../types/ICardsList';
import CardsList from '../CardsList/CardsList';
import Header from '../Header/Header';
import MainTemplate from '../MainTemplate/MainTemplate';


const HomePage = ({cards}:ICardList) => {
    return (
        <div>
            <MainTemplate>
                <CardsList cards={cards} />
            </MainTemplate>
        </div>
    )
}

export default HomePage;