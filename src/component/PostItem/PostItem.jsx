import React from 'react';
import "./PostItem.scss";
import likeIcon from "../../assets/icons/like-icon.png";
import commentIcon from "../../assets/icons/comment-icon.png";

const PostItem = () => {
    return (
        <section className='post-item'>
            <div className='post-item__top'>
                <p className='post-item__label'>
                    Muhammad Choudhary
                </p>
                <p className='post-item__label'>
                    2022-08-04
                </p>
            </div>
            <div className='post-item__middle'>
                <h1 className='post-item__title'>
                    This is the first post!
                </h1>
                <p className='post-item__desc'>
                At vero eos et accusamus et iusto odio dignissimos ducimus 
                qui blanditiis praesentium voluptatum deleniti atque corrupti 
                quos dolores et quas molestias excepturi sint occaecati 
                cupiditate non provident, similique sunt in culpa qui officia deserunt 
                mollitia animi, id est laborum et dolorum fuga. 
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