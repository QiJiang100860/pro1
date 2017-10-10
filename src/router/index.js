import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//引入路由对应的页面
import Table from '../components/Table';
import Page2 from '../components/page2.js';
import Page3 from '../components/page3.js';
// import NotFound from '../components/404.js';



export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Route exact path="/" component={Table}/>
                <Route path="/Page2" component={Page2}/>
                <Route path="/Page3" component={Page3}/>
                {/*<Route path="/*" component={NotFound}/>*/}
            </div>
        )
    }
}