import React,{Component } from 'react'
class Page3 extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h2>集成步骤</h2>
                <ol>
                    <li>安装node环境</li>
                    <li>选择包管理器npm yarn</li>
                    <li>全局安装creat-react-app脚手架工具（webstorm配置好可以省略）</li>
                    <li>create-react-app projectName 用这个命令来创建我们的项目</li>
                    <li>集成路由 react-router（版本坑注意）</li>
                    <li>集成redux（选择性集成）</li>
                    <li>集成fetch（promice），注意封装公共方法</li>
                </ol>
            </div>
        )
    }
}
export default Page3;