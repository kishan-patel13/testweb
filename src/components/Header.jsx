import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="child">MY LOGO</div>
                <ul className='child nav nav-pills'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Gallery'>Gallery</Link></li>
                    <li><Link to='/Technology'>Technology</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </header>
        );
    }
}


export default Header;