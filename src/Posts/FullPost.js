import React, {Component} from 'react';
import {PostService} from "../services/PostService";

class FullPost extends Component {
    state = {post:null}

    postService = new PostService();

    async componentDidMount() {
        let {id} = this.props
        let post = await this.postService.getPostById(id);
        this.setState({post})
    }

    render() {
        let {post} = this.state
        return (
            <div>
                {post && <div>{post.userId}-{post.id}-{post.title}</div>}
            </div>
        );
    }
}

export default FullPost;