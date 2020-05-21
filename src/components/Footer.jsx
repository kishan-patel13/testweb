import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="">
                <ul className='nav nav-justified'>
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/Gallery'>Gallery</Link></li>
                    <li className='nav-item'><Link to='/Technology'>Technology</Link></li>
                    <li className='nav-item'><Link to='/Contact'>Contact</Link></li>
                    <li className='nav-item'><Link to='/About'>About</Link></li>
                </ul>
                <hr style={{width: "70%"}} color="#fff" />
                <p>&copy;Copyright. All rights reserved.</p>
            </footer>
        );
    }
}
