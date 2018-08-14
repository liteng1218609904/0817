/*
包含n个接口请求函数的对象模块，实际上为对象，里面有n个方法，或函数
每个函数的返回值是promise
 */

import ajax from './ajax'
// const BASE = 'http://localhost:4000'
const BASE = ''

//对应两个接口
//声明对象 ({username,传对象/声明两个参数就要传两个参数(username, password)

// ## 1、注册
/*export function reqRegister({username, password, type}) {
  return ajax('/register', {username, password, type}, 'POST')   //顺数固定 ，属性不能太多 {}
}*/                                                                       //路径
export const reqRegister = ({username, password, type}) => ajax(BASE+'/register', {username, password, type}, 'POST')

// ## 2、登陆                                                       //封装到对象{}
export const reqLogin = (username, password) => ajax(BASE+'/login', {username, password}, 'POST')


