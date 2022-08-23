import React from 'react';
import { ICardList } from '../../types/ICardsList';
import CardsList from '../CardsList/CardsList';
import Header from '../Header/Header';
import MainTemplate from '../MainTemplate/MainTemplate';

interface IType {
    type: number;
}


const HomePage = () => {
    return (
        <div>
            <MainTemplate>
                <CardsList type={1} />
                <CardsList type={2} />
                <CardsList type={3} />
            </MainTemplate>
        </div>
    )
}

export default HomePage;