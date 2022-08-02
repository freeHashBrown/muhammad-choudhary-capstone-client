import React from 'react';
import "./SignupPage.scss";
import signupIcon from "../../assets/icons/signup-icon.png";

const SignupPage = () => {
    return (
        <main className='signup-page'>
          
            <form className='signup-page__form'>
                <input type="text" placeholder='First Name' className='signup-page__input'/>
                <input type="text" placeholder='Last Name' className='signup-page__input'/>
                <input type="text" placeholder='Username' className='signup-page__input'/>
                <input type="text" placeholder='Password' className='signup-page__input'/>
                <input type="text" placeholder='Confirm Password' className='signup-page__input'/>
                <section className='signup-page__outer-button'>
                    <img src={signupIcon} alt="login" className='signup-page__logo '/>
                    <button className='signup-page__inner-button'>
                        Sign Up
                    </button>
                </section>
            </form>
        </main>
    );
};

export default SignupPage;