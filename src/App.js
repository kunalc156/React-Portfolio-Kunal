import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Header from './pages/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';

import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
      <div> 
        <Router>
        <Header />
        <Content className="main-content">
        <Switch>
           <Route exact path="/">
                <About />
              </Route> 
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
        </Switch>
        </Content>
        <Footer /> 
      </Router>
      </div>
  )
}

export default App;
 