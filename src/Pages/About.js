import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class About extends Component {
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


                </div>
        );
    }
}

export default About;