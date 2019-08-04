import React, { Component } from 'react';
// import { getMovies } from '../service/fakeMoviesService.js';

export default class Like extends Component {


  render() {
    let classes = "fa fa-heart"
    !this.props.liked && (classes += "-o");
    return (
      <i onClick={this.props.onClick} className={classes}></i>
    )
  }

}