import React, { useEffect, useState } from "react";
import { Route, RouteProps, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import styles from './MovieDetailsView.module.scss'
import axios from "axios";
import trashIcon from '../../../assets/icons/trashIcon.png';

const MovieDetailsView = () => {

    const params = useParams();
    const nav = useNavigate();

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
    });
    const [isTrashVisible, setTrashVisible] = useState(false);
    const [isRemovalModalVisible, toggleRemovalModal] = useState(false);

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

    // user should be able to delete movie if he's logged in
    useEffect(() => {
        const token = localStorage.getItem('loginToken');
        if (token) {
          setTrashVisible(true);
        }
      }, []);

    const handleMovieRemoval = () => {
        const url = 'https://at.usermd.net/api/movie/' + params.id;
        console.log('hello');
        axios
            .delete(url, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('loginToken'),
                }
            })
            .then(() => {
                nav('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const starEmoji = '⭐';

    return(
        <>
            {
            isRemovalModalVisible && 
            <div className={styles.removalModal}>
                <div className={styles.modalWrapper}>
                    <p>Do you really want to remove 
                        <span className={styles.subtitle}> {movie.title}?</span>
                    </p>
                    <div>
                        <button type='button' 
                            className={styles.btnGreen}
                            onClick={() => handleMovieRemoval()}>Yes</button>
                        <button type='button' 
                            className={styles.btnRed}
                            onClick={() => toggleRemovalModal(false)}>No</button>
                    </div>
                </div>
            </div>
            }
            <div className={styles.wrapper}>
                <img src={movie?.image} className={styles.poster}/>
                <div className={styles.movieInfo  || 'unknown'}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>{movie?.title  || 'unknown'}</h1>
                        <img className={styles.settingsIcon} src={trashIcon} 
                            onClick={() => toggleRemovalModal(true)}/>
                    </div>
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
        </>
        
    )
}

export default MovieDetailsView;
