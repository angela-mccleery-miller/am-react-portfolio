import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    //     { title: "Quip", category: "eCommerce", slug: 'quip' },
    //     { title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' },
    //     { title: "Ministry Safe", category: "Enterprise", slug: 'ministry-safe' },
    //     { title: "SwingAway", category: "eCommerce", slug: 'swingaway' },
    //   ],
    // };
    };

    this.handleFilter = this.handleFilter.bind(this);
  // this.getPortfolioItems = this.getPortfolioItems.bind(this);

  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  getPortfolioItems() {
    axios
    .get("https://angelamiller.devcamp.space/portfolio/portfolio_items")
    .then(response => {
      // console.log("response data", response);
      this.setState({
        data: response.data.portfolio_items
      })
    })
    .catch(error => {
    // handle error
      console.log(error);
    });
  }
 
  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} name={item.name} url={item.url} slug={item.id} />
   
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
}

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    this.getPortfolioItems();

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
