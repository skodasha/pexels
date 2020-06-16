import React from 'react';

import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
    return(
        <div>
            <Navbar/>
            <Header/>
            <Body/>
        </div>
    )
}

export default App