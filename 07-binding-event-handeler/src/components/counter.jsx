import React, { Component } from "react";

class Counter extends Component {
  /*
  constructor() {
    super();
    // console.log("Constructure", this);

    this.buttonClick = this.buttonClick.bind(this);
  }
  */

  state = {
    count: 1,
    tags: []
  };

  buttonClick = () => {
    console.log("Button clicked", this.state.count);
  };

  createMatter() {
    if (this.state.tags.length === 0) return <p>List is Empty</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.buttonClick} className="btn btn-primary m-2">
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
