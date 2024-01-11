import React, { useState } from "react";

import styles from './RegisterView.module.scss'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterView = () => {

    const nav = useNavigate();
    const [form, updateForm] = useState({
        login: '',
        email: '',
        password: '',
    });
    const [formMsg, setFormMsg] = useState({
        isGood: false,
        content: '',
    })

    const handleFormOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        updateForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!(form.login && form.email && form.password)) return;

        const url = 'https://at.usermd.net/api/user/create';
        axios
            .post(url, {name: form.login, email: form.email, password: form.password})
            .then((res) => {
                setFormMsg({
                    isGood: true,
                    content: 'Your account was successfully created!'
                })
                setTimeout(() => {
                    nav('/login');
                    window.location.reload();
                }, 2000); // timeout po 2 sekundach
            })
            .catch((err) => {
                setFormMsg({
                    isGood: false,
                    content: 'Your account couldn\'t be created. Try again later.'
                });
            })
    }



    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperBlock + " " + styles.supportingBlock}>
                    <h2>Already registered?</h2>
                    <Link to='/login'><button>Sign in</button></Link>
                </div>
                <div>
                    <h1 className={styles.h1}>Welcome! 💪</h1>
                    <form className={styles.form} onSubmit={(e) => {handleRegisterSubmit(e)}}>

                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" id="login" onChange={(e) => handleFormOnChange(e)} value={form.login}/>

                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" onChange={(e) => handleFormOnChange(e)} value={form.email}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => handleFormOnChange(e)} value={form.password}/>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            {!(formMsg.content === '') && <div className={!formMsg.isGood ? styles.errorBox : styles.errorBoxGood}>
                {formMsg.content}
            </div>}
        </>
        
    )
}

export default RegisterView;