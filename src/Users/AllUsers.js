import React, {Component} from 'react';
import User from "./User";
import {UserService} from "../services/UserService";

class AllUsers extends Component {

    state = {users:[]}
    UserService = new UserService();

    async componentDidMount() {
       let users = await this.UserService.getAllUsers();
        this.setState({users})
    }


    render() {
        let {users}= this.state
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <hr/>

                <hr/>
            </div>
        );
    }
}

export default AllUsers;