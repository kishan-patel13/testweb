import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Context from './components/Context';
import Gallery from './components/Gallery';
import Technology from './components/Technology';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

import './styles.scss'
import '../src/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <GetBody />
                <Footer />
            </Router>
        );
    }
}

function GetBody() {
    return (
        <Switch>
            <Route exact path='/'>
                <Context />
            </Route>
            <Route path='/Gallery'>
                <Gallery />
            </Route>
            <Route path='/Technology'>
                <Technology />
            </Route>
            <Route path='/Contact'>
                <Contact />
            </Route>
            <Route path='/About'>
                <About />
            </Route>
        </Switch>
    );
}


export default App;