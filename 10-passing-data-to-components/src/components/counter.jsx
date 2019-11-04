import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  buttonClick(hello) {
    console.log(hello);
    this.setState(state => ({
      count: this.state.count + hello
    }));
  }

  makeSpan() {
    if (this.state.count === 0) {
      return <span className="badge badge-warning m-2">Zero</span>;
    } else {
      return (
        <span className="badge badge-secondary m-2">{this.state.count}</span>
      );
    }
  }
  render() {
    console.log(this.props);

    return (
      <div>
        {this.makeSpan()}
        <button
          onClick={this.buttonClick.bind(this, 1)}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
