import React from "react";

import styles from './LoginView.module.scss'
import { Link } from "react-router-dom";

const LoginView = () => {

    const handleLoginSubmit = (e: any) => {
        e.preventDefault();
    }

    return(
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.h1}>Welcome back! 👋</h1>
                <form className={styles.form} onSubmit={(e) => {handleLoginSubmit(e)}}>

                    <label htmlFor="login">Login</label>
                    <input type="text" name="login" id="login" />

                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd" id="pwd" />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className={styles.wrapperBlock + " " + styles.supportingBlock}>
                <h2>First time here?</h2>
                <Link to='/register'><button>Sign up</button></Link>
            </div>
        </div>
    )
}

export default LoginView;