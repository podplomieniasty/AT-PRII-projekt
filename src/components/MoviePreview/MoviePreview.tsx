import React from "react";
import styles from './MoviePreview.module.scss';
import noImgIcon from '../../assets/icons/noImgIcon.png'

const MoviePreview = (props: Props) => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
                {props.img ? <img className={ styles.preview } src={props.img} />
                           : <img className={ styles.noImg } src={noImgIcon}/>}
            </div>
            <span className={styles.previewLabel}>{props.name ? props.name : '[no title]'}</span>
        </div>
        )
};

export default MoviePreview;

interface Props {
    name?: string | undefined,
    img?: string | undefined,
}