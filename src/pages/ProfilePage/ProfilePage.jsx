import React, { Component } from 'react';
import "./ProfilePage";
import axios from 'axios';

class ProfilePage extends Component {


    componentDidMount() {

        axios
        .get("http://localhost:8080/user", {credentials: 'include'})
        .then(result => {
            console.log(result.data);
        })
        .catch(err => {
            console.log(err);
        })

    }



    render() {
        return (
            <main>
                <h1>
                    Hello 
                </h1>
            </main>
        );
    }
}

export default ProfilePage;