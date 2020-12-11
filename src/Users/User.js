import React, {Component} from 'react';
import {PostService} from "../services/PostService";

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
                {item.id}-{item.name}-<Link to={url + '/'+ item.id}>info</Link>
                <button onClick={() => this.setPost(item.id)}>Check Posts</button>

                <div>
                    {
                        posts && posts.map((post) => <h3>{post.title}</h3>)
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(User);