import React from 'react';
import "./ProfileItem.scss";
import {Link} from "react-router-dom";



import editIcon from "../../assets/icons/edit-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";

const ProfileItem = ( {post, username} ) => {

    // console.log(post);

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
            <Link to={`/posts/${post.id}`}>
                <img src={deleteIcon} alt="delete" className='post-item__icon'/>
            </Link>
            <Link to={`/edit/${post.id}`}>
            <img src={editIcon} alt="edit" className='post-item__icon'/>
            </Link>
        </div>
    </section>
    );
};

export default ProfileItem;