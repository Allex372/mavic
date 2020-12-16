import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (

                <div>
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
                </div>

        );
    }
}

export default withRouter(Navigation);