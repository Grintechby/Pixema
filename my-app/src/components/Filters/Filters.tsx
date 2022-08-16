import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Tabs from '../Tabs/Tabs';
import './Filters.scss';
import cn from 'classnames';


interface IFilters {
    isOpen: boolean;
    closeFilters: () => void;
}

const Filters = ({ isOpen, closeFilters }: IFilters) => {
    return (
        <div className={cn('filters__background', !isOpen && 'hidden')}>
            <div className='filters__container'>

                <div className="filters__container_close">
                    <h2>Filters</h2>
                    <div onClick={closeFilters} className="close_btn"><img src="/icons/close.svg" alt="" /></div>
                </div>

                <div className="sort_by">
                    <p>Sort by</p>
                    <Tabs firstTab='Rating' secondTab='Year' />
                </div>

                <div className="movie_name">
                    <p>Full or short movie name</p>
                    <Input placeholder='Your text' />
                </div>

                <div className="from-to__filter">
                    <p>Years</p>
                    <div className="from-to__filter_years">
                        <Input placeholder='From' />
                        <Input placeholder='To' />
                    </div>
                </div>

                <div className="from-to__filter">
                    <p>Rating</p>
                    <div className="from-to__filter_rating">
                        <Input placeholder='From' />
                        <Input placeholder='To' />
                    </div>
                </div>

                <div className="filter__country">
                    <p>Country</p>
                    <Select selectPlaceholder='Select country' />
                </div>

                <div className="show-clr__btns">
                    <ButtonSecondary buttonName='Clear Filter' />
                    <ButtonPrimary buttonName='Show results' />
                </div>
            </div>
        </div>
    )
}

export default Filters;