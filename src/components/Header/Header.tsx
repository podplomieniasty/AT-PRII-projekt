import React, { useEffect, useState } from "react";
import styles from './Header.module.scss'
import Searchbar from "../Searchbar/Searchbar";

import userIcon from '../../assets/icons/userIcon.png';
import { Link, useNavigate } from "react-router-dom";
import MainView from "../Pages/MainView/MainView";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginToken');
    setIsLoggedIn(false);
    nav('/');
    window.location.reload();
  };

    return(
        <header className={styles.wrapper}>
            <Link to='/' style={{textDecoration: 'none'}}><h1 className={styles.logo} >vid.io</h1></Link>

            <div className={styles.buttonsWrapper}>
                <Link to='/add'><button className={styles.addMovie} /></Link>
                {!isLoggedIn ? 
                    <Link to='/login'><button className={styles.fancyButton}>Sign in</button></Link>
                    :
                    <button className={styles.fancyButton} onClick={() => handleLogout()}>Sign out</button>
                }
            </div>
        </header>
    )
}

export default Header;