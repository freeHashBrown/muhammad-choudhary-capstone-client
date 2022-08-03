import React from 'react';
import "./CommentForm.scss";
import postIcon from "../../assets/icons/post-icon.png";

const CommentForm = () => {
    return (
        <article className='comment-form'>
            <form action="" className='comment-form__main'>
                <div className='comment-form__top'>
                    <input type="text" className='comment-form__title' placeholder='Title'/>
                    <textarea className='comment-form__input' name="" id="" placeholder='Description'></textarea>
                </div>
                <section className='comment-form__outer-button'>
                    <img className='comment-form__icon' src={postIcon} alt="post" />
                    <button className='comment-form__inner-button'>
                    Post
                    </button>
                </section>
            </form>
        </article>
        
    );
};

export default CommentForm;