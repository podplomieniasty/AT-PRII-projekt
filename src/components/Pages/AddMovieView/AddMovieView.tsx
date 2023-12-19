import React, { useState } from "react";

import styles from './AddMovieView.module.scss';
import sampleMovies from '../../../assets/sampleMovies.json';

const AddMovieView = () => {

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        
    }

    return(
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Add new movie</h1>
            <form className={styles.form} onSubmit={(e) => {handleFormSubmit(e)}}>

                <label htmlFor="movieName">Movie name</label>
                <input type="text" name="movieName" id="movieName" />

                <label htmlFor="movieUrl">Poster URL</label>
                <input type="text" name="movieUrl" id="movieUrl" />

                <label htmlFor="releaseYear">Release year</label>
                <input type="text" name="releaseYear" id="releaseYear" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddMovieView;