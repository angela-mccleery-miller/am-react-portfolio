import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavigationComponent extends Component {
  constructor() {
    super()
  }
  render() {
    return (
     <div className="nav-wrapper">
     <div className="left-side">
      
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
        <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>

      {/* <a href="/">Wrong Home</a>
        <button>Contact</button>
        <button>Blog</button>
        <button>Add Blog</button> */}
        {false ? <button>Add Blog</button> : null }
        </div>

        <div className="right-side">ANGELA M. MILLER</div>
      </div>
    );
  }
}
