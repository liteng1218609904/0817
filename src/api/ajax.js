/*
使用axios封装ajax请求的函数模块
函数的返回值是promise
 */
//API接口由4个部分组成，url, data={}, type='GET'为处理请求的
//url请求地址  data={}所有请求参数的集合对象  type方式

import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
  // get请求
  if(type==='GET') {
    // 根据data来拼query参数串
    let queryStr = ''
    //Object.keys(data) : 得到指定对象自身所有属性名组成的数组   ['username', 'password']
    Object.keys(data).forEach(key => {         //遍历数组，得到每个参数名
      const value = data[key]      //key得到对应的参数值value，属性名取属性值data[key]属性名为变量用[]
      queryStr += `${key}=${value}&`   //将key与value组成串拼到
    })
    if(queryStr) {// data={}有参数   username=tom&password=123&
      queryStr = queryStr.substring(0, queryStr.length-1)  // username=tom&password=123   0-倒数第一个
      url += '?' + queryStr  //login?username=tom&password=123
    }// queryStr本身不可变，重新赋值                                                        //有参数 为什么删掉&
    return axios.get(url)
  } else {// post请求
    return axios.post(url, data)  //为啥
  }
}