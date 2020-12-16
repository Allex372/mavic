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

class Header extends Component {
    render() {
        return (
            <Router>
            <div className={'main'}>

                <header className={'header'}>

                    <div className={'top-left'}>

                        <div className={'pic'}></div>
                        <NavLink to={'/home'}>
                            <div className={'header-text-style'}>
                                MAVIC 2 PRO
                            </div>
                        </NavLink>
                    </div>

                    <div className={'top-center'}>
                        <NavLink to={'/about'}>
                            <div className={'header-text-style'}>
                                О ДРОНЕ
                            </div>
                        </NavLink>


                        <div className={'header-text-style'}>
                            <NavLink to='/advantages'>
                                <div className={'header-text-style'}>
                                    ПРЕИМУЩЕСТВА
                                </div>
                            </NavLink>
                        </div>
                        <div className={'header-text-style'}>
                            <NavLink to='/characteristic'>
                                <div className={'header-text-style'}>
                                    ХАРАКТЕРИСТИКИ
                                </div>
                            </NavLink>
                        </div>
                        <div className={'header-text-style'}>
                            <NavLink to='/questions'>
                                <div className={'header-text-style'}>
                                    ВОПРОСЫ
                                </div>
                            </NavLink>
                        </div>
                        <div className={'header-text-style'}>
                            <NavLink to='/contact'>
                                <div className={'header-text-style'}>
                                    КОНТАКТЫ
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className={'top-right'}>
                        <button className={'btn-top'}>
                            <div className={'btn-top-text'}>
                            Купить
                            </div>
                        </button>
                            <NavLink to='/'>
                                <div className={'header-text-style'}>
                                    0717171711
                                </div>
                            </NavLink>
                        </div>
                    <div className={'header-text-style'}>
                        <NavLink to='/hw'>
                            <div className={'header-text-style'}>
                                HOME WORK
                            </div>
                        </NavLink>
                    </div>

                </header>

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

                <Switch>
                    <Route path={'/about'} render={()=><About/>}/>
                </Switch>
                <Switch>
                    <Route path={'/'} render={()=><HomaPage/>}/>
                </Switch>
                <Switch>
                    <Route path={'/info'} render={()=><InfoPage/>}/>
                </Switch>
                <Switch>
                    <Route path={'/advantages'} render={()=><Advantages/>}/>
                </Switch>
                <Switch>
                <Route path={'/characteristic'} render={()=><Сharacteristic/>}/>
                </Switch>
                <Switch>
                    <Route path={'/questions'} render={()=><Questions/>}/>
                </Switch>
                <Switch>
                    <Route path={'/contact'} render={()=><Contact/>}/>
                </Switch>
                <Switch>
                    <Route path={'/hw'} render={()=><InfoPage/>}/>
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Header);