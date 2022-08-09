import React from 'react';
import "./ProfileItem.scss";


import editIcon from "../../assets/icons/edit-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";

const ProfileItem = ( {post, username} ) => {
    return (
        <section className='post-item'>
        <div className='post-item__top'>
            <p className='post-item__label'>
                {username}
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
            <img src={deleteIcon} alt="like" className='post-item__icon'/>
            <img src={editIcon} alt="comment" className='post-item__icon'/>
        </div>
    </section>
    );
};

export default ProfileItem;