import React, { Component } from 'react';
import "./ProfilePage.scss";
import axios from 'axios';
import NavBar from '../../component/NavBar/NavBar';

import ProfileList from '../../component/ProfileList/ProfileList';


class ProfilePage extends Component {

    state = {

        username: "",
        posts: []
    
      };


    componentDidMount() {

        axios
        .get("http://localhost:8080/user", {withCredentials: true})
        .then(result => {
            const userId = result.data.id;
            this.setState({
                username: result.data.username
            })
            

            axios
            .get(`http://localhost:8080/posts/${userId}`)
            .then(result => {
                this.setState({
                    posts: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })

        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        return (
            <main className='profile'>
                <NavBar/>
                <h1 className='profile__title'>
                    Hello {this.state.username}
                </h1>
                <ProfileList posts={this.state.posts} username = {this.state.username}/>

            </main>
        );
    }
}

export default ProfilePage;