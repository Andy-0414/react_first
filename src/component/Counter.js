import React, { Component } from 'react';

class Counter extends Component {
    state = {
        num : 0
    }
    Inc = () => {
        this.setState(({num})=>({
            num: num + 1
        }));
    }
    Dec = () => {
        // this.setState({
        //     num: this.state.num - 1
        // });
        this.setState(({ num }) => ({
            num: num + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.Inc}>+</button><button onClick={this.Dec}>-</button><br></br>
                Counter : {this.state.num}
            </div>
        );
    }
}

export default Counter;