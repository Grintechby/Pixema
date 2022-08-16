import React from 'react';
import { ICardList } from '../../types/ICardsList';
import CardsList from '../CardsList/CardsList';
import Header from '../Header/Header';
import MainTemplate from '../MainTemplate/MainTemplate';

interface IType {
    type: number;
}


const HomePage = ({type}:IType) => {
    return (
        <div>
            <MainTemplate>
                <CardsList type={type} />
            </MainTemplate>
        </div>
    )
}

export default HomePage;