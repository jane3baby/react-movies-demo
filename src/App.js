import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 2 },
    ]
  }

  handleDelete = (count) => {
    const counters = this.state.counters.filter(ele => ele.id !== count.id)
    this.setState({ counters })
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters })
  }

  handleIncrement = count => {
    const counts = [...this.state.counters]
    const index = counts.indexOf(count)
    counts[index] = { ...count }
    counts[index].value++;
    this.setState({ counters: counts })

  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className='container'>
          {this.state.counters.map(count => (
            <Counters key={count.id}  onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset} counters={count} />
          ))}

        </main>
      </React.Fragment>
    );
  }
}

export default App;
