import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./LoginPage.scss";
import googleLogo from "../../assets/icons/google-icon.png";
import loginIcon from "../../assets/icons/login-icon.png";
import axios from "axios";


const LoginPage = () => {


    //Hooks to store values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Create history object to go to homepage
    const history = useHistory();

    //Function for submitting username and password
    const handleSubmit = (event) => {
        event.preventDefault();
        

        const form = event.target;

        //Store the username, password and confirm password
        const username = form.username.value;
        const password = form.password.value;
       

        // Check all fields filled
        if (!username || !password) {
        alert("You must fill out all fields");
        return;
        }
  

        //Save the info in state
        setUsername(username);
        setPassword(password);

        //Axios post
        axios.post("http://localhost:8080/login", 
         {username: username,
            password: password
        },
        {withCredentials: true})
        .then(result => {
            console.log(result);

            //Sending user to homepage if the login is succesfull
            if (result.data === 'Login Success') {
                
                history.push("/homepage");
            }

        })
        .catch(err => {
            console.log(err)
        })
    }


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
                    <form className='login-page__form' onSubmit={handleSubmit}>
                        <input type="text" name="username"  className='login-page__input' placeholder='username'/>
                        <input type="password" name='password' className='login-page__input' placeholder='password'/>
                        <section className='login-page__outer-button login-page__outer-button--select'>
                            <img src={loginIcon} alt="login" className='login-page__logo login-page__logo--select'/>
                            <button className='login-page__inner-button login-page__inner-button--select'>
                            Login
                            </button>
                            
                        </section>
                        <p className='login-page__text'>
                            no account, sign up?
                        </p>
                    </form>
                </article>
            </div>
        </main>
    );
};

export default LoginPage;