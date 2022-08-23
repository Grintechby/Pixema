import React, { useState } from 'react';
import { useGetMoviesByFiltersQuery } from '../../../api/api';
import { filtersSlice } from '../../../store/reducers/filters';
import Card from '../../Card/Card';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../../Loader/Loader';
import MainTemplate from '../../MainTemplate/MainTemplate';
import './FilterPage.scss';

const FilterPage = () => {

    const [limit, setLimit] = useState(8);
    const { filters, defaultValues } = useTypedSelector((state) => state.filters);
    const { setFilterYear, setFilterGenres, setFilterRating } = filtersSlice.actions;
    const dispatch = useActions();

    const { data, isFetching, isLoading } = useGetMoviesByFiltersQuery({ filters, limit });

    const [count, setCount] = useState(8);

    const {year, rating, genres} = {...filters};

    return (
        <MainTemplate>
            {isLoading ? (
                <div className='filter-page__loader' >
                    <Loader />
                </div>
            ): (
                <div className="filter-page__container">
                    {data?.docs.map((movie) => (
                        <Card key={movie.id} card={movie} />
                    ))}
                </div>
            )
            }
        </MainTemplate>
    )
}

export default FilterPage;