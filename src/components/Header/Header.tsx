import React from "react";
import styles from './Header.module.scss'
import Searchbar from "../Searchbar/Searchbar";

import userIcon from '../../assets/icons/userIcon.png';
import { Link } from "react-router-dom";
import MainView from "../Pages/MainView/MainView";

const Header = () => {
    return(
        <header className={styles.wrapper}>
            <Link to='/' style={{textDecoration: 'none'}}><h1 className={styles.logo} >vid.io</h1></Link>
            <Searchbar />

            <div className={styles.buttonsWrapper}>
                <Link to='/add'><button className={styles.addMovie} /></Link>
                <Link to='/login'><img src={userIcon} className={styles.userIcon}/></Link>
            </div>
        </header>
    )
}

export default Header;