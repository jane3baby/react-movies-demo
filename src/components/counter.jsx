import React, { Component } from 'react';

// import Counters from './counters';

export default class Counter extends Component {

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onReset(this.props.count)}
          className="btn  btn-sm"
        >
          Reset
          </button>
        <div>
          <span style={{ padding: 20 }}>{this.props.count.value}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.count)}
            className="btn btn-secondary btn-sm"
          >
            add
          </button>
          <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.count)}>Delete</button>
        </div>
      </React.Fragment>
    )
  }

}