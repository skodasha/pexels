import React from 'react';
import $ from 'jquery';

import '../style/Navbar.css';
import logo from '../pictures/logo.png';
import Input from '../components/Input';

function Navbar() {
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos <= 100) {
            $('.nav-default').removeClass('top');
            $('.nav-search').removeClass('not-hidden');
        } else {
            $('.nav-default').addClass('top');
            $('.nav-search').addClass('not-hidden');
        }
    })
    
    return (
        <div className='nav-default'>
            <img src={logo} className='nav-logo'/>
            <h1 className='nav-title'>Pexels</h1>
            <Input style={'nav-search'}/>
        </div>
    )
}

export default Navbar