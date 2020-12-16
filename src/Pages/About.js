import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './about.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class About extends Component {
    render() {
        return (
            <div>
                <div className={'main-about'}>
                    <p className={'big-letter'}>Что такое Mavic 2 Pro?</p>

                    <div className={'text'}>
                        <p className={'small-letter'}>Дрон Mavic 2 Pro - это инженерное чудо, идеальное для аэросъемки.
                            Дрон обладает всеми лучшими технологиями DJI, он преобразит мир аэросъемки.</p>
                        <p className={'small-letter'}>Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c.
                            Камера L1D-20c работает по уникальной технологии Hasselblad Natural Colour Solution (HNCS)5,
                            позволяющей пользователям делать великолепные снимки с воздуха с разрешением в 20
                            мегапикселей и потрясающими цветами.</p>
                    </div>


                        <p className={'bottom-Text'}>Лучшая беспилотная технология аэросъемки</p>
                        <div className={'rectangel'}></div>
                        <div className={'img'}></div>
                        <div className={'errows'}>
                            <div className={'errow-right'}></div>
                            <div className={'errow-left'}></div>

                        </div>


                </div>

            </div>

        );
    }
}

export default About;