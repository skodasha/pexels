import React from 'react';

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