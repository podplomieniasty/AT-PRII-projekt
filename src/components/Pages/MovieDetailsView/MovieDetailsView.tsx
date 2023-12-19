import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useParams } from "react-router-dom";

import sampleMovies from '../../../assets/sampleMovies.json';
import styles from './MovieDetailsView.module.scss'

const MovieDetailsView = () => {

    const params = useParams();
    const movie = sampleMovies.movies.find((mov) => mov.id === Number(params.id));

    return(
        <div className={styles.wrapper}>
            <img src={movie?.url} className={styles.poster}/>
            <div className={styles.movieInfo  || 'unknown'}>
                <h1 className={styles.title}>{movie?.title  || 'unknown'}</h1>
                <h2 className={styles.subtitle}>{movie?.productionYear  || 'unknown'}</h2>
                <div className={styles.movieAdditionalInfo}>
                    <table className={styles.table}>
                        <tr><td>Director</td><td>{movie?.directors?.join(', ') || 'unknown' }</td></tr>
                        <tr><td>Writers</td><td>{movie?.writers?.join(', ')  || 'unknown'}</td></tr>
                        <tr><td>Genres</td><td>{movie?.genres?.join(', ')  || 'unknown'}</td></tr>
                        <tr><td>Production</td><td>{movie?.madeIn || 'unknown'}</td></tr>
                        <tr><td>Released</td><td>{movie?.released || 'unknown'}</td></tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsView;
