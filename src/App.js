import React, {Component} from 'react';
import AllPosts from "./Posts/AllPosts";
import AllUsers from "./Users/AllUsers";

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

                    <Switch>
                        <Route path={'/posts'} render={()=>{
                            return <AllPosts/>
                        }}/>
                        <Route path={'/customers'} render={()=>{
                        return <AllUsers/>
                        }}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;