import React from 'react';
import "./PostItem.scss";
import likeIcon from "../../assets/icons/like-icon.png";
import commentIcon from "../../assets/icons/comment-icon.png";

const PostItem = ( {post} ) => {

    // console.log(post);
    return (
        <section className='post-item'>
            <div className='post-item__top'>
                <p className='post-item__label'>
                    {post.username}
                </p>
                <p className='post-item__label'>
                    {post.updated_at.slice(0, 10)}
                </p>
            </div>
            <div className='post-item__middle'>
                <h1 className='post-item__title'>
                    {post.title}
                </h1>
                <p className='post-item__desc'>
                    {post.content}
                </p>
            </div>
            <div className='post-item__bottom'>
                <img src={likeIcon} alt="like" className='post-item__icon'/>
                <img src={commentIcon} alt="comment" className='post-item__icon'/>
            </div>
        </section>
    );
};

export default PostItem;