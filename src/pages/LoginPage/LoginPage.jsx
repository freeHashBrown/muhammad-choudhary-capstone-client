import React from 'react';
import "./LoginPage.scss";
import googleLogo from "../../assets/icons/google-icon.png";

const LoginPage = () => {
    return (
        <main className='login-page'>
            <div className='login-page__card'>
                <article className='login-page__column login-page__column--select'>
                    <section className='login-page__outer-button'>
                        <img src={googleLogo} alt="google" className='login-page__logo'/>
                        <button className='login-page__inner-button'>
                            Google
                        </button>
                    </section>
                </article>
                <article className='login-page__column'>
                    <form className='login-page__form'>
                        <input type="text" name="" id="" className='login-page__input' placeholder='username'/>
                        <input type="password" className='login-page__input' placeholder='password'/>
                    </form>
                </article>
            </div>
        </main>
    );
};

export default LoginPage;