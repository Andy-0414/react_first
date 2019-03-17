import React, { Component } from 'react';
import './App.css';
import MyComponent from './component/MyComponent'
import Counter from './component/Counter'
import ListView from './component/ListView'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyComponent name="리액트"></MyComponent>
                <Counter></Counter>
                <ListView></ListView>
            </div>
        );
    }
}

export default App;
