import React from "react";
import styles from './Header.module.scss'
import Searchbar from "../Searchbar/Searchbar";

import userIcon from '../../assets/icons/userIcon.png';

const Header = () => {
    return(
        <header className={styles.wrapper}>
            <h1 className={styles.logo}>vid.io</h1>
            <Searchbar />
            <div>
                <img src={userIcon} className={styles.userIcon}/>
            </div>
        </header>
    )
}

export default Header;