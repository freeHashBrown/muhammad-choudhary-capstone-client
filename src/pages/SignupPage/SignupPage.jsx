import React from 'react';
import "./SignupPage.scss";

const SignupPage = () => {
    return (
        <main className='signup-page'>
            <form className='signup-page__form'>
                <input type="text" placeholder='First Name' className='sign-up__input'/>
                <input type="text" placeholder='Last Name' className='sign-up__input'/>
                <input type="text" placeholder='Username' className='sign-up__input'/>
                <input type="text" placeholder='Password' className='sign-up__input'/>
                <input type="text" placeholder='Confirm Password' className='sign-up__input'/>
                <section className='sign-up__outer-button'>
                    <button className='sign-up__inner-button'>
                        Sign Up
                    </button>
                </section>
            </form>
        </main>
    );
};

export default SignupPage;