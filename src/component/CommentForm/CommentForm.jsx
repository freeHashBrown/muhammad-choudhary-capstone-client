import React, { useState } from 'react';
import "./CommentForm.scss";
import postIcon from "../../assets/icons/post-icon.png";
import axios from 'axios';



const CommentForm = ({updatePosts}) => {

    //Hooks to store values
    let [titleHook, setTitle] = useState("");
    let [contentHook, setContent] = useState("");
    let [userIdHook, setUserId] = useState(0);


    //Function for submitting username and password
    const handleSubmit = (event) => {
        event.preventDefault();
        

        const form = event.target;

        //Store the title, userId, and content 
        let title = form.title.value;
        let content = form.content.value;
        // console.log(req);

        // Check all fields filled
        if (!title || !content) {
            alert("You must fill out all fields");
            return;
            }

        //axios request to get user
        axios
        .get("http://localhost:8080/user", {withCredentials: true})
        .then(result => {
   
        
            //Save the info in state
            setTitle(form.title.value);
            setContent(form.content.value);
            setUserId(result.data.id);
       
            console.log(title, content, result.data.id);

              //Axios post
            axios.post("http://localhost:8080/posts", 
            {user_id: result.data.id,
            title: title,
            content: content
            },
            {withCredentials: true})
            .then(result => {
            console.log(result);

                axios
                .get("http://localhost:8080/posts")
                .then(result => {
    
               
                    updatePosts(result.data);
                    form.reset();
                })
                })
                .catch(err => {
                    console.log(err);
                })
            .catch(err => {
            console.log(err)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <article className='comment-form'>
            <form className='comment-form__main' onSubmit={handleSubmit}>
                <div className='comment-form__top'>
                    <input type="text" className='comment-form__title' placeholder='Title' name='title'/>
                    <textarea className='comment-form__input' name="content" id="" placeholder='Description'></textarea>
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