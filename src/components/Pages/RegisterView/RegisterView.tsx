import React from "react";

import styles from './RegisterView.module.scss'
import { Link } from "react-router-dom";

const RegisterView = () => {

    const handleRegisterSubmit = (e: any) => {
        e.preventDefault();
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.wrapperBlock + " " + styles.supportingBlock}>
                <h2>Already registered?</h2>
                <Link to='/login'><button>Sign in</button></Link>
            </div>
            <div>
                <h1 className={styles.h1}>Welcome! 💪</h1>
                <form className={styles.form} onSubmit={(e) => {handleRegisterSubmit(e)}}>

                    <label htmlFor="movieName">Login</label>
                    <input type="text" name="login" id="login" />

                    <label htmlFor="movieUrl">Name</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="releaseYear">E-mail</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="releaseYear">Password</label>
                    <input type="password" name="pwd" id="pwd" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterView;