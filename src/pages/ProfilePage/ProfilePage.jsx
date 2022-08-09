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
        .get("http://localhost:8080/user", {withCredentials: true})
        .then(result => {
            // console.log(result.data.id);
            this.setState({
                username: result.data.username
            })

            
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
                    Hello {this.state.username}
                </h1>
            </main>
        );
    }
}

export default ProfilePage;