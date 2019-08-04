import React, { Component } from "react";
// import { getMovies } from '../service/fakeMoviesService.js';

export default class Like extends Component {
  render() {
    let classes = "fa ";
    this.props.liked
      ? (classes += "fa-check-square-o")
      : (classes += "fa-square-o");
    return <i onClick={this.props.onClick} className={classes} />;
  }
}
