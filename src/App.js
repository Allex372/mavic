import React, {Component} from 'react';
import {Switch, Route,} from "react-router";

import Header from "./Header/header";
import './App.css'
import InfoPage from "./Header/Info/InfoPage";
import About from "./Pages/About";
import Advantages from "./Pages/Advantages";
import Сharacteristic from "./Pages/Сharacteristic";
import Questions from "./Pages/Questions";
import Contact from "./Pages/Contact";
import Navigation from "./Navigation/Navigation";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Navigation/>
                </Switch>


                <main>

                    <Switch>
                        <Route path={'/home'} render={()=><Header/>}/>

                        <Route path={'/about'} render={() => <About/>}/>

                        <Route path={'/info'} render={() => <InfoPage/>}/>

                        <Route path={'/advantages'} render={() => <Advantages/>}/>

                        <Route path={'/characteristic'} render={() => <Сharacteristic/>}/>

                        <Route path={'/questions'} render={() => <Questions/>}/>

                        <Route path={'/contact'} render={() => <Contact/>}/>

                        <Route path={'/hw'} render={() => <InfoPage/>}/>
                    </Switch>


                </main>

            </div>);
    }
}

export default App;