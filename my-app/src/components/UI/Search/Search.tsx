import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { setVisibleFilter } from '../../../store/reducers/filters';
import { ITheme } from '../../../types/ILinks';
import Filters from '../Filters/Filters';
import { useActions } from '../../hooks/useActions';
import { useDebounce } from '../../hooks/useDebounce';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Search.scss';
import SearchList from './SearchComponents/SearchList/SearchList';

const Search = ({theme}: ITheme) => {

    const {visible} = useTypedSelector((state) => state.filters);
    const dispatch = useActions();
    const [visibility, setVisibility] = useState(false);
    const [value, setValue] = useState<string>('')
    const {debouncedValue, setDebouncedValue} = useDebounce(value.trim(), 300);
    const isActive = debouncedValue && value && visibility;
    const searchRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(searchRef, () => setVisibility(false))
    

    const openFilter = () => {
        dispatch(setVisibleFilter(!visible));
    }

    const closeFilters = () => {
        dispatch(setVisibleFilter(false));
    }

    return (
        <div ref={searchRef} className='search__container'>
            <div className="search__input">
                <input 
                    style={theme === 'light' ? { backgroundColor: '#fff', border: '2px solid #AFB2B6', color: '#80858B' }: {}} 
                    type="search" 
                    name="Search" 
                    id="" 
                    placeholder='Поиск..'
                    onChange={(e) => {
                        setValue(e.target.value);
                        setVisibility(true);
                    }}
                    onClick={() => setVisibility(true)}
                    value={value} 
                />
                <button onClick={openFilter} className="filters__button"><img src="/icons/filter.svg" alt="" /></button>
            </div>
            <Filters closeFilters={closeFilters} />
            {isActive && (
                <SearchList 
                    closeClick={() => {
                        setValue('');
                        setVisibility(false);
                        setDebouncedValue('');
                    }} 
                    value={debouncedValue} 
                />
            )}

        </div>
    )
}

export default Search;