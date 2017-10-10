import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';


import './App.css';

//引入路由组件基础包
import { BrowserRouter as Router, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RouterMap from './router/index.js';
const history = createHistory();


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Router history = {history}>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <Link to="/">
                            <div className="page-logo" />
                        </Link>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="/">
                                <Icon type="pie-chart" />
                                <span>表格</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/Page2">
                                <Icon type="desktop" />
                                <span>电子设备</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>部门</span></span>}
                            >
                                <Menu.Item key="3">研发</Menu.Item>
                                <Menu.Item key="4">设计</Menu.Item>
                                <Menu.Item key="5">产品</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>团队</span></span>}
                            >
                                <Menu.Item key="6">matt开发</Menu.Item>
                                <Menu.Item key="8">summer开发</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Link to="/Page3">
                                <Icon type="file" />
                                <span>文件系统</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#008000', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <RouterMap/>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
export default App;