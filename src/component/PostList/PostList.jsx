import React from 'react';
import "./PostList.scss";
import PostItem from '../PostItem/PostItem';

const PostList = () => {
    return (
        <article className='post-list'>
           <PostItem/>
           <PostItem/>

           {/* <PostItem/> */}

          



        </article>
    );
};

export default PostList;