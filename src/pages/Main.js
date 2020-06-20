import React from 'react';
import '../App.css';
import '../style/Modal.css'
import Header from '../components/Header';
import Body from '../components/Body';
import Navbar from '../components/Navbar';

function Main() {
    return(
        <div>    
            <Navbar/>    
            <Header/>
            <Body search={''}/>      
        </div>
    )
}

export default Main