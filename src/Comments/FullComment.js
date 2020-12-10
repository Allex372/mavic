import React, {Component} from 'react';
import {CommentsSercice} from "../services/CommentsSercice";

class FullComment extends Component {
    state = {comment:null}

    commentService = new CommentsSercice();


    async componentDidMount() {
        let {id} = this.props;
        let comment = await this.commentService.comment(id);
        this.setState({comment})
    }

    render() {
        let {comment} = this.state
        return (
            <div>
                {comment&& <div>{comment.postId}-{comment.id}-{comment.name}-{comment.email}</div>}
            </div>
        );
    }
}

export default FullComment;