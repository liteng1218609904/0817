import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'


/*
注册路由组件
 */
export default class Register extends Component {

  // 初始化状态
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen' // dashen: 大神, laoban: 老板
  }

  // 跳转到登陆
  toLogin = () => {
    // 编程式路由导航(通过纯js实现路由跳转)
    this.props.history.replace('/login')  //跳转到login界面
  }//通过react搜索刚注册的组件register.jsx.查看属性

  // 请求注册
  register = () => {
    console.log(this.state)
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val  //[属性名]为一个变量，属性值
    })
  }

  render () {
    const {type} = this.state
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem type='text' placeholder='请输入用户名'
                       onChange={(val) => this.handleChange('username', val)}>用户名: </InputItem>
            <WhiteSpace/> { /* 一旦变化执行这个函数，传入 val  回调函数是val*/}
            <InputItem type='password' placeholder='请输入密码'
                       onChange={(val) => this.handleChange('password', val)}>密码: </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码'
                       onChange={(val) => this.handleChange('password2', val)}>确认密码: </InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型: </span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => {this.handleChange('type', 'laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => {this.handleChange('type', 'dashen')}}>大神</Radio>
            </List.Item>   {/* 回调函数是事件对象laoban*/}
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  } // InputItem改变的时候，更新内容 InputItem 独占一行，Radio单选框需要包一层<List.Item></List.Item>
}
