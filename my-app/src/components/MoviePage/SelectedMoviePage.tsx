import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IMoviePage } from '../../types/IMoviePage';
import { ISelectedMoviePage } from '../../types/ISelectedMoviePage';
import MoviePage from './MoviePage';


const SelectedMoviePage = ({ movieArr }: ISelectedMoviePage) => {
    return (
        <>
            <Routes>
                {/* {movieArr.map(item => <Route path={'/movie_' + item.id} element={<MoviePage item={item} />} />)} */}
            </Routes>
        </>
    )
}

export default SelectedMoviePage;