import React, { Component } from "react";

import PortfolioItem from "./portfolio/portfolio-items";


export default class PortfolioContainer extends Component {
    constructor () {
        super();
           // This is where the set up state occurs….. I want to 

           this.state = {
              pageTitle: "Welcome to my portfolio",
              data: [
                  {title: "Quip"},
                  {title: "Eventbrite"},
                  {title: "Ministry Safe"},
                  {title: "SwingAway"}
              ]
           };
        // console.log("Portfolio container has rendered");
      }

      portfolioItems() {
        //   const data = ["Quip", "Eventbrite", "Ministry Safe"];

          return this.state.data.map(item => {
              // we are calling a JS function in {item}
              return <PortfolioItem title={item.title} url={"googl.com"} />;
          })
      }
      
      render() {
        return (
            <div>
              <h2>{this.state.pageTitle}</h2>
              {this.portfolioItems()}
            </div>
        );
    }
}
