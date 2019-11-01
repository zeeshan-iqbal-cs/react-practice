import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 1
    };

    spanStyle = {
        fontSize: 100,
        fontWeight: "bold"
    };
    render() {
        return (
            <React.Fragment>
                <span   style={this.spanStyle} className="badge badge-primary m-2">{this.findCount()}</span>
                <button style={{fontSize:30}} className="btn btn-secondary m-sm">Press me</button>
            </React.Fragment>
        );
    }

    findCount(){
        return ((this.state.count === 0) ? <h1>Zero</h1> : this.state.count);

    }
}

export default Counter;