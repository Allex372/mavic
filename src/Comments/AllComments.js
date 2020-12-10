import React, {Component} from 'react';
import {CommentsSercice} from "../services/CommentsSercice";
import Comment from "./Comment";
import FullComment from "./FullComment";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllComments extends Component {

    state = {comments:[]}
    commentService = new CommentsSercice();

     async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}/>) }
                <hr/>
                    <Switch>
                        <Route path={url + '/:id'} render={(props)=>{
                            let {match:{params:{id}}} = props;
                            return <FullComment id={id} key={id}/>
                        }}>

                        </Route>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComments);