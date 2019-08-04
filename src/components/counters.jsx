import React, { Component } from 'react';
// import Counter from './counter';


export default class Counters extends Component {

  

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
      <button
        onClick={() => this.props.onReset(this.props.counters)}
        className="btn  btn-sm"
      >
        Reset
        </button>
      <div>
        <span style={{ padding: 20 }}>{this.props.counters.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counters)}
          className="btn btn-secondary btn-sm"
        >
          add
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counters)}>Delete</button>
      </div>
    </React.Fragment>
    )
  }

}