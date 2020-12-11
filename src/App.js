import React, {Component} from 'react';
import {Switch, Route,} from "react-router";

import Header from "./Header/header";
import AllPosts from "./Posts/AllPosts";
import AllUsers from "./Users/AllUsers";
import AllComments from "./Comments/AllComments";
import './App.css'
import HomaPage from "./Header/HomaPage/HomaPage";
import InfoPage from "./Header/Info/InfoPage";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Header/>
                </Switch>

                <main>
                    <Switch>

                        <Route path={'/posts'} component={AllPosts}/>
                        <Route path={'/customers'} component={AllUsers}/>
                        <Route path={'/comments'} component={AllComments} />
                        <Route path='/info' render={() => <InfoPage/>} />
                        <Route path='/' render={() => <HomaPage/>} />

                    </Switch>
                </main>

            </div>);
    }
}

export default App;