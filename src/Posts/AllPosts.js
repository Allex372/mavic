import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "./Post";
import FullPost from "./FullPost";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import User from "../Users/User";
import FullUser from "../Users/FullUser";

class AllPosts extends Component {

    state = {posts:[],}
    PostService = new PostService();

    async componentDidMount() {
        let posts = await this.PostService.getAllPosts();
        this.setState({posts})
    }

    render() {
        let {posts}= this.state
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url+'/:id'} render={(props)=>{
                        let {match:{params:{id}}} = props;
                        return <FullPost id={id} key={id}/>
                    }}>
                    </Route>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);