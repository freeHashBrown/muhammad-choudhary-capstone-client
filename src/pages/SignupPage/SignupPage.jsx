import React, { useState } from 'react';
import "./SignupPage.scss";
import signupIcon from "../../assets/icons/signup-icon.png";

const SignupPage = () => {

    //Hooks to store values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    //Function for submitting username and password
    const handleSubmit = (event) => {
        

        const form = event.target;

        //Store the username, password and confirm password
        const username = form.username.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // Check all fields filled
        if (!username || !password || !confirmPassword) {
        alert("You must fill out all fields");
        return;
        }
  
        // Check if the passwords match
        if (password !== confirmPassword) {
        alert("Passwords must match");
        return;
        }

        //Store all the values in hooks
        



    }

    return (
        <main className='signup-page'>
          
            <form className='signup-page__form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' className='signup-page__input' name='username'/>

                <input type="password" placeholder='Password' className='signup-page__input' name='password'/>

                <input type="password" placeholder='Confirm Password' className='signup-page__input' name='confirmPassword'/>

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