import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";


export default class App extends Component {
   render() {
    return (
      <div className="">
        <Router>

          <div>
          
            <NavigationContainer />

          <Switch>
            {/* without "exact" it would be similar to this:
            if (route === /)
            else if (route === /about-me) */}
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth}/>
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />

          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}


