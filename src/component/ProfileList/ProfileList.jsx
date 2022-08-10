import React, { Component } from 'react';
import axios from 'axios';
import "./ProfileList.scss";
import ProfileItem from '../ProfileItem/ProfileItem';


class ProfileList extends Component {
    render() {
        if (this.props.posts === undefined){
            return <p>Loading...</p>
        }else {
            return (
                <article className='profile-list'>
                    
                    {
                    this.props.posts.map(post => {
                        return <ProfileItem key={post.id} post = {post} username={this.props.username}/>
                    })                    
                    }

            </article>
            );
        }
    }
}

export default ProfileList;