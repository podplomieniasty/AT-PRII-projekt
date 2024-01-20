import React, { InputHTMLAttributes, useEffect, useState } from "react";
import styles from './Section.module.scss'

import MoviePreview from "../MoviePreview/MoviePreview";
import manituImg from '../../assets/images/manitu.jpg';
import taylorImg from '../../assets/images/taylor.jpg';
import moviesJson from '../../assets/sampleMovies.json';
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";

const Section = (props: Props) => {

    const [movies, setMovies] = useState([]);
    const [failedToLoad, toggleFailedToLoad] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const url = 'https://at.usermd.net/api/movies';
        axios
            .get(url)
            .then((res) => {
                setMovies(res.data);
                setFilteredMovies(res.data);
            })
            .catch((err) => {
                toggleFailedToLoad(true);
            })
    }, [])

    const mapAsLink = (mv: MovieInterface) => {
        return(
            <Link to={'/details/' + mv.id} style={{textDecoration: 'none', color: 'black'}}>
                        <MoviePreview name={mv.title} img={mv.image} key={mv.id}/>
            </Link>
        )
        
    }

    const handleChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const filtered = movies.filter((v:MovieInterface) => v.title.toLowerCase().trim().match(e.target.value.toLowerCase().trim()));
        setFilteredMovies(filtered);
        console.log(filtered);
    }
    
    return(
        <section className={styles.wrapper}>
            <Searchbar onChange={handleChangedInput}/>

            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.subtitle}>{props.subtitle}</span>
            <div className={styles.previews}>
                {
                    filteredMovies.length !== 0 ?
                    filteredMovies.map((mv) => mapAsLink(mv)) :
                    <span className={styles.sadMessage}>We couldn't find any movies :c</span>
                }
            </div>
        </section>
    )
}

export default Section;

interface Props {
    title: string,
    subtitle: string,
}

interface MovieInterface {
    id: string,
    title: string,
    image: string,
}