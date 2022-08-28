import React from 'react';
import Card from '../UI/Card/Card';
import MainTemplate from '../UI/MainTemplate/MainTemplate';
import './MoviePage.scss';
import { IMoviePage } from '../../types/IMoviePage';
import { ISelectedCard } from '../../types/ISelectedCard';
import RecommendBox from './RecommendBox/RecommendBox';
import { ICardList } from '../../types/ICardsList';
import { useGetMovieByIdQuery } from '../../api/api';
import { useParams } from 'react-router-dom';
import { IMovieGenre } from '../../types/IMovie';
import { convertTimeStampToDate } from '../helpers/convertTimeStampToDate';
import { convertNumbers } from '../helpers/convertNumbers';
import { useTypedSelector } from '../hooks/useTypedSelector';
import cn from 'classnames';


const MoviePage = () => {

    const {theme} = useTypedSelector(state => state.theme);

    const params = useParams();
    const { data, isLoading } = useGetMovieByIdQuery(params.id);
    const {
        name,
        rating,
        similarMovies,
        id,
        fees,
        genres,
        movieLength,
        countries,
        description,
        persons,
        premiere,
        poster,
        year,
        productionCompanies,
    } = { ...data };


    const person = (value: any) => {
        return persons?.filter((item: any) =>
            item.enProfession === value ? item.name : undefined
        );
    };

    return (
        <MainTemplate>
            {!isLoading && (
                <div id={'movie_' + id} className='movie-page__container'>
                    <div className="movie-page__container_img-box">
                        <img src={poster?.url} alt="" />
                    </div>
                    <div className="movie-page__container_content-box">
                        <ul className="content-box__genres">
                            {genres?.map((genre: IMovieGenre) => <li key={'key_' + genre.name}>{genre.name}</li>)}
                        </ul>
                        <h1 className={cn(theme === 'light'? 'content-box__title light': 'content-box__title')}>{name}</h1>
                        <div className="content-box__ratings">
                            <div className="rating_pixema">{rating?.kp}</div>
                            <div className="rating_imdb">
                                <img src="/icons/imdb_logo.svg" alt="" />
                                <span>{rating?.imdb}</span>
                            </div>
                            <div className="movie-duration">{movieLength} min</div>
                        </div>
                        <div className={cn(theme === 'light'? 'content-box__description light': 'content-box__description')}>{description}</div>
                        <div className="content-box__main-info">
                            <table className={cn(theme === 'light'? 'light': '')}>
                                <tbody>
                                    <tr>
                                        <th>Год</th>
                                        <td>{year && year}</td>
                                    </tr>
                                    <tr>
                                        <th>Дата премьеры</th>
                                        <td>{premiere?.world && convertTimeStampToDate(premiere?.world, 'DD MM YYYY')}</td>
                                    </tr>
                                    <tr>
                                        <th>Сборы в мире</th>
                                        <td>{fees?.world && `${fees?.world.currency} ${convertNumbers(fees?.world.value)}`}</td>
                                    </tr>
                                    <tr>
                                        <th>Страны</th>
                                        <td>
                                            {countries && countries?.map((country, index) => {
                                                if (index === 0) {
                                                    return <span key={country.name}>{country.name}</span>
                                                }
                                                if (index < 3) {
                                                    return <span key={country.name}>, {country.name}</span>
                                                }
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Производство</th>
                                        <td>
                                            {productionCompanies && productionCompanies?.map((company, index) => {
                                                if (index === 0) {
                                                    return <span key={company.name}>{company.name}</span>
                                                }
                                                if (index < 3) {
                                                    return <span key={company.name}>, {company.name}</span>
                                                }
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Актеры</th>
                                        <td>
                                            {person('actor')?.map((actor, index) => {
                                                if (index === 0) {
                                                    return <span key={actor.name}>{actor.name}</span>
                                                }
                                                if (index < 3) {
                                                    return <span key={actor.name}>, {actor.name}</span>
                                                }
                                            }
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Режиссер</th>
                                        <td>
                                            {person('director')?.map((director, index) => {
                                                if (index === 0) {
                                                    return <span key={director.name}>{director.name}</span>
                                                }
                                                if (index < 3) {
                                                    return <span key={director.name}>, {director.name}</span>
                                                }
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Автор сценария</th>
                                        <td>
                                            {person('writer')?.map((writer, index) => {
                                                if (index === 0) {
                                                    return <span key={writer.name}>{writer.name}</span>
                                                }
                                                if (index < 3) {
                                                    return <span key={writer.name}>, {writer.name}</span>
                                                }
                                            })}
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="content-box__recommend">
                            <h2 className={cn(theme === 'light'? 'light': '')}>Рекомендуем посмотреть :</h2>
                            <RecommendBox movies={similarMovies} rating={rating?.kp} />
                        </div>
                    </div>
                </div>
            )}
        </MainTemplate>
    )
}

export default MoviePage;