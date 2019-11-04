import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };

  buttonClick(hello) {
    console.log(hello);
    this.setState(state => ({
      count: this.state.count + hello
    }));
  }

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
        <button
          onClick={this.buttonClick.bind(this, 2)}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <span>{this.state.count}</span>
      </React.Fragment>
    );
  }
}

export default Counter;
