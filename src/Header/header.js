import React, {Component} from 'react';
import './header.css'
import Navigation from "../Navigation/Navigation";


export const Header = () => {
    return (
        <div className={'main'}>

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
