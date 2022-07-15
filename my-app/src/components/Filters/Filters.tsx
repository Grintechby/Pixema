import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Tabs from '../Tabs/Tabs';
import './Filters.scss';

const Filters = () => {
    return (
        <div className='filters__container'>

            <div className="filters__container_close">
                <h2>Filters</h2>
                <div className="close_btn"><img src="icons/close.svg" alt="" /></div>
            </div>

            <div className="sort_by">
                <p>Sort by</p>
                <Tabs />
            </div>

            <div className="movie_name">
                <p>Full or short movie name</p>
                <Input />
            </div>

            <div className="from-to__filter">
                <p>Years</p>
                <div className="from-to__filter_years">
                    <Input />
                    <Input />
                </div>
            </div>

            <div className="from-to__filter">
                <p>Rating</p>
                <div className="from-to__filter_rating">
                    <Input />
                    <Input />
                </div>
            </div>

            <div className="filter__country">
                <p>Country</p>
                <Select />
            </div>

            <div className="show-clr__btns">
                <ButtonSecondary />
                <ButtonPrimary />
            </div>
        </div>
    )
}

export default Filters;