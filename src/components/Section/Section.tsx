import React from "react";
import styles from './Section.module.scss'

import MoviePreview from "../MoviePreview/MoviePreview";
import manituImg from '../../assets/images/manitu.jpg';
import taylorImg from '../../assets/images/taylor.jpg';
import moviesJson from '../../assets/sampleMovies.json';

const Section = (props: Props) => {
    
    return(
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.subtitle}>{props.subtitle}</span>
            <div className={styles.previews}>
                
                {moviesJson.movies.map((mv, index) => 
                    <MoviePreview name={mv.title} img={mv.url} key={index}/>
                )}
            </div>
        </section>
    )
}

export default Section;

interface Props {
    title: string,
    subtitle: string,
}