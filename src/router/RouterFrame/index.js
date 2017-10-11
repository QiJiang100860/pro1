import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//引入路由对应的页面
import Frame from '../../components/Frame/index';

export default class RouterFrame extends Component{
    render(){
        return (
            <div>
                <Route path="/" component={Frame}/>
            </div>
        )
    }
}