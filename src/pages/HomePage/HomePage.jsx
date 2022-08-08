import React from 'react';
import "./HomePage.scss";


import CommentForm from '../../component/CommentForm/CommentForm';
import PostList from '../../component/PostList/PostList';
import NavBar from '../../component/NavBar/NavBar';

import profileIcon from "../../assets/icons/profile-icon.png";
import homeIcon from "../../assets/icons/homepage-icon.png";
import messagesIcon from "../../assets/icons/messages-icon.png";
import logoutIcon from "../../assets/icons/logout-icon.png";



const HomePage = () => {
    return (
        <main className='home-page'>
            <nav className='home-page__nav'>
            <div className='home-page__item'>
            <img src={homeIcon} alt="" className='home-page__icon'/>
                    <p className='home-page__link'>
                        Home
                    </p>
            </div>
            <div className='home-page__item'>
            <img src={messagesIcon} alt="" className='home-page__icon'/>
                    <p className='home-page__link'>
                        Message
                    </p>
            </div>
            <a href="http://localhost:3000/profile">
                <div className='home-page__item'>
                <img src={profileIcon} alt="" className='home-page__icon'/>
                    <p className='home-page__link'>
                        Profile
                    </p>
            </div>
            </a>
           
            <a href="http://localhost:8080/logout">
                <div className='home-page__item'>
                <img src={logoutIcon} alt="" className='home-page__icon'/>
                    <p className='home-page__link'>
                        Log Out
                    </p>
            </div>
            </a>
          
            </nav>
            <article className='home-page__main'>
                <PostList/>
                <CommentForm/>
                {/* <section className='home-page__post'>
                    <div className='home-page__top'>
                        <p className='home-page__name'>
                            Muhammad
                        </p>
                        <p className='home-page__date'>
                            2022-08-02
                        </p>
                    </div>
                    <p className='home-page__text'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
                    Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                    Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                    <div className='home-page__bottom'>
                        <img src={commentIcon} alt="comment" className='home-page__icon'/>
                        <img src={likeIcon} alt="like" className='home-page__icon'/>
                    </div>
                </section> */}
            </article>
        </main>
    );
};

export default HomePage;