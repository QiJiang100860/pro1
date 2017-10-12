import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom';

//引入路由对应的页面
import mainTable from '../../components/mainTable';
import Page2 from '../../components/page2.js';
import Page3 from '../../components/page3.js';
// import NotFound from '../../components/404.js';



export default class RouterPage extends Component{
    render(){
        return (
            <div>
                <Route exact path="/" component={mainTable}/>
                <Route path="/Page2" component={Page2}/>
                <Route path="/Page3" component={Page3}/>
                {/*<Route path='/404' component={NotFound} />*/}
                {/*<Redirect from='*' to='/404' />*/}
            </div>
        )
    }
}