import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './pages/Categories';
import Main from './pages/Main'


function App() {
    return(
        <Router>
            <Switch>
                <Route path='/search' exact component={Categories}/>
                <Route path='/' exact component={Main}/>
            </Switch>   
        </Router>
    )
}

export default App