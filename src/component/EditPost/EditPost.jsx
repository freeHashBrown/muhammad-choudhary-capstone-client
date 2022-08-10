import React, { useState } from 'react';
import "./EditPost.scss";

import editIcon from "../../assets/icons/edit-icon.png";
import backIcon from "../../assets/icons/back-icon.png";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';


const EditPost = (props) => {


     //Hooks to store values
    //  let [titleHook, setTitle] = useState("");
    //  let [contentHook, setContent] = useState("");
    //  let [userIdHook, setUserId] = useState(0);

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;


        const title = form.title.value;
        const content = form.content.value;
        const id = props.match.params.id;
        console.log(id);


        if (!title || !content) {
            alert("You must fill out all fields");
            return;
            }


        //Make request to edit post
        axios
        .put(`http://localhost:8080/posts/${id}`, {
            id: id,
            title: title,
            content: content
        }, {
            withCredentials: true
        })
        .then(result => {
            history.push("/profile");
            
        })
        .catch(err =>{
            console.log(err);
        })
        

    }


    return (
        <main className='edit-post'>

            <form className='edit-post__background' onSubmit={handleSubmit}>

                <input type="text" className='edit-post__input' name='title' placeholder='Title'/>

                <textarea name="content" id="" cols="30" rows="10"
                    className='edit-post__desc' placeholder='Description' 
                ></textarea>

                <section className='edit-post__bottom'>

                    <Link to={"/profile"}>
                         <img src={backIcon} alt="back" className='edit-post__img'/>
                    </Link>

                    <button className='edit-post__button'>

                         <img src={editIcon} alt="edit" className='edit-post__img' />

                    </button>

                </section>


            </form>
            

        </main>
    );
};

export default EditPost;