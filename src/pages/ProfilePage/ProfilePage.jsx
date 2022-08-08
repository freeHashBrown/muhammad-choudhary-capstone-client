import React, { Component } from 'react';
import "./ProfilePage";
import axios from 'axios';
import NavBar from '../../component/NavBar/NavBar';


class ProfilePage extends Component {

    state = {

        username: ""
    
      };


    componentDidMount() {

        axios
        .post("http://localhost:8080/login", {credentials: 'include'})
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
                <NavBar/>
                <h1>
                    Hello 
                </h1>
            </main>
        );
    }
}

export default ProfilePage;