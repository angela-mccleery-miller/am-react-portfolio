import React, { Component } from "react";

import PortfolioItem from "./portfolio/portfolio-items"


export default class PortfolioContainer extends Component {
    constructor () {
        super();
           // This is where the set up state occurs….. I want to 
        console.log("Portfolio container has rendered");
      }

      portfolioItems() {
          const data = ["Quip", "Eventbrite", "Ministry Safe"];

          return data.map(item => {
              return <PortfolioItem />;
          })
      }
      
      render() {
        return (
            <div>
              <h2>Portfolio items go here...</h2>
              {this.portfolioItems()}
            </div>
        );
    }
}
