import React, {Component} from 'react';
import './header.css'
import {NavLink} from "react-router-dom";
import About from "../Pages/About";

import HomaPage from "./HomaPage/HomaPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import App from "../App";
import InfoPage from "./Info/InfoPage";
import Advantages from "../Pages/Advantages";
import Сharacteristic from "../Pages/Сharacteristic"
import Questions from "../Pages/Questions";
import Contact from "../Pages/Contact";
import FullUser from "../Users/FullUser";
import Navigation from "./Navigation/Navigation";


class Header extends Component {
    render() {
        return (

            <div>
                <div>
                    <Navigation/>
                </div>

                <div className={'center'}>
                    <p className={'mavic'}>Mavic 2 Pro</p>
                    <div className={'img-center'}></div>
                    <p className={'center-text-small'}>Квадрокоптер Dji Mavic 2 Pro </p>
                    <p className={'center-text-small'}>с профессиональной камерой Hasselblad</p>
                </div>


                <div className={'bottom'}>
                    <div className={'bottom-img'}>
                        <div className={'facebook-img'}></div>
                        <div className={'youtube-img'}></div>
                        <div className={'instagram-img'}></div>
                    </div>
                    <div>
                        <div className={'arrow-img'}></div>
                    </div>
                </div>
            </div>


        );
    }
}

export default withRouter(Header);