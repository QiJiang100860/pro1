import React, { Component } from 'react';

import Login from './components/Login';
import './App.css';
class App extends Component {

    constructor(props,context) {
        super(props,context);
        this.state = {
            isLogin:false
        }
    }
    loginFunc(){
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
    render() {
        return (
            <div>{
                this.state.isLogin?
                    this.props.children:
                    <Login loginFunc={this.loginFunc.bind(this)}/>
            }</div>
        );
    }
}
export default App;
