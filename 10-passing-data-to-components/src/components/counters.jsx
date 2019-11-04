import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counter.map(nCounter => (
          <Counter key={nCounter.id} value={nCounter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
