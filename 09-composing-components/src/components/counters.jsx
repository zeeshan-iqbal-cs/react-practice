import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counter: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
  };
  render() {
    return (
      <div>
        {this.state.counter.map(nCounter => (
          <Counter key={nCounter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
