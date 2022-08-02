import React from 'react';
import "./LoginPage.scss";
import googleLogo from "../../assets/icons/google-icon.png";

const LoginPage = () => {
    return (
        <main className='login-page'>
            <article className='login-page__column'>
                <section className='login-page__outer-button'>
                    <img src={googleLogo} alt="google" className='login-page__logo'/>
                    <button className='login-page__inner-button'>
                        Google
                    </button>
                </section>
            </article>
            <article className='login-page__column'>

            </article>
        </main>
    );
};

export default LoginPage;