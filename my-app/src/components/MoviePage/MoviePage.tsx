import React from 'react';
import Card from '../Card/Card';
import MainTemplate from '../MainTemplate/MainTemplate';
import './MoviePage.scss';
import { data } from '../../data/data';
import { IMoviePage } from '../../types/IMoviePage';
import { ISelectedCard } from '../../types/ISelectedCard';
import RecommendBox, { IRecommendBox } from './RecommendBox/RecommendBox';
import { ICardList } from '../../types/ICardsList';


const MoviePage = ({ item: { id, img, actors, boxOffice, country, description, director, duration, genres, iMDb, pixemaRating, production, released, title, writers, year } }: ISelectedCard) => {
    return (
        <MainTemplate>
            <div id={'movie_' + id} className='movie-page__container'>
                <div className="movie-page__container_img-box">
                    <img src={img} alt="" />
                </div>
                <div className="movie-page__container_content-box">
                    <ul className="content-box__genres">
                        {genres.map(genre => <li>{genre}</li>)}
                    </ul>
                    <h1 className="content-box__title">{title}</h1>
                    <div className="content-box__ratings">
                        <div className="rating_pixema">{pixemaRating}</div>
                        <div className="rating_imdb">
                            <img src="/icons/imdb_logo.svg" alt="" />
                            <span>{iMDb}</span>
                        </div>
                        <div className="movie-duration">{duration}</div>
                    </div>
                    <div className="content-box__description">{description}</div>
                    <div className="content-box__main-info">
                        <table>
                            <tr>
                                <th>Year</th>
                                <td>{year}</td>
                            </tr>
                            <tr>
                                <th>Released</th>
                                <td>{released}</td>
                            </tr>
                            <tr>
                                <th>BoxOffice</th>
                                <td>{boxOffice}</td>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <td>{country.map(country => country)}</td>
                            </tr>
                            <tr>
                                <th>Production</th>
                                <td>{production.map(prod => prod)}</td>
                            </tr>
                            <tr>
                                <th>Actors</th>
                                <td>{actors.map(actor => actor)}</td>
                            </tr>
                            <tr>
                                <th>Director</th>
                                <td>{director}</td>
                            </tr>
                            <tr>
                                <th>Writers</th>
                                <td>{writers.map(writer => writer)}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="content-box__recommend">
                        <h2>Recommendations</h2>
                        <RecommendBox cardsList={data} currentId={id} />
                    </div>
                </div>
            </div>
        </MainTemplate>
    )
}

export default MoviePage;