import React, { useEffect, useRef, useState } from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary';
import Tabs from '../Tabs/Tabs';
import './Filters.scss';
import cn from 'classnames';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { filtersSlice } from '../../../store/reducers/filters';
import { Controller, useForm } from 'react-hook-form';
import _ from 'lodash';
import { useOnClickOutside } from 'usehooks-ts';
import { Link } from 'react-router-dom';
import SelectComponent from '../Select/Select';
import FromToInput from '../Input/FromToInput/FromToInput';


interface IFilters {
    closeFilters: () => void;
}

const Filters = ({ closeFilters }: IFilters) => {

    const genres = [
        { label: "Семейные", value: "семейный" },
        { label: "Биографии", value: "биография" },
        { label: "Боевики", value: "боевик" },
        { label: "Вестерны", value: "вестерн" },
        { label: "Военные", value: "военный" },
        { label: "Детективы", value: "детектив" },
        { label: "Детские", value: "детский" },
        { label: "Документальные", value: "документальный" },
        { label: "Драмы", value: "драма" },
        { label: "Исторические", value: "история" },
        { label: "Комедии", value: "комедия" },
        { label: "Короткометражки", value: "короткометражка" },
        { label: "Криминал", value: "криминал" },
        { label: "Мелодрамы", value: "мелодрама" },
        { label: "Музыкальные", value: "музыка" },
        { label: "Мюзиклы", value: "мюзикл" },
        { label: "Новости", value: "новости" },
        { label: "Приключения", value: "приключения" },
        { label: "Спортивные", value: "спорт" },
        { label: "Триллеры", value: "триллер" },
        { label: "Ужасы", value: "ужасы" },
        { label: "Фантастика", value: "фантастика" },
        { label: "Фильмы-нуар", value: "фильм-нуар" },
        { label: "Фэнтези", value: "фэнтези" },
    ];

    const dispatch = useActions();
    const { visible, filters, defaultValues } = useTypedSelector((state) => state.filters);

    const {
        setCheckedFilter,
        setFilterGenres,
        setFilterRating,
        setFilterSortBy,
        setFilterYear,
        setVisibleFilter
    } = filtersSlice.actions;

    const { handleSubmit, control, reset, getValues } = useForm({ defaultValues })

    const onSubmit = handleSubmit((data) => {
        const { sortBy, rating, year, genres } = data;
        dispatch(setFilterRating(rating));
        dispatch(setFilterYear(year));
        dispatch(setFilterSortBy(sortBy));
        dispatch(setFilterGenres(genres));
        dispatch(setVisibleFilter(false));
        _.isEqual(getValues(), defaultValues) ?
            dispatch(setCheckedFilter(false)) :
            dispatch(setCheckedFilter(true));
    });

    const handleReset = () => {
        reset({
            genres: defaultValues.genres,
            rating: defaultValues.rating,
            year: defaultValues.year,
            sortBy: defaultValues.sortBy
        });
    };

    const filtersRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(filtersRef, () => {
        closeFilters();
    })

    useEffect(() => {
        reset({
            genres: filters.genres,
            rating: filters.rating,
            year: filters.year,
            sortBy: filters.sortBy
        });
    }, [filters, reset]);



    return (
        <div className={cn('filters__container', !visible && 'hidden')}>

            <div className='filters__container_close'>
                <h2>Фильтры</h2>
                <div onClick={closeFilters} className="close_btn"><img src="/icons/close.svg" alt="" /></div>
            </div>

            <div className="sort_by">
                <p>Сортировка по году:</p>
                <Controller
                    name='sortBy'
                    control={control}
                    render={({ field: { onChange } }) => {
                        return (
                            <Tabs
                                firstTab='Новые'
                                secondTab='Старые'
                                frstDisabled={getValues().sortBy === '-1'}
                                scndDisabled={getValues().sortBy === '1'}
                                frstFunc={() => { onChange('-1') }}
                                scndFunc={() => { onChange('1') }}
                                name='sort'
                                frstValue='-1'
                                scndValue='1'
                            />
                        )
                    }}
                />
            </div>

            <div className='genres'>
                <p>Жанры</p>
                <Controller
                    name='genres'
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <SelectComponent options={genres} onChange={onChange} value={value} />
                        );
                    }}
                />
            </div>

            <div className="from-to__filter">
                <p>Год производства</p>
                <div className="from-to__filter_years">
                    <Controller
                        name='year'
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <FromToInput min={filters.year[0]} max={filters.year[1]} values={value} onChange={onChange} />
                            );
                        }}
                    />
                </div>
            </div>

            <div className="from-to__filter">
                <p>Рейтинг</p>
                <div className="from-to__filter_rating">
                    <Controller
                        name='rating'
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <FromToInput min={filters.rating[0]} max={filters.rating[1]} values={value} onChange={onChange} />
                            );
                        }}
                    />
                </div>
            </div>

            <div className="show-clr__btns">
                <ButtonSecondary onClick={handleReset}>Очистить</ButtonSecondary>
                <ButtonPrimary onClick={onSubmit}>
                    <Link to='/filter'>Результаты</Link>
                </ButtonPrimary>
            </div>
        </div>
    );
}

export default Filters;