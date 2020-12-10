import React, {Component} from 'react';
import User from "./User";
import {UserService} from "../services/UserService";
import * as url from "url";
import FullUser from "./FullUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class AllUsers extends Component {

    state = {users:[]}
    UserService = new UserService();

    async componentDidMount() {
       let users = await this.UserService.getAllUsers();
        this.setState({users})
    }
    render() {
        let {users}= this.state
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <hr/>
                    <Switch>
                        <Route path={url+'/:id'} render={(props)=>{
                            let {match:{params:{id}}} = props;
                            return <FullUser id={id} key={id}/>
                        }}>
                        </Route>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);