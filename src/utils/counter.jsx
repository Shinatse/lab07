import React, {Component} from 'react';

class Counter extends  Component {
    state =  {
    count: 0
};


    incrementNumber = () => {
        this.setState({count: this.state.count + 1});
    };

    currentCount = () => {
      return this.state.count === 0 ? 'Zero' : this.state.count;
    };
    resetCount = () => {
        this.setState({count: 0});
    };
    render(){
        return <div>
            <span className="badge bg-primary">{this.currentCount()}</span>
            <button className="btn tbn" onClick={this.incrementNumber}>Add Value </button>
            <button className="btn tbn" onClick={this.resetCount}>Reset </button>
            </div>
    }
}
export default Counter;