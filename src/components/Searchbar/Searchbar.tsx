import React from "react";
import styles from './Searchbar.module.scss'
import searchIcon from '../../assets/icons/searchIcon.png';

const Searchbar = (props: Props) => {
    return(
        <div className={styles.wrapper}>
            <img className={styles.searchIcon} src={searchIcon}/>
            <input className={styles.searchbar} onChange={(e) => props.onChange(e)}/>
        </div>
    )
}

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default Searchbar;