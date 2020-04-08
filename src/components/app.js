import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";


export default class App extends Component {
  render() {
    return (
      <div className="app">

        <Router>

          <div>
            <NavigationContainer />

            <Switch>
            {/* without "exact" it would be similar to this:
            if (route === /)
            else if (route === /about-me) */}
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>

        </Router>


        <h1>Angela Miller's Portfolio</h1>
        <div>{moment().format('MMM Do YYYY, h:mm:ss a')}
        <PortfolioContainer />

       </div>
      </div>
    );
  }
}
