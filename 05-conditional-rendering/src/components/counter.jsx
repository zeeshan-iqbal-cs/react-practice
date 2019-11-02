import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
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
    return <React.Fragment>{this.createMatter()}</React.Fragment>;
  }
}

export default Counter;
