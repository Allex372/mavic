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

class Header extends Component {
    render() {
        return (

            <div className={'main'}>

                <header className={'header'}>

                    <div className={'top-left'}>

                        <div className={'pic'}></div>
                            <div className={'header-text-style'}>
                                MAVIC 2 PRO
                            </div>
                    </div>

                    <div className={'top-center'}>
                        <NavLink to={'/about'}>
                            <div className={'header-text-style'}>
                                О ДРОНЕ
                            </div>
                        </NavLink>


                        <div className={'header-text-style'}>
                            <NavLink to='/info'>
                                <div className={'header-text-style'}>
                                    ПРЕИМУЩЕСТВА
                                </div>
                            </NavLink>
                        </div>
                        <div className={'header-text-style'}>
                            <NavLink to='/'>
                                <div className={'header-text-style'}>
                                    ХАРАКТЕРИСТИКИ
                                </div>
                            </NavLink>
                        </div>
                        <div className={'header-text-style'}>
                            <NavLink to='/'>
                                <div className={'header-text-style'}>
                                    ВОПРОСЫ
                                </div>
                            </NavLink>
                        </div>
                        <div className={'header-text-style'}>
                            <NavLink to='/'>
                                <div className={'header-text-style'}>
                                    КОНТАКТЫ
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className={'top-right'}>
                        <button className={'btn-top'}>
                            <div className={'header-text-style'}>
                            Купить
                            </div>
                        </button>
                            <NavLink to='/'>
                                <div className={'header-text-style'}>
                                    0717171711
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


                <Switch>
                    <Route path={'/about'} component={<About/>}/>
                </Switch>
            </div>


        );
    }
}

export default withRouter(Header);