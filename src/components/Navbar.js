import React from 'react';
import $ from 'jquery';

import '../style/Navbar.css';
import logo from '../pictures/logo.png';

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
            <div className='nav-search'>
                <input className='nav-input' placeholder="Search for free photos and videos"/>
                <button className='nav-button'/>
            </div>
        </div>
    )
}

export default Navbar