import React, { Component } from 'react';
import axios from 'axios';

import "./PostList.scss";
import PostItem from '../PostItem/PostItem';

import CommentForm from '../../component/CommentForm/CommentForm';


class PostList extends Component {

    //Storing the posts
    state = {
        posts: []
    };

    componentDidMount() {

        axios
        .get("http://localhost:8080/posts")
        .then(result => {

           

            this.setState({
                posts: result.data
            });

          

        })
        .catch(err => {
            console.log(err);
        })



    }
    


    render() {
        if (this.state.posts === undefined){
            return <p>Loading...</p>
        }else {
            return (
                <article className='post-list'>
                    
                    {
                    this.state.posts.map(post => {
                        return <PostItem key={post.id} post = {post}/>
                    })                    
                    }

                    <CommentForm/>
            </article>
            );
        }



       
    }
}

export default PostList;