import React, { useEffect, useState } from "react";
import styles from './Section.module.scss'

import MoviePreview from "../MoviePreview/MoviePreview";
import manituImg from '../../assets/images/manitu.jpg';
import taylorImg from '../../assets/images/taylor.jpg';
import moviesJson from '../../assets/sampleMovies.json';
import { Link } from "react-router-dom";
import axios from "axios";

const Section = (props: Props) => {

    const [movies, setMovies] = useState([]);
    const [failedToLoad, toggleFailedToLoad] = useState(false);

    useEffect(() => {
        const url = 'https://at.usermd.net/api/movies';
        axios
            .get(url)
            .then((res) => {
                setMovies(res.data);
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
    
    return(
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.subtitle}>{props.subtitle}</span>
            <div className={styles.previews}>
                {
                    movies.map((mv) => mapAsLink(mv))
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