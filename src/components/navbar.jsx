import React, { Component } from "react";

export default class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
