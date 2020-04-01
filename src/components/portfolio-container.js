import React, { Component } from "react";

import PortfolioItem from "./portfolio/portfolio-items"


export default class PortfolioContainer extends Component {
    constructor () {
        super();
           // This is where the set up state occurs….. I want to 
        console.log("Portfolio container has rendered");
      }
      
      render() {
        return (
            <div>
              <h2>Portfolio items go here...</h2>

              <PortfolioItem/>
            </div>
        );
    }
}
