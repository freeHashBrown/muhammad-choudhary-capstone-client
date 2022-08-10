import React from 'react';

import axios from "axios";
import "./DeletePost.scss";

import deleteIcon from "../../assets/icons/delete-icon.png";
import backIcon from "../../assets/icons/back-icon.png";
import { useHistory, Link } from 'react-router-dom';


const DeletePost = (props) => {
    const history = useHistory();

    const handleDelete = (event) => {
        const id = props.match.params.id;
        

        axios
        .delete(`http://localhost:8080/posts/${id}`)
        .then(result => {
            history.push("/profile");
        })
        .catch(err => {
            console.log(err);
        })


    }



    return (
        <main className='delete-post'>
            <article className='delete-post__background'>
                <h1
                className='delete-post__title'>Are you sure you want to delete this post?</h1>

                <section className='delete-post__bottom'>
                    <Link to={"/profile"}>
                        <img src={backIcon} alt="back" className='delete-post__icon'/>
                    </Link>

                    <img onClick={handleDelete} src={deleteIcon} alt="delete" className='delete-post__icon'/>
                </section>
            </article>
        </main>
    );
};

export default DeletePost;