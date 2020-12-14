import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import './User.css'

import {
    Link,
    withRouter
} from "react-router-dom";

class User extends Component {
    state= {
        posts: null
    }

    postService = new PostService()

       setPost = async (id) => {
        const posts  = await this.postService.getPostForUser(id)
           this.setState({posts})
    }

    render() {
        let {match:{url},item} = this.props;
        const {posts} = this.state;

        return (
            <div>
                <span className={'id-style'}>{item.id}:</span> <span className={'item-style'}>{item.name}-</span>  <Link to={url + '/'+ item.id}><span className={'link'}>info</span></Link>-
                <button className={'btn'} onClick={() => this.setPost(item.id)}><span className={'text'}>Check Posts</span></button>
                <div>
                    {
                        posts && posts.map((post) => <h5>{post.title}</h5>)
                    }
                </div>
            </div>

        );
    }
}

export default withRouter(User);