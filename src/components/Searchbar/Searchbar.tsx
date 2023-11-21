import React from "react";
import styles from './Searchbar.module.scss'
import searchIcon from '../../assets/icons/searchIcon.png';

const Searchbar = () => {
    return(
        <div className={styles.wrapper}>
            <img className={styles.searchIcon} src={searchIcon} />
            <input className={styles.searchbar} />
        </div>
        
    )
}

export default Searchbar;