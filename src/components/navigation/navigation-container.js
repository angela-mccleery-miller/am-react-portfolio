import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
      
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink to="/about-me">About</NavLink>
      <a href="/">Wrong Home</a>
        <button>Contact</button>
        <button>Blog</button>
        <button>Add Blog</button>
        {false ? <button>Add Blog</button> : null }
      </div>
    );
  }
}
