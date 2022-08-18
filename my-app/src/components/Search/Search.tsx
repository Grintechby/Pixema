import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { ITheme } from '../../types/ILinks';
import Filters from '../Filters/Filters';
import { useDebounce } from '../hooks/useDebounce';
import './Search.scss';
import SearchList from './SearchComponents/SearchList/SearchList';

const Search = ({theme}: ITheme) => {
    const [openFilters, setOpenFilters] = useState(false);
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState<string>('')
    const {debouncedValue, setDebouncedValue} = useDebounce(value.trim(), 300);
    const isActive = debouncedValue && value && visible;
    const formRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(formRef, () => setVisible(false))

    return (
        <div ref={formRef} className='search__container'>
            <div className="search__input">
                <input 
                    style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#323537' }} 
                    type="search" 
                    name="Search" 
                    id="" 
                    placeholder='Search'
                    onChange={(e) => {
                        setValue(e.target.value);
                        setVisible(true);
                    }}
                    onClick={() => setVisible(true)}
                    value={value} 
                />
                <button onClick={() => setOpenFilters(!openFilters)} className="filters__button"><img src="/icons/filter.svg" alt="" /></button>
            </div>
            <Filters isOpen={openFilters} closeFilters={() => setOpenFilters(!openFilters)} />
            {isActive && (
                <SearchList 
                    closeClick={() => {
                        setValue('');
                        setVisible(false);
                    }} 
                    value={debouncedValue} 
                />
            )}

        </div>
    )
}

export default Search;