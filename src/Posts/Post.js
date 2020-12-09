import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Post extends Component {
    render() {
        let {item, match:{url}} = this.props
        return (
            <div>
                {item.userId}-{item.id}-{item.title}-<Link to={`${url}/${item.id}`}>open</Link>
            </div>
        );
    }
}

export default withRouter(Post);