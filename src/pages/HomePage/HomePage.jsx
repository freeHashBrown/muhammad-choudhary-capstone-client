import React from 'react';
import "./HomePage.scss";

import PostList from '../../component/PostList/PostList';
import NavBar from '../../component/NavBar/NavBar';


const HomePage = () => {
    return (
        <main className='home-page'>
            <NavBar/>
            <PostList/>
        </main>
    );
};

export default HomePage;