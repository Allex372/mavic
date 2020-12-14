import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import './FullUser.css'
import {PostService} from "../services/PostService";


class FullUser extends Component {
    state ={
        user:null,
        posts:null
    }

    userService = new UserService();


    async componentDidMount() {
        let {id} = this.props
        let user = await this.userService.user(id)
        this.setState({user})
    }

    render() {
        let {user,posts} = this.state
        return (
           <div className={'FullInfoAbUser'}>
               {user&&
               <div>
                   <span className={'heading'}>Name</span><span className={'info'}>: {user.name}</span><br/>
                   <span className={'heading'}>UserName</span><span className={'info'}>: {user.username}</span><br/>
                   <span className={'heading'}>Email</span><span className={'info'}>: {user.email}</span><br/>
                   <span className={'heading'}>Street</span><span className={'info'}>: {user.address.street}</span><br/>
                   <span className={'heading'}>Suite</span><span className={'info'}>: {user.address.suite}</span><br/>
                   <span className={'heading'}>City</span><span className={'info'}>: {user.address.city}</span><br/>
                   <span className={'heading'}>ZipCode</span><span className={'info'}>: {user.address.zipcode}</span>
               </div>
               }
           </div>
        );
    }
}

export default FullUser;