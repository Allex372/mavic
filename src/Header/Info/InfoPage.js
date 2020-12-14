import React, {Component} from 'react';
import AllUsers from "../../Users/AllUsers";
import './info.css'
import FullUser from "../../Users/FullUser";
import {Route} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../../Posts/FullPost";
import User from "../../Users/User";

class InfoPage extends Component {
    render() {
        let {match: {url}} = this.props
        return (
            <div>

                <div className={'info-users'}>
                    <div className={'show-user'}>
                        <AllUsers/>
                    </div>

                    <div className={'show-info'}>
                        <Route path={url + '/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullUser id={id} key={id}/>
                        }}>
                        </Route>
                    </div>
                </div>

                <div className={'show-comments'}>
                    <h3>Post:</h3>
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

            </div>
        );
    }
}

export default withRouter(InfoPage);