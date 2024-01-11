import React, { useState } from "react";

import styles from './LoginView.module.scss'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginView = () => {

    const [form, updateForm] = useState({
        login: '',
        password: ''
    });
    const [latestErr, setLatestErr] = useState('');
    const nav = useNavigate();

    const handleFormOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        updateForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!(form.login && form.password)) return;

        const url = 'https://at.usermd.net/api/user/auth';
        axios
            .post(url, {login: form.login, password: form.password})
            .then((res) => {
                localStorage.setItem('loginToken', res.data.token);
                nav('/');
                window.location.reload();
            })
            .catch((err) => {
                const msg = "Wystąpił błąd w trakcie logowania, spróbuj ponownie później.";
                setLatestErr(msg || '');
                updateForm({
                    login: '',
                    password: ''
                });
            })
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div>
                    <h1 className={styles.h1}>Welcome back! 👋</h1>
                    <form className={styles.form} onSubmit={(e) => {handleLoginSubmit(e)}}>

                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" id="login" value={form.login} onChange={(e) => handleFormOnChange(e)}/>

                        <label htmlFor="pwd">Password</label>
                        <input type="password" name="password" id="password" value={form.password} onChange={(e) => handleFormOnChange(e)}/>

                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles.wrapperBlock + " " + styles.supportingBlock}>
                    <h2>First time here?</h2>
                    <Link to='/register'><button>Sign up</button></Link>
                </div>
            </div>
            {!(latestErr === '') && <div className={styles.errorBox}>
                {latestErr}
            </div>}
        </>
        
    )
}

interface LoginElement {
    name: string,
    password: string,
}

export default LoginView;