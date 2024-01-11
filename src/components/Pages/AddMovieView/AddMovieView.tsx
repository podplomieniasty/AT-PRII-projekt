import React, { useState } from "react";

import styles from './AddMovieView.module.scss';
import sampleMovies from '../../../assets/sampleMovies.json';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMovieView = () => {

    const nav = useNavigate();
    const [form, updateForm] = useState({
        title: '',
        image: '',
        content: '',
        genre: '',
        rate: '',
    });
    const [formMsg, setFormMsg] = useState({
        isGood: false,
        content: '',
    })


    const handleFormOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        updateForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!(form.title && form.content && form.genre && form.rate && form.image)) return;

        const url = 'https://at.usermd.net/api/movies';
        axios
            .post(url, {
                title: form.title,
                image: form.image,
                content: form.content,
                genre: form.genre,
                rate: form.rate,
            })
            .then((res) => {
                setFormMsg({
                    isGood: true,
                    content: 'Your movie was successfully added!',
                });

                setTimeout(() => {
                    nav('/');
                }, 2000);
            })
            .catch((err) => {
                setFormMsg({
                    isGood: false,
                    content: 'There was an error while adding your movie.',
                });
            })
        
    }

    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>Add new movie 🎥</h1>
                <form className={styles.form} onSubmit={(e) => {handleFormSubmit(e)}}>

                    <label htmlFor="title">Movie name</label>
                    <input type="text" name="title" id="title" onChange={(e) => handleFormOnChange(e)} value={form.title}/>

                    <label htmlFor="image">Poster URL</label>
                    <input type="text" name="image" id="image" onChange={(e) => handleFormOnChange(e)} value={form.image}/>

                    <label htmlFor="content">Description</label>
                    <input type="text" name="content" id="content" onChange={(e) => handleFormOnChange(e)} value={form.content}/>

                    <label htmlFor="genre">Genre</label>
                    <input type="text" name="genre" id="genre" onChange={(e) => handleFormOnChange(e)} value={form.genre}/>

                    <label htmlFor="rate">Rating</label>
                    <input type="text" name="rate" id="rate" onChange={(e) => handleFormOnChange(e)} value={form.rate}/>

                    <button type="submit">Submit</button>
                </form>
            </div>
            {!(formMsg.content === '') && <div className={!formMsg.isGood ? styles.errorBox : styles.errorBoxGood}>
                {formMsg.content}
            </div>}
        </>
        
    )
}

export default AddMovieView;