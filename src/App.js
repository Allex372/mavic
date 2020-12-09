import React, {Component} from 'react';
import AllPosts from "./Posts/AllPosts";
import AllUsers from "./Users/AllUsers";
import AllComments from "./Comments/AllComments";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>

                    <div>
                        <Link to={'/customers'}>
                            users
                        </Link>
                    </div>

                    <div>
                        <Link to={'/comments'}>
                            comments
                        </Link>
                    </div>

                    <Switch>

                        <Route path={'/posts'} render={()=>{
                            return <AllPosts/>
                        }}/>

                        <Route path={'/customers'} render={()=>{
                        return <AllUsers/>
                        }}/>

                        <Route path={'/comments'} render={()=>{
                            return <AllComments/>
                        }}>
                        </Route>

                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;