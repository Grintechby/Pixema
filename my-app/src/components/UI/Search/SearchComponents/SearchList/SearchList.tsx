import React, { useState } from 'react';
import { useGetMoviesBySearchQuery } from '../../../../../api/api';
import { IMovie } from '../../../../../types/IMovie';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Loader from '../../../Loader/Loader';
import SearchItem from '../SearchItem/SearchItem';
import './SearchList.scss';


interface SearchListProps {
    value: string;
    closeClick: () => void;
}

const SearchList = ({ value, closeClick }: SearchListProps) => {

    

    const [type, setType] = useState(1);
    const { data, isFetching } = useGetMoviesBySearchQuery({
        query: value,
        type,
        limit: 5,
    })

    return (
        <div className='search-list__container'>
            {!isFetching ? (
                <div className="search-list__box">
                    {(data?.docs.length) ? 
                        data?.docs.map((movie: IMovie) => (
                            <SearchItem key={movie.id} item={movie} />
                        )) :
                        <div className="search-list__box_not-found" onClick={closeClick}>
                            <h3>Ничего не найдено</h3>
                        </div>
                    }
                </div>) : (
                <div className='search-list__loading' onClick={closeClick}>
                    <Loader/>
                </div>
            )}
        </div>
    )
}

export default SearchList;