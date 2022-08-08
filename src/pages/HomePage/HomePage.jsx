import React from 'react';
import "./HomePage.scss";


import CommentForm from '../../component/CommentForm/CommentForm';
import PostList from '../../component/PostList/PostList';
import NavBar from '../../component/NavBar/NavBar';





const HomePage = () => {
    return (
        <main className='home-page'>
            <NavBar/>
            <CommentForm/>
            
        </main>
    );
};

export default HomePage;