import React, { useEffect, useState } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useParams } from "react-router-dom";

import sampleMovies from '../../../assets/sampleMovies.json';
import styles from './MovieDetailsView.module.scss'
import axios from "axios";

const MovieDetailsView = () => {

    const params = useParams();

    const [movie, setMovie] = useState({
        id: '',
        title: '',
        image: '',
        content: '',
        rate: '',
        genre: '',
        productionYear: '',
        directors: [],
        writers: [],
        madeIn: '',
        released: '',
    })

    useEffect(() => {

        const url = 'https://at.usermd.net/api/movies/' + params.id;
        console.log(url);
        axios
            .get(url)
            .then((res) => {
                setMovie(res.data)
            })
    }, [])
    //const movie = sampleMovies.movies.find((mov) => mov.id === Number(params.id));

    const starEmoji = '⭐';

    return(
        <div className={styles.wrapper}>
            <img src={movie?.image} className={styles.poster}/>
            <div className={styles.movieInfo  || 'unknown'}>
                <h1 className={styles.title}>{movie?.title  || 'unknown'}</h1>
                <h2 className={styles.subtitle}>{movie?.productionYear  || ' '}</h2>
                <div className={styles.movieAdditionalInfo}>
                    <table className={styles.table}>
                        <tr><td>Director</td><td>{movie?.directors?.join(', ') || 'unknown' }</td></tr>
                        <tr><td>Writers</td><td>{movie?.writers?.join(', ')  || 'unknown'}</td></tr>
                        <tr><td>Genres</td><td>{movie?.genre || 'unknown'}</td></tr>
                        <tr><td>Rating</td><td>{movie?.rate ? starEmoji.repeat(Number(movie?.rate)) : 'none'}</td></tr>
                        <tr><td>Released</td><td>{movie?.released || 'unknown'}</td></tr>
                        <tr><td>Description</td><td>{movie?.content || 'No description provided.'}</td></tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsView;
