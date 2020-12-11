import React, {Component} from 'react';
import './header.css'
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className={'header'}>
                <div className={'header-text-style'}>
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className={'header-text-style'}>
                    <NavLink to='/info'>Info </NavLink>
                </div>
            </header>
        );
    }
}

export default Header;