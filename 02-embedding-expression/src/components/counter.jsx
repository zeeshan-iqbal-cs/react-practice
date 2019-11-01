import React, {Component} from "react";

class Counter extends Component{
    state = {count: 1};

    render() {
        return (
            <React.Fragment>
                <h1>Number of action {this.findCount()} on this gate</h1>
                <button>Press me</button>
            </React.Fragment>
        );
    }

    findCount(){
        return ((this.state.count === 0) ? <h1>Zero</h1> : this.state.count);
    }
}

export default Counter;