import React, {Component} from 'react';
import {CommentsSercice} from "../services/CommentsSercice";
import Comment from "./Comment";

class AllComments extends Component {

    state = {comments:[]}
    commentService = new CommentsSercice();

     async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}/>) }
            </div>
        );
    }
}

export default AllComments;